'use client';

import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { X, Settings } from 'lucide-react';

const CONSENT_KEY = 'cerebratechai_consent';

type ConsentState = {
  necessary: boolean; // always true
  analytics: boolean;
  timestamp: string;
};

export function ConsentBanner() {
  const locale = useLocale();
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState<ConsentState>({
    necessary: true,
    analytics: false,
    timestamp: new Date().toISOString(),
  });

  useEffect(() => {
    // Check for existing consent
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) {
      setShowBanner(true);
    } else {
      try {
        setConsent(JSON.parse(stored));
      } catch {
        setShowBanner(true);
      }
    }

    // Respect Do Not Track
    if (navigator.doNotTrack === '1') {
      setConsent({ necessary: true, analytics: false, timestamp: new Date().toISOString() });
      localStorage.setItem(CONSENT_KEY, JSON.stringify({ necessary: true, analytics: false, timestamp: new Date().toISOString() }));
      setShowBanner(false);
    }
  }, []);

  const saveConsent = (analyticsConsent: boolean) => {
    const newConsent: ConsentState = {
      necessary: true,
      analytics: analyticsConsent,
      timestamp: new Date().toISOString(),
    };
    setConsent(newConsent);
    localStorage.setItem(CONSENT_KEY, JSON.stringify(newConsent));
    setShowBanner(false);
    setShowSettings(false);

    // Track consent update
    if (typeof window !== 'undefined' && analyticsConsent) {
      fetch('/api/analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event_type: 'consent_update',
          metadata: { consent_analytics: analyticsConsent },
          timestamp: new Date().toISOString(),
        }),
      }).catch(() => {});
    }
  };

  const acceptAll = () => saveConsent(true);
  const rejectAnalytics = () => saveConsent(false);

  if (!showBanner) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4 md:p-6">
      <Card className="mx-auto max-w-4xl border-2 border-primary/20 bg-surface/95 shadow-2xl backdrop-blur-lg">
        <CardContent className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="mb-2 text-lg font-semibold text-text">
                {locale === 'th' ? 'การใช้คุกกี้' : 'Cookie Consent'}
              </h3>
              <p className="mb-4 text-sm text-text-muted">
                {locale === 'th'
                  ? 'เราใช้คุกกี้สำหรับสถิติการใช้งาน คุณสามารถจัดการการยินยอมได้ที่นี่'
                  : 'We use cookies for usage analytics. Manage your consent here.'}
              </p>

              {showSettings && (
                <div className="mb-4 space-y-3 rounded-lg bg-surface-2 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-text">
                        {locale === 'th' ? 'จำเป็น' : 'Necessary'}
                      </div>
                      <div className="text-xs text-text-subtle">
                        {locale === 'th'
                          ? 'จำเป็นสำหรับการทำงานของเว็บไซต์'
                          : 'Required for website functionality'}
                      </div>
                    </div>
                    <input type="checkbox" checked disabled className="h-5 w-5" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-text">
                        {locale === 'th' ? 'การวิเคราะห์' : 'Analytics'}
                      </div>
                      <div className="text-xs text-text-subtle">
                        {locale === 'th'
                          ? 'ช่วยเราปรับปรุงประสบการณ์ของคุณ'
                          : 'Helps us improve your experience'}
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={consent.analytics}
                      onChange={(e) => setConsent({ ...consent, analytics: e.target.checked })}
                      className="h-5 w-5"
                    />
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                <Button onClick={acceptAll} className="bg-gradient-to-tr from-cyan-400 via-blue-600 to-indigo-600 text-white">
                  {locale === 'th' ? 'ยอมรับทั้งหมด' : 'Accept All'}
                </Button>
                <Button onClick={rejectAnalytics} variant="outline" className="border-hairline">
                  {locale === 'th' ? 'จำเป็นเท่านั้น' : 'Necessary Only'}
                </Button>
                <Button
                  onClick={() => setShowSettings(!showSettings)}
                  variant="ghost"
                  size="sm"
                  className="text-text-muted"
                >
                  <Settings className="mr-2 h-4 w-4" />
                  {locale === 'th' ? 'ตั้งค่า' : 'Settings'}
                </Button>
              </div>
            </div>

            <button
              onClick={rejectAnalytics}
              className="rounded-lg p-1 text-text-muted transition-colors hover:bg-surface-2 hover:text-text"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-4 border-t border-hairline pt-4">
            <a
              href={locale === 'th' ? '/th/legal/privacy' : '/en/legal/privacy'}
              className="text-xs text-primary hover:underline"
            >
              {locale === 'th' ? 'นโยบายความเป็นส่วนตัว' : 'Privacy Policy'}
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

