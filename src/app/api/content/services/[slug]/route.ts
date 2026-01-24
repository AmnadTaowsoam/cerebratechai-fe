import { NextRequest, NextResponse } from 'next/server';
import { ContentResponseSchema } from '@/lib/schemas/content';
import { apiClient } from '@/lib/api-client';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { searchParams } = new URL(request.url);
    const locale = searchParams.get('locale') || 'en';

    const response = await apiClient.get(
      `/api/content/services/${params.slug}?locale=${locale}`
    );
    const validatedResponse = ContentResponseSchema.parse(response);

    return NextResponse.json(validatedResponse);
  } catch (error) {
    console.error('Content service error:', error);

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
