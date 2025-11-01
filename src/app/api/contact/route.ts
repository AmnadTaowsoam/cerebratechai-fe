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
    const contactServiceUrl = process.env.CONTACT_SERVICE_URL || 'https://cerebratechai-production.up.railway.app';
    const apiKey = process.env.CONTACT_API_KEY || '764d0f97752fe6df432ccd0e4bd81d54f83f86fed9e40e326a90c58de54cdf0b';
    
    // Generate request ID for tracking
    const requestId = `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    // Check if service is available by testing health endpoint first
    try {
      const healthCheck = await fetch(`${contactServiceUrl}/health`, {
        method: 'GET',
        signal: AbortSignal.timeout(5000), // 5 second timeout
      });
      
      if (!healthCheck.ok) {
        throw new Error(`Service health check failed with status ${healthCheck.status}`);
      }
    } catch (healthError) {
      console.error('Contact service health check failed:', {
        url: `${contactServiceUrl}/health`,
        error: healthError instanceof Error ? healthError.message : 'Unknown error',
      });
      
      throw new Error(
        `Contact service is not available. Please check Railway deployment. Service URL: ${contactServiceUrl}`
      );
    }

    // Log for debugging (remove in production)
    console.log('Sending to contact service:', {
      url: `${contactServiceUrl}/api/contact`,
      data: validatedData,
    });

    let response: Response;
    try {
      response = await fetch(`${contactServiceUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': apiKey,
          'X-Request-ID': requestId,
        },
        body: JSON.stringify(validatedData),
      });
    } catch (fetchError) {
      // Handle network errors (e.g., Railway service down, wrong URL)
      console.error('Failed to connect to contact service:', {
        url: `${contactServiceUrl}/api/contact`,
        error: fetchError instanceof Error ? fetchError.message : 'Unknown error',
      });
      
      throw new Error(
        `Cannot connect to contact service. Please check that the service is running at ${contactServiceUrl}`
      );
    }

    if (!response.ok) {
      const errorText = await response.text();
      let errorMessage = `Contact service returned ${response.status}`;
      let errorDetails: any = null;
      
      try {
        const errorJson = JSON.parse(errorText);
        errorMessage = errorJson.message || errorJson.error || errorMessage;
        errorDetails = errorJson.details || errorJson;
        
        // Log detailed error for debugging
        console.error('Backend validation error:', {
          status: response.status,
          error: errorJson.error,
          message: errorJson.message,
          details: errorJson.details,
          fullResponse: errorJson,
        });
        
        if (errorJson.details) {
          errorMessage += `: ${JSON.stringify(errorJson.details)}`;
        }
      } catch {
        errorMessage = errorText || errorMessage;
        console.error('Backend error (non-JSON):', errorText);
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
