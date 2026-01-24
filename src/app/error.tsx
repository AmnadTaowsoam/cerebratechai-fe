'use client' // Error components must be Client Components

import { useEffect } from 'react'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="w-24 h-24 bg-red-500/10 rounded-full flex items-center justify-center mb-6 animate-bounce-gentle">
        <AlertTriangle className="w-12 h-12 text-red-500" />
      </div>
      <h2 className="text-4xl font-bold mb-4 text-red-500">Something went wrong!</h2>
      <p className="text-text-muted max-w-md mb-8 text-lg">
        เกิดข้อผิดพลาดบางอย่างที่ไม่คาดคิด โปรดลองอีกครั้งในภายหลัง หรือติดต่อทีมซัพพอร์ตหากปัญหายังคงอยู่
      </p>
      
      <div className="flex gap-4">
        <Button 
          onClick={() => reset()}
          size="lg"
          className="rounded-xl"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          ลองใหม่อีกครั้ง
        </Button>
        <Button asChild variant="outline" size="lg" className="rounded-xl">
          <Link href="/">
            <Home className="w-4 h-4 mr-2" />
            กลับสู่หน้าหลัก
          </Link>
        </Button>
      </div>
      
      {process.env.NODE_ENV === 'development' && (
        <div className="mt-8 p-4 bg-surface-2 rounded-lg max-w-2xl w-full text-left overflow-auto text-xs font-mono text-red-400">
          <p className="font-bold mb-2">Error Details (Dev only):</p>
          <pre>{error.message}</pre>
          {error.stack && <pre className="mt-2 opacity-70">{error.stack}</pre>}
        </div>
      )}
    </div>
  )
}
