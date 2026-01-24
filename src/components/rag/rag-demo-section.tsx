'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { Send, Sparkles } from 'lucide-react';
import { rag } from '@/lib/api-client';

type RAGResponse = {
  answer?: string;
  citations?: Array<{ source: string; snippet: string }>;
  error?: string;
};

export function RAGDemoSection() {
  const locale = useLocale();
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<RAGResponse | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || loading) return;

    setLoading(true);
    setResponse(null);

    try {
      const result = await rag.query(query);
      setResponse(result);
    } catch (error) {
      setResponse({
        error: locale.startsWith('th')
          ? 'เกิดข้อผิดพลาด กรุณาลองใหม่'
          : 'An error occurred. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-surface-2 py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <span className="inline-flex items-center rounded-full bg-grad-aurora px-4 py-1 text-sm font-medium text-white">
            {locale.startsWith('th') ? 'เดโม' : 'Demo'}
          </span>
          <h2 className="mt-4 text-3xl font-bold text-text md:text-4xl">
            {locale.startsWith('th')
              ? 'ทดลอง RAG Assistant'
              : 'Try RAG Assistant'}
          </h2>
          <p className="mt-3 mx-auto max-w-2xl text-text-muted">
            {locale.startsWith('th')
              ? 'ถามคำถามเกี่ยวกับบริการของเรา ระบบจะสืบค้นและตอบพร้อมอ้างอิง'
              : 'Ask questions about our services. The system retrieves and answers with citations.'}
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Card className="border-hairline bg-surface">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-text">
                <Sparkles className="h-5 w-5 text-primary" />
                {locale.startsWith('th') ? 'ถามคำถาม' : 'Ask a Question'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Textarea
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder={
                    locale.startsWith('th')
                      ? 'เช่น: อธิบาย workflow ของ Edge Vision...'
                      : 'e.g., Explain the Edge Vision workflow...'
                  }
                  className="min-h-[100px] border-hairline bg-surface-2 text-text"
                  disabled={loading}
                />
                <Button
                  type="submit"
                  disabled={!query.trim() || loading}
                  className="w-full bg-gradient-to-tr from-cyan-400 via-blue-600 to-indigo-600 text-white sm:w-auto"
                >
                  {loading ? (
                    <>
                      <LoadingSpinner className="mr-2 h-4 w-4" />
                      {locale.startsWith('th')
                        ? 'กำลังค้นหา...'
                        : 'Searching...'}
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      {locale.startsWith('th') ? 'ส่งคำถาม' : 'Send Query'}
                    </>
                  )}
                </Button>
              </form>

              {response && (
                <div className="mt-6 space-y-4">
                  {response.error ? (
                    <div className="rounded-lg bg-danger/10 p-4 text-danger">
                      {response.error}
                    </div>
                  ) : (
                    <>
                      {response.answer && (
                        <div className="rounded-lg bg-surface-2 p-4">
                          <div className="mb-2 text-sm font-medium text-primary">
                            {locale.startsWith('th') ? 'คำตอบ:' : 'Answer:'}
                          </div>
                          <div className="text-text">{response.answer}</div>
                        </div>
                      )}

                      {response.citations && response.citations.length > 0 && (
                        <div className="space-y-2">
                          <div className="text-sm font-medium text-text-muted">
                            {locale.startsWith('th')
                              ? 'อ้างอิง:'
                              : 'Citations:'}
                          </div>
                          {response.citations.map((citation, idx) => (
                            <div
                              key={idx}
                              className="rounded-lg border border-hairline bg-surface-2 p-3 text-sm"
                            >
                              <div className="font-medium text-text">
                                {citation.source}
                              </div>
                              <div className="mt-1 text-text-subtle">
                                {citation.snippet}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          <div className="mt-4 text-center text-sm text-text-subtle">
            {locale.startsWith('th')
              ? '* ระบบนี้ใช้ข้อมูล synthetic/public เท่านั้น'
              : '* This demo uses synthetic/public data only'}
          </div>
        </div>
      </div>
    </section>
  );
}
