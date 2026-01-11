import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

/**
 * Readiness probe endpoint
 * Returns 200 when the application is ready to accept traffic
 * Returns 503 when the application is not ready (e.g., during startup)
 */
export async function GET() {
  try {
    // Check if critical dependencies are available
    const checks = {
      environment: process.env.NODE_ENV !== undefined,
      publicUrl: process.env.NEXT_PUBLIC_SITE_URL !== undefined,
      // Add more critical checks as needed
    };

    const allReady = Object.values(checks).every(check => check === true);

    if (!allReady) {
      return NextResponse.json(
        {
          status: 'not_ready',
          timestamp: new Date().toISOString(),
          checks,
        },
        { status: 503 }
      );
    }

    return NextResponse.json(
      {
        status: 'ready',
        timestamp: new Date().toISOString(),
        checks,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: 'error',
        timestamp: new Date().toISOString(),
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 503 }
    );
  }
}

// HEAD request for lightweight readiness checks
export async function HEAD() {
  try {
    const checks = {
      environment: process.env.NODE_ENV !== undefined,
      publicUrl: process.env.NEXT_PUBLIC_SITE_URL !== undefined,
    };

    const allReady = Object.values(checks).every(check => check === true);

    return new NextResponse(null, { status: allReady ? 200 : 503 });
  } catch {
    return new NextResponse(null, { status: 503 });
  }
}
