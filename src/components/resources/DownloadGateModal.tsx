'use client';

import { useEffect, useMemo, useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { ResourceItem } from '@/data/resources';

type DownloadGateModalProps = {
  open: boolean;
  locale: string;
  resource: ResourceItem | null;
  onClose: () => void;
  onConfirm: (payload: { email: string; name?: string }) => void;
};

export function DownloadGateModal({
  open,
  locale,
  resource,
  onClose,
  onConfirm,
}: DownloadGateModalProps) {
  const isThai = locale.startsWith('th');

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (!open) {
      setEmail('');
      setName('');
      setTouched(false);
    }
  }, [open]);

  const emailOk = useMemo(() => {
    const value = email.trim();
    return value.length > 3 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }, [email]);

  if (!open || !resource) return null;

  const title = isThai ? 'รับลิงก์ดาวน์โหลด' : 'Get the download link';
  const subtitle = isThai
    ? 'กรอกอีเมลเพื่อรับไฟล์ (ไม่มีสแปม และยกเลิกได้ทุกเมื่อ)'
    : 'Enter your email to access the file (no spam, unsubscribe anytime).';

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center">
      <button
        type="button"
        aria-label={isThai ? 'ปิด' : 'Close'}
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        className="relative w-[92vw] max-w-lg rounded-2xl border border-hairline bg-surface shadow-soft"
      >
        <div className="flex items-start justify-between gap-4 border-b border-hairline px-6 py-5">
          <div className="min-w-0">
            <h3 className="text-lg font-semibold text-text">{title}</h3>
            <p className="mt-1 text-sm text-text-muted">{subtitle}</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label={isThai ? 'ปิด' : 'Close'}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="px-6 py-5">
          <div className="rounded-xl border border-hairline bg-bg/40 p-4">
            <div className="text-sm font-semibold text-text">
              {isThai ? resource.title.th : resource.title.en}
            </div>
            <div className="mt-1 text-xs text-text-muted">
              {isThai ? resource.category.th : resource.category.en} •{' '}
              {resource.type}
            </div>
          </div>

          <div className="mt-5 grid gap-3">
            <label className="grid gap-1">
              <span className="text-xs font-medium text-text-muted">
                {isThai ? 'ชื่อ (ไม่บังคับ)' : 'Name (optional)'}
              </span>
              <input
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full rounded-lg border border-hairline bg-surface px-3 py-2 text-sm text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder={isThai ? 'ชื่อเล่น / ชื่อทีม' : 'Your name / team'}
              />
            </label>

            <label className="grid gap-1">
              <span className="text-xs font-medium text-text-muted">
                {isThai ? 'อีเมล' : 'Email'}
              </span>
              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                onBlur={() => setTouched(true)}
                type="email"
                required
                className="w-full rounded-lg border border-hairline bg-surface px-3 py-2 text-sm text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder={isThai ? 'you@company.com' : 'you@company.com'}
              />
              {touched && !emailOk ? (
                <span className="text-xs text-danger">
                  {isThai
                    ? 'กรุณากรอกอีเมลให้ถูกต้อง'
                    : 'Please enter a valid email'}
                </span>
              ) : null}
            </label>
          </div>

          <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <Button variant="outline" onClick={onClose}>
              {isThai ? 'ยกเลิก' : 'Cancel'}
            </Button>
            <Button
              onClick={() => {
                setTouched(true);
                if (!emailOk) return;
                onConfirm({
                  email: email.trim(),
                  name: name.trim() || undefined,
                });
              }}
            >
              {isThai ? 'ดาวน์โหลด' : 'Download'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
