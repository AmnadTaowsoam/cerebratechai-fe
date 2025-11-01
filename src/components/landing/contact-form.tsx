'use client';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLocale, useTranslations } from 'next-intl';
import { ContactFormSchema, ContactFormData } from '@/lib/schemas/contact';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { useAnalytics } from '@/lib/hooks/use-analytics';
import { Loader2, Send, CheckCircle } from 'lucide-react';
import { budgetRanges, timelineTargets } from '@/data/home';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formStartTime] = useState(Date.now()); // Track form start time for anti-spam
  const locale = useLocale();
  const isThai = locale.startsWith('th');
  // const t = useTranslations('form');
  const { toast } = useToast();
  const { trackFormSubmit } = useAnalytics();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      consent: false,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    trackFormSubmit('contact-form', 'contact');

    try {
      // Calculate time taken to fill form (anti-spam)
      const formTime = Date.now() - formStartTime;
      
      // Add locale and anti-spam fields to the data
      // Only include hp_time if form was filled for at least 6 seconds (anti-spam requirement)
      const formData: any = {
        ...data,
        locale: locale.startsWith('th') ? 'th' : 'en',
        website: '', // Honeypot field (must be empty)
        user_agent: typeof window !== 'undefined' ? window.navigator.userAgent : undefined,
      };
      
      // Only add hp_time if form was filled for reasonable time (> 1 second)
      // Backend requires > 6000ms, but we'll let backend validate
      if (formTime > 1000) {
        formData.hp_time = formTime;
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        reset();
        toast('success', {
          title: isThai ? 'สำเร็จ!' : 'Success!',
          description: isThai 
            ? 'ข้อความของคุณถูกส่งเรียบร้อยแล้ว เราจะติดต่อกลับภายใน 24 ชั่วโมง'
            : 'Your message has been sent successfully. We\'ll get back to you within 24 hours.',
        });
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      // Show detailed error message
      const errorMessage = error instanceof Error ? error.message : 'Failed to send message. Please try again.';
      console.error('Contact form submission error:', error);
      
      toast('error', {
        title: isThai ? 'เกิดข้อผิดพลาด' : 'Error',
        description: errorMessage.length > 150 
          ? `${errorMessage.substring(0, 150)}...` 
          : errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="pt-6">
          <div className="text-center">
            <CheckCircle className="h-16 w-16 text-success mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-text mb-2">{isThai ? 'ขอบคุณ!' : 'Thank You!'}</h3>
            <p className="text-text-muted mb-6">
              {isThai 
                ? 'ข้อความของคุณถูกส่งเรียบร้อยแล้ว เราจะติดต่อกลับภายใน 24 ชั่วโมง'
                : 'Your message has been sent successfully. We\'ll get back to you within 24 hours.'
              }
            </p>
            <Button
              onClick={() => setIsSuccess(false)}
              variant="outline"
            >
              {isThai ? 'ส่งข้อความอีกครั้ง' : 'Send Another Message'}
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-text">
          {isThai ? 'ติดต่อเรา' : 'Get in touch'}
        </CardTitle>
        <CardDescription>
          {isThai 
            ? 'บอกเราเกี่ยวกับโปรเจกต์ของคุณ แล้วเราจะติดต่อกลับในไม่ช้า'
            : 'Tell us a bit about your project and we\'ll reach out shortly.'
          }
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">{isThai ? 'ชื่อ' : 'Name'} *</Label>
              <Input
                id="name"
                {...register('name')}
                className={errors.name ? 'border-red-500' : ''}
                placeholder={isThai ? 'กรอกชื่อเต็มของคุณ' : 'Enter your full name'}
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company">{isThai ? 'บริษัท' : 'Company'}</Label>
              <Input
                id="company"
                {...register('company')}
                placeholder={isThai ? 'กรอกชื่อบริษัทของคุณ' : 'Enter your company name'}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">{isThai ? 'เบอร์โทรศัพท์' : 'Phone'}</Label>
              <Input
                id="phone"
                type="tel"
                {...register('phone')}
                placeholder={isThai ? 'กรอกเบอร์โทรศัพท์ของคุณ' : 'Enter your phone number'}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="goal">{isThai ? 'เป้าหมาย/โจทย์' : 'Your Goal/Challenge'} *</Label>
            <Textarea
              id="goal"
              {...register('goal')}
              className={errors.goal ? 'border-red-500' : ''}
              placeholder={isThai ? 'อธิบายเป้าหมาย ความท้าทาย หรือความต้องการของโครงการ...' : 'Describe your project goals, challenges, or requirements...'}
              rows={4}
            />
            {errors.goal && (
              <p className="text-sm text-red-500">{errors.goal.message}</p>
            )}
          </div>

          <div className="flex items-start space-x-2">
            <Controller
              name="consent"
              control={control}
              render={({ field }) => (
                <Checkbox
                  id="consent"
                  checked={field.value}
                  onCheckedChange={(checked) => field.onChange(checked === true)}
                  className={errors.consent ? 'border-red-500' : ''}
                />
              )}
            />
            <div className="space-y-1">
              <Label htmlFor="consent" className="text-sm text-text-muted">
                {isThai ? 'ยินยอมให้ติดต่อกลับ' : 'I consent to Cerebratechai contacting me'} *
              </Label>
              {errors.consent && (
                <p className="text-sm text-red-500">{errors.consent.message}</p>
              )}
            </div>
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
                {isThai ? 'ส่งข้อมูลและนัดคุย' : 'Submit and Book a Call'}
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
