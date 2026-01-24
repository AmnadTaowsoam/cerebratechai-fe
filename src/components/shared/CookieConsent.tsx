'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { X, Cookie } from 'lucide-react';

const COOKIE_CONSENT_KEY = 'cerebratechai_cookie_consent';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const locale = useLocale();
  const isThai = locale === 'th';

  const content = {
    th: {
      title: 'เราใช้คุกกี้',
      description:
        'เราใช้คุกกี้เพื่อปรับปรุงประสบการณ์การใช้งานของคุณ วิเคราะห์การเข้าชม และให้บริการที่ดีขึ้น',
      learnMore: 'เรียนรู้เพิ่มเติม',
      acceptAll: 'ยอมรับทั้งหมด',
      acceptEssential: 'ยอมรับเฉพาะที่จำเป็น',
    },
    en: {
      title: 'We Use Cookies',
      description:
        'We use cookies to improve your experience, analyze site traffic, and provide better services.',
      learnMore: 'Learn More',
      acceptAll: 'Accept All',
      acceptEssential: 'Essential Only',
    },
  };

  const c = isThai ? content.th : content.en;

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = (type: 'all' | 'essential') => {
    // Store consent
    const consentData = {
      type,
      timestamp: new Date().toISOString(),
      version: '1.0',
    };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consentData));

    // Initialize analytics based on consent type
    if (type === 'all') {
      // Enable all tracking
      // Analytics initialization would go here
    } else {
      // Enable only essential cookies
      // Essential-only mode
    }

    // Close banner
    handleClose();
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isClosing ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={handleClose}
      />

      {/* Banner */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
          isClosing ? 'translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className="container mx-auto px-4 py-6 max-w-6xl">
          <div className="bg-surface border border-hairline rounded-xl shadow-2xl overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Cookie className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-text mb-2">
                    {c.title}
                  </h3>
                  <p className="text-sm text-text-muted mb-3">
                    {c.description}{' '}
                    <Link
                      href={`/${locale}/legal/cookies`}
                      className="text-primary hover:underline font-medium"
                    >
                      {c.learnMore}
                    </Link>
                  </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <button
                    onClick={() => handleAccept('essential')}
                    className="px-4 py-2 text-sm font-medium text-text-muted border border-hairline rounded-lg hover:bg-surface-2 transition-colors whitespace-nowrap"
                  >
                    {c.acceptEssential}
                  </button>
                  <button
                    onClick={() => handleAccept('all')}
                    className="px-6 py-2 text-sm font-medium bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
                  >
                    {c.acceptAll}
                  </button>
                </div>

                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 p-1 text-text-muted hover:text-text transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
