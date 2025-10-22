import { ImageResponse } from 'next/og';
import { getCaseBySlug } from '@/data/cases';

export const runtime = 'edge';

export default async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const caseItem = getCaseBySlug(params.slug);
  
  if (!caseItem) {
    return new Response('Case not found', { status: 404 });
  }

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
          backgroundColor: '#0a0a0a',
          backgroundImage: 'linear-gradient(45deg, #1e1e1e 0%, #2a2a2a 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '60px',
            maxWidth: '1000px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: '#ffffff',
              marginBottom: '20px',
              lineHeight: '1.2',
            }}
          >
            {caseItem.title}
          </div>
          
          <div
            style={{
              fontSize: '24px',
              color: '#a0a0a0',
              marginBottom: '40px',
              lineHeight: '1.4',
            }}
          >
            {caseItem.subtitle}
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              justifyContent: 'center',
              marginBottom: '40px',
            }}
          >
            {caseItem.outcomes.slice(0, 3).map((outcome, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#3b82f6',
                  color: '#ffffff',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontSize: '18px',
                  fontWeight: '600',
                }}
              >
                {outcome.value} {outcome.label}
              </div>
            ))}
          </div>

          <div
            style={{
              fontSize: '20px',
              color: '#60a5fa',
              fontWeight: '600',
            }}
          >
            Cerebratechai Case Study
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
