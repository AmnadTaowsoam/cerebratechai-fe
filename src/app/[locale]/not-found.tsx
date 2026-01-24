'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft, Search, Mail } from 'lucide-react';
import { routes } from '@/lib/routes';

export default function NotFound() {
  const locale = useLocale();
  const isThai = locale.startsWith('th');

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Animation */}
        <div className="mb-8">
          <div className="text-9xl font-bold text-primary/20 mb-4">404</div>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        {/* Error Message */}
        <h1 className="text-4xl font-bold text-text mb-4">
          {isThai ? 'ไม่พบหน้าที่คุณค้นหา' : 'Page Not Found'}
        </h1>

        <p className="text-lg text-text-muted mb-8">
          {isThai
            ? 'ขออภัยหน้าที่คุณค้นหาไม่พบ กรุณาตรวจสอบ URL หรือกลับไปหน้าแรก'
            : 'Sorry, page you are looking for could not be found. Please check the URL or return to the homepage.'}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button asChild size="lg">
            <Link href={routes.home(locale)}>
              <Home className="mr-2 h-4 w-4" />
              {isThai ? 'กลับหน้าแรก' : 'Go Home'}
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg">
            <Link href={routes.solutions(locale)}>
              <Search className="mr-2 h-4 w-4" />
              {isThai ? 'ดูโซลูชัน' : 'Browse Solutions'}
            </Link>
          </Button>
        </div>

        {/* Help Section */}
        <div className="bg-surface/50 rounded-2xl p-8 border border-hairline/50">
          <h2 className="text-xl font-semibold text-text mb-4">
            {isThai ? 'ต้องการความช่วยเหลือ?' : 'Need Help?'}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-text mb-2">
                {isThai ? 'ค้นหาสิ่งที่คุณต้องการ' : 'Search for what you need'}
              </h3>
              <p className="text-sm text-text-muted">
                {isThai
                  ? 'ใช้งานค้นหาของเราเพื่อหาข้อมูลที่คุณต้องการ'
                  : 'Use our search to find information you need'}
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-text mb-2">
                {isThai ? 'ติดต่อเรา' : 'Contact Us'}
              </h3>
              <p className="text-sm text-text-muted">
                {isThai
                  ? 'หากคุณยังไม่พบสิ่งที่ต้องการ ติดต่อเราได้เลย'
                  : "If you still can't find what you're looking for, contact us"}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <Button asChild variant="outline">
              <Link href={routes.contact(locale)}>
                <Mail className="mr-2 h-4 w-4" />
                {isThai ? 'ติดต่อเรา' : 'Contact Us'}
              </Link>
            </Button>
          </div>
        </div>

        {/* Popular Links */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-text mb-6">
            {isThai ? 'ลิงก์ยอดนิยม' : 'Popular Links'}
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              href={routes.solutions(locale)}
              className="p-4 rounded-lg border border-hairline/50 bg-surface/30 hover:bg-surface/50 transition-colors text-center"
            >
              <div className="text-sm font-medium text-text">
                {isThai ? 'โซลูชัน' : 'Solutions'}
              </div>
            </Link>

            <Link
              href={routes.packages(locale)}
              className="p-4 rounded-lg border border-hairline/50 bg-surface/30 hover:bg-surface/50 transition-colors text-center"
            >
              <div className="text-sm font-medium text-text">
                {isThai ? 'แพ็กเกจ' : 'Packages'}
              </div>
            </Link>

            <Link
              href={routes.cases(locale)}
              className="p-4 rounded-lg border border-hairline/50 bg-surface/30 hover:bg-surface/50 transition-colors text-center"
            >
              <div className="text-sm font-medium text-text">
                {isThai ? 'เคสศึกษา' : 'Case Studies'}
              </div>
            </Link>

            <Link
              href={routes.pricing(locale)}
              className="p-4 rounded-lg border border-hairline/50 bg-surface/30 hover:bg-surface/50 transition-colors text-center"
            >
              <div className="text-sm font-medium text-text">
                {isThai ? 'ราคา' : 'Pricing'}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
