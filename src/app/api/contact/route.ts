import { NextRequest, NextResponse } from 'next/server';
import { ContactFormSchema, ContactResponseSchema } from '@/lib/schemas/contact';
import { apiClient } from '@/lib/api-client';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // Ensure website field is empty string if not provided (honeypot field)
    const formData = {
      ...body,
      website: body.website || '',
    };
    const validatedData = ContactFormSchema.parse(formData);

    // Send to contact service
    const contactServiceUrl = process.env.CONTACT_SERVICE_URL || 'https://contact-service-production.up.railway.app';
    const apiKey = process.env.CONTACT_API_KEY || '764d0f97752fe6df432ccd0e4bd81d54f83f86fed9e40e326a90c58de54cdf0b';
    
    // Generate request ID for tracking
    const requestId = `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    // Log for debugging (remove in production)
    console.log('Sending to contact service:', {
      url: `${contactServiceUrl}/api/contact`,
      data: validatedData,
    });

    const response = await fetch(`${contactServiceUrl}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': apiKey,
        'X-Request-ID': requestId,
      },
      body: JSON.stringify(validatedData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      let errorMessage = `Contact service returned ${response.status}`;
      try {
        const errorJson = JSON.parse(errorText);
        errorMessage = errorJson.message || errorJson.error || errorMessage;
        if (errorJson.details) {
          errorMessage += `: ${JSON.stringify(errorJson.details)}`;
        }
      } catch {
        errorMessage = errorText || errorMessage;
      }
      throw new Error(errorMessage);
    }

    const result = await response.json();
    const validatedResponse = ContactResponseSchema.parse(result);

    return NextResponse.json(validatedResponse);
  } catch (error) {
    console.error('Contact form error:', error);
    
    if (error instanceof Error) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
