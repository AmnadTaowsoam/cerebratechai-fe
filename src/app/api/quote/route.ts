import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, projectType, source, locale } = body;

    // Validate required fields
    if (!email || !projectType) {
      return NextResponse.json(
        { success: false, message: 'Email and project description are required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Prepare data for backend
    const quoteData = {
      email,
      projectType,
      source: source || 'unknown',
      locale: locale || 'en',
      timestamp: new Date().toISOString(),
      type: 'quick_quote',
    };

    // Send to backend API
    const backendUrl = process.env.BACKEND_API_URL || process.env.NEXT_PUBLIC_BACKEND_API_URL;

    if (backendUrl) {
      try {
        const backendResponse = await fetch(`${backendUrl}/api/v1/leads/quote`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.BACKEND_API_KEY || ''}`,
          },
          body: JSON.stringify(quoteData),
        });

        if (!backendResponse.ok) {
          console.error('Backend API error:', await backendResponse.text());
          // Don't fail the request, just log the error
        }
      } catch (backendError) {
        console.error('Failed to send to backend:', backendError);
        // Don't fail the request, just log the error
      }
    }

    // TODO: Integrate with email service (SendGrid, AWS SES, etc.)
    // For now, just log and return success
    console.log('Quote request received:', {
      email,
      projectType: projectType.substring(0, 50) + '...',
      source,
      locale,
    });

    // Send email notification to team
    if (process.env.NOTIFICATION_EMAIL) {
      try {
        // TODO: Implement email sending
        // await sendEmail({
        //   to: process.env.NOTIFICATION_EMAIL,
        //   subject: `New Quote Request from ${email}`,
        //   body: `Project: ${projectType}\nSource: ${source}\nLocale: ${locale}`,
        // });
      } catch (emailError) {
        console.error('Failed to send notification email:', emailError);
      }
    }

    return NextResponse.json({
      success: true,
      message: locale === 'th'
        ? 'เราได้รับคำขอของคุณแล้ว จะส่งใบเสนอราคาให้ภายใน 24 ชั่วโมง'
        : 'Quote request received. We\'ll send you a preliminary quote within 24 hours.',
    });

  } catch (error) {
    console.error('Quote API error:', error);
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : 'Internal server error'
      },
      { status: 500 }
    );
  }
}
