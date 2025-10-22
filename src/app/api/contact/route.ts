import { NextRequest, NextResponse } from 'next/server';
import { ContactFormSchema, ContactResponseSchema } from '@/lib/schemas/contact';
import { apiClient } from '@/lib/api-client';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = ContactFormSchema.parse(body);

    // Send to contact service
    const contactServiceUrl = process.env.CONTACT_SERVICE_URL || 'https://cerebratechai-production.up.railway.app';
    const apiKey = process.env.CONTACT_API_KEY || '764d0f97752fe6df432ccd0e4bd81d54f83f86fed9e40e326a90c58de54cdf0b';

    const response = await fetch(`${contactServiceUrl}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': apiKey,
      },
      body: JSON.stringify(validatedData),
    });

    if (!response.ok) {
      throw new Error(`Contact service returned ${response.status}`);
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
