import { NextRequest, NextResponse } from 'next/server';
import { ContentListResponseSchema } from '@/lib/schemas/content';
import { apiClient } from '@/lib/api-client';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const page = searchParams.get('page') || '1';
    const limit = searchParams.get('limit') || '10';
    const category = searchParams.get('category');
    const locale = searchParams.get('locale') || 'en';

    // Build query string
    const queryParams = new URLSearchParams({
      page,
      limit,
      locale,
      ...(category && { category }),
    });

    const response = await apiClient.get(
      `/api/content/services?${queryParams}`
    );
    const validatedResponse = ContentListResponseSchema.parse(response);

    return NextResponse.json(validatedResponse);
  } catch (error) {
    console.error('Content services error:', error);

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
