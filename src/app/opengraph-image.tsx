import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

async function handler(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'CerebraTechAI';
    const description =
      searchParams.get('description') ||
      'Turn Pain Points into Production-Ready AI Systems';
    const locale = searchParams.get('locale') || 'en';

    const isThai = locale.startsWith('th');

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0B1220',
            backgroundImage:
              'linear-gradient(135deg, #0B1220 0%, #1a1a2e 50%, #16213e 100%)',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {/* Background Pattern */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)',
            }}
          />

          {/* Main Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '60px',
              textAlign: 'center',
              maxWidth: '1000px',
            }}
          >
            {/* Logo */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '40px',
              }}
            >
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '20px',
                  background:
                    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '20px',
                }}
              >
                <div
                  style={{
                    color: 'white',
                    fontSize: '32px',
                    fontWeight: 'bold',
                  }}
                >
                  C
                </div>
              </div>
              <div
                style={{
                  color: 'white',
                  fontSize: '48px',
                  fontWeight: 'bold',
                  letterSpacing: '-0.02em',
                }}
              >
                CerebraTechAI
              </div>
            </div>

            {/* Title */}
            <div
              style={{
                color: 'white',
                fontSize: '56px',
                fontWeight: 'bold',
                lineHeight: '1.2',
                marginBottom: '24px',
                textAlign: 'center',
                maxWidth: '900px',
              }}
            >
              {title}
            </div>

            {/* Description */}
            <div
              style={{
                color: '#94a3b8',
                fontSize: '24px',
                lineHeight: '1.4',
                marginBottom: '40px',
                textAlign: 'center',
                maxWidth: '800px',
              }}
            >
              {description}
            </div>

            {/* Tagline */}
            <div
              style={{
                color: '#64748b',
                fontSize: '18px',
                fontWeight: '500',
                textAlign: 'center',
              }}
            >
              {isThai
                ? 'สตูดิโอ AI แบบบูติก • กรุงเทพฯ, ประเทศไทย'
                : 'Boutique AI Studio • Bangkok, Thailand'}
            </div>
          </div>

          {/* Bottom Accent */}
          <div
            style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              right: '0',
              height: '8px',
              background:
                'linear-gradient(90deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
            }}
          />
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}

export default handler;
export { handler as GET };
