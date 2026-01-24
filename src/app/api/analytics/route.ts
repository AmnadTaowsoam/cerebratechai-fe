import { NextRequest, NextResponse } from 'next/server';
import {
  AnalyticsEventSchema,
  AnalyticsResponseSchema,
} from '@/lib/schemas/analytics';
import { apiClient } from '@/lib/api-client';

// Avoid spamming downstream requests when the analytics service is offline
let analyticsUnavailable = false;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = AnalyticsEventSchema.parse(body);

    // Send to analytics endpoint
    const analyticsUrl = process.env.ANALYTICS_ENDPOINT;
    const isAnalyticsEnabled = String(
      process.env.ANALYTICS_ENABLED ?? 'false'
    ).toLowerCase();
    const analyticsDisabled =
      isAnalyticsEnabled === 'false' || isAnalyticsEnabled === '0';

    // Always disable analytics in development mode
    if (
      process.env.NODE_ENV === 'development' ||
      !analyticsUrl ||
      analyticsDisabled ||
      analyticsUnavailable
    ) {
      return NextResponse.json(
        { success: true, message: 'Analytics disabled in development mode' },
        { status: 200 }
      );
    }

    try {
      const response = await apiClient.post(analyticsUrl, validatedData);
      const validatedResponse = AnalyticsResponseSchema.parse(response);

      return NextResponse.json(validatedResponse);
    } catch (error) {
      analyticsUnavailable = true;
      console.warn(
        'Analytics forwarding failed. Further attempts will be skipped until the server restarts. ' +
          'Verify ANALYTICS_ENDPOINT or set ANALYTICS_ENABLED=false locally.',
        error
      );
      return NextResponse.json(
        { success: false, message: 'Analytics forwarding failed' },
        { status: 202 }
      );
    }
  } catch (error) {
    console.error('Analytics error:', error);

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
