import Link from 'next/link';
import { FileQuestion, Home, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="w-24 h-24 bg-surface-2 rounded-full flex items-center justify-center mb-6 animate-bounce-gentle">
        <FileQuestion className="w-12 h-12 text-primary" />
      </div>
      <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        404 - Page Not Found
      </h2>
      <p className="text-text-muted max-w-md mb-8 text-lg">
        ขออภัย เราไม่พบหน้าที่คุณต้องการ อาจมีการย้ายหน้าหรือคุณอาจพิมพ์ URL
        ผิดพลาด
      </p>
      <div className="flex gap-4">
        <Button asChild size="lg" className="rounded-xl">
          <Link href="/">
            <Home className="w-4 h-4 mr-2" />
            กลับสู่หน้าหลัก
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="rounded-xl">
          <Link href="/th/contact">
            <MessageCircle className="w-4 h-4 mr-2" />
            ติดต่อเรา
          </Link>
        </Button>
      </div>
    </div>
  );
}
