'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useAnalytics } from '@/lib/hooks/use-analytics';
import { Loader2, Send, CheckCircle, ArrowRight } from 'lucide-react';

const QuickQuoteSchema = z.object({
  email: z.string().email('Invalid email address'),
  projectType: z.string().min(10, 'Please describe your project (min 10 characters)'),
});

type QuickQuoteData = z.infer<typeof QuickQuoteSchema>;

interface QuickQuoteProps {
  source?: string; // Track which page the form is on
  variant?: 'default' | 'compact';
  className?: string;
}

export function QuickQuote({ source = 'unknown', variant = 'default', className = '' }: QuickQuoteProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const locale = useLocale();
  const isThai = locale.startsWith('th');
  const { toast } = useToast();
  const { trackFormSubmit } = useAnalytics();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuickQuoteData>({
    resolver: zodResolver(QuickQuoteSchema),
  });

  const onSubmit = async (data: QuickQuoteData) => {
    setIsSubmitting(true);
    trackFormSubmit('quick-quote', source);

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          source,
          locale: locale.startsWith('th') ? 'th' : 'en',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        reset();
        toast('success', {
          title: isThai ? 'สำเร็จ!' : 'Success!',
          description: isThai
            ? 'เราจะส่งใบเสนอราคาเบื้องต้นให้คุณภายใน 24 ชั่วโมง'
            : 'We\'ll send you a preliminary quote within 24 hours.',
        });
      } else {
        throw new Error(result.message || 'Failed to send request');
      }
    } catch (error) {
      console.error('Quote request error:', error);
      toast('error', {
        title: isThai ? 'เกิดข้อผิดพลาด' : 'Error',
        description: isThai
          ? 'ไม่สามารถส่งคำขอได้ กรุณาลองอีกครั้งหรือติดต่อเราทางอีเมล'
          : 'Failed to send request. Please try again or email us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <Card className={className}>
        <CardContent className="p-6">
          <div className="text-center">
            <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-text mb-2">
              {isThai ? 'ได้รับคำขอแล้ว!' : 'Request Received!'}
            </h3>
            <p className="text-sm text-text-muted mb-4">
              {isThai
                ? 'เราจะส่งใบเสนอราคาเบื้องต้นให้คุณภายใน 24 ชั่วโมง'
                : 'We\'ll send you a preliminary quote within 24 hours.'
              }
            </p>
            <Button
              onClick={() => setIsSuccess(false)}
              variant="ghost"
              size="sm"
            >
              {isThai ? 'ส่งอีกครั้ง' : 'Submit Another'}
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (variant === 'compact') {
    return (
      <Card className={className}>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-text mb-2">
            {isThai ? 'ขอใบเสนอราคาด่วน' : 'Quick Quote'}
          </h3>
          <p className="text-sm text-text-muted mb-4">
            {isThai
              ? 'บอกเราสั้น ๆ ว่าต้องการอะไร เราจะส่งใบเสนอราคาให้ภายใน 24 ชม.'
              : 'Tell us what you need and we\'ll send a quote within 24 hours.'
            }
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="email"
                {...register('email')}
                className={errors.email ? 'border-red-500' : ''}
                placeholder={isThai ? 'อีเมลของคุณ' : 'Your email'}
              />
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Textarea
                {...register('projectType')}
                className={errors.projectType ? 'border-red-500' : ''}
                placeholder={isThai ? 'โปรเจกต์ของคุณเป็นอย่างไร? (เช่น ระบบ AI สำหรับตรวจสอบคุณภาพ)' : 'What\'s your project? (e.g. AI for quality inspection)'}
                rows={3}
              />
              {errors.projectType && (
                <p className="text-xs text-red-500">{errors.projectType.message}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {isThai ? 'กำลังส่ง...' : 'Sending...'}
                </>
              ) : (
                <>
                  {isThai ? 'ขอใบเสนอราคา' : 'Get Quote'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    );
  }

  // Default variant
  return (
    <Card className={className}>
      <CardContent className="p-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold text-text mb-2">
            {isThai ? 'ขอใบเสนอราคาเบื้องต้น' : 'Request a Preliminary Quote'}
          </h3>
          <p className="text-text-muted">
            {isThai
              ? 'บอกเราสั้น ๆ ว่าต้องการอะไร เราจะส่งใบเสนอราคาและแผนเบื้องต้นให้คุณภายใน 24 ชั่วโมง'
              : 'Tell us what you need and we\'ll send a preliminary quote and plan within 24 hours.'
            }
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">{isThai ? 'อีเมล' : 'Email'} *</Label>
            <Input
              id="email"
              type="email"
              {...register('email')}
              className={errors.email ? 'border-red-500' : ''}
              placeholder={isThai ? 'กรอกอีเมลของคุณ' : 'Enter your email'}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="projectType">
              {isThai ? 'โปรเจกต์ของคุณเป็นอย่างไร?' : 'What\'s your project?'} *
            </Label>
            <Textarea
              id="projectType"
              {...register('projectType')}
              className={errors.projectType ? 'border-red-500' : ''}
              placeholder={isThai
                ? 'เช่น "ต้องการระบบ AI สำหรับตรวจสอบคุณภาพผลิตภัณฑ์บนสายการผลิต"'
                : 'e.g. "Need AI system for quality inspection on production line"'
              }
              rows={4}
            />
            {errors.projectType && (
              <p className="text-sm text-red-500">{errors.projectType.message}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full py-5 text-lg font-semibold"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {isThai ? 'กำลังส่ง...' : 'Sending...'}
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                {isThai ? 'ขอใบเสนอราคา' : 'Get Quote'}
              </>
            )}
          </Button>

          <p className="text-xs text-center text-text-muted">
            {isThai
              ? 'เราจะตอบกลับภายใน 24 ชั่วโมง (จ-ศ 9:00-18:00)'
              : 'We respond within 24 hours (Mon-Fri 9:00-18:00)'
            }
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
