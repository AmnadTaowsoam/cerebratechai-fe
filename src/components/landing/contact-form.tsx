'use client';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLocale } from 'next-intl';
import { ContactFormSchema, ContactFormData } from '@/lib/schemas/contact';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useAnalytics } from '@/lib/hooks/use-analytics';
import { Loader2, Send, CheckCircle, Shield, Clock, DollarSign, Sparkles } from 'lucide-react';
import { budgetRanges, timelineTargets } from '@/data/home';
import { dataReadinessOptions, packageInterestOptions, preferredContactOptions, useCaseOptions } from '@/data/contact';
import { cn } from '@/lib/utils';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formStartTime] = useState(Date.now()); // Track form start time for anti-spam
  const locale = useLocale();
  const isThai = locale.startsWith('th');
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
      nda: false,
      use_case: [],
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    trackFormSubmit('contact-form', 'contact');

    try {
      // Calculate time taken to fill form (anti-spam)
      const formTime = Date.now() - formStartTime;

      // Add locale and anti-spam fields to the data
      // Backend requires hp_field to be empty (honeypot)
      const formData: any = {
        ...data,
        locale: locale.startsWith('th') ? 'th' : 'en',
        hp_field: '', // Honeypot field (must be empty)
        user_agent: typeof window !== 'undefined' ? window.navigator.userAgent : undefined,
      };

      // Only add hp_time if form was filled for reasonable time (> 6 seconds as required by backend)
      if (formTime > 6000) {
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
            ? 'ส่งข้อความเรียบร้อยแล้ว เราจะติดต่อกลับภายใน 24 ชั่วโมง'
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
      <Card className="w-full max-w-2xl mx-auto overflow-hidden border-primary/20 bg-gradient-to-br from-surface/80 to-surface-2/80 backdrop-blur-xl shadow-[0_24px_64px_rgba(8,23,45,0.45)]">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 pointer-events-none" />
        <CardContent className="relative pt-12 pb-10 px-8">
          <div className="text-center">
            <div className="relative inline-flex items-center justify-center mb-6">
              <div className="absolute inset-0 bg-success/20 rounded-full blur-2xl animate-pulse" />
              <div className="relative bg-success/10 rounded-full p-6">
                <CheckCircle className="h-16 w-16 text-success" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-text mb-3 bg-gradient-to-r from-success to-emerald-400 bg-clip-text text-transparent">
              {isThai ? 'ขอบคุณ!' : 'Thank You!'}
            </h3>
            <p className="text-text-muted mb-8 max-w-md mx-auto leading-relaxed">
              {isThai
                ? 'ส่งข้อความเรียบร้อยแล้ว เราจะติดต่อกลับภายใน 24 ชั่วโมง'
                : 'Your message has been sent successfully. We\'ll get back to you within 24 hours.'
              }
            </p>
            <Button
              onClick={() => setIsSuccess(false)}
              variant="outline"
              className="px-8 py-3 rounded-xl border-primary/30 hover:border-primary/60 hover:bg-primary/10 transition-all duration-300"
            >
              {isThai ? 'ส่งข้อความอีกครั้ง' : 'Send Another Message'}
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto overflow-hidden border-white/10 bg-gradient-to-br from-surface/60 to-surface-2/60 backdrop-blur-xl shadow-[0_24px_64px_rgba(8,23,45,0.45)]">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.08),_transparent_50%)] pointer-events-none" />

      <CardHeader className="relative border-b border-white/5 pb-6">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-xs uppercase tracking-[0.3em] text-primary/80 font-medium">
            {isThai ? 'เริ่มโปรเจกต์ของคุณ' : 'Start Your Project'}
          </span>
        </div>
        <CardTitle className="text-2xl font-bold text-text">
          {isThai ? 'ติดต่อเรา' : 'Get in touch'}
        </CardTitle>
        <CardDescription className="text-text-muted/80">
          {isThai
            ? 'เล่าคร่าว ๆ เกี่ยวกับโปรเจกต์ของคุณ แล้วทีมงานจะติดต่อกลับเร็ว ๆ นี้'
            : 'Tell us a bit about your project and we\'ll reach out shortly.'
          }
        </CardDescription>
      </CardHeader>

      <CardContent className="relative pt-6 pb-8 px-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-text/90">
                {isThai ? 'ชื่อ-นามสกุล' : 'Name'} <span className="text-primary">*</span>
              </Label>
              <Input
                id="name"
                {...register('name')}
                className={cn(
                  "bg-surface-2/50 border-white/10 focus:border-primary/50 focus:ring-primary/20 transition-all duration-200",
                  errors.name && 'border-red-500/50 focus:border-red-500'
                )}
                placeholder={isThai ? 'กรอกชื่อ-นามสกุล' : 'Enter your full name'}
              />
              {errors.name && (
                <p className="text-sm text-red-400/90">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-text/90">
                {isThai ? 'อีเมล' : 'Email'} <span className="text-primary">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                className={cn(
                  "bg-surface-2/50 border-white/10 focus:border-primary/50 focus:ring-primary/20 transition-all duration-200",
                  errors.email && 'border-red-500/50 focus:border-red-500'
                )}
                placeholder={isThai ? 'กรอกอีเมล' : 'Enter your email'}
              />
              {errors.email && (
                <p className="text-sm text-red-400/90">{errors.email.message}</p>
              )}
            </div>
          </div>

          {/* Company & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company" className="text-sm font-medium text-text/90">
                {isThai ? 'บริษัท' : 'Company'}
              </Label>
              <Input
                id="company"
                {...register('company')}
                className="bg-surface-2/50 border-white/10 focus:border-primary/50 focus:ring-primary/20 transition-all duration-200"
                placeholder={isThai ? 'กรอกชื่อบริษัท' : 'Enter your company name'}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium text-text/90">
                {isThai ? 'โทรศัพท์' : 'Phone'}
              </Label>
              <Input
                id="phone"
                type="tel"
                {...register('phone')}
                className="bg-surface-2/50 border-white/10 focus:border-primary/50 focus:ring-primary/20 transition-all duration-200"
                placeholder={isThai ? 'กรอกเบอร์โทรศัพท์' : 'Enter your phone number'}
              />
            </div>
          </div>

          {/* Role */}
          <div className="space-y-2">
            <Label htmlFor="role" className="text-sm font-medium text-text/90">
              {isThai ? 'ตำแหน่ง / หน้าที่' : 'Role / Title'}
            </Label>
            <Input
              id="role"
              {...register('role')}
              className="bg-surface-2/50 border-white/10 focus:border-primary/50 focus:ring-primary/20 transition-all duration-200"
              placeholder={isThai ? 'เช่น ผู้จัดการฝ่ายปฏิบัติการ, Data Lead' : 'e.g. Ops Manager, Data Lead'}
            />
          </div>

          {/* Use Case */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-text/90">
              {isThai ? 'Use case ที่สนใจ' : 'Use case focus'}
            </Label>
            <Controller
              name="use_case"
              control={control}
              render={({ field }) => {
                const selected = Array.isArray(field.value) ? field.value : [];
                return (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {useCaseOptions.map((option) => (
                      <label
                        key={option.value}
                        className="flex items-center gap-3 rounded-xl border border-white/10 bg-surface-2/30 px-4 py-3 text-sm text-text-muted/90"
                      >
                        <Checkbox
                          checked={selected.includes(option.value)}
                          onCheckedChange={(checked) => {
                            const next = checked
                              ? [...selected, option.value]
                              : selected.filter((value) => value !== option.value);
                            field.onChange(next);
                          }}
                          className="border-white/20 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                        />
                        <span>{isThai ? option.labelTh : option.labelEn}</span>
                      </label>
                    ))}
                  </div>
                );
              }}
            />
          </div>

          {/* Data Readiness */}
          <div className="space-y-2">
            <Label htmlFor="data_readiness" className="text-sm font-medium text-text/90">
              {isThai ? 'ความพร้อมของข้อมูล' : 'Data readiness'}
            </Label>
            <Controller
              name="data_readiness"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className="bg-surface-2/50 border-white/10 focus:border-primary/50 focus:ring-primary/20 transition-all duration-200">
                    <SelectValue placeholder={isThai ? 'เลือกความพร้อมของข้อมูล' : 'Select data readiness'} />
                  </SelectTrigger>
                  <SelectContent className="bg-surface-2 border-white/10">
                    {dataReadinessOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {isThai ? option.labelTh : option.labelEn}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          {/* Preferred Contact */}
          <div className="space-y-2">
            <Label htmlFor="preferred_contact" className="text-sm font-medium text-text/90">
              {isThai ? 'ช่องทางติดต่อที่สะดวก' : 'Preferred contact'}
            </Label>
            <Controller
              name="preferred_contact"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className="bg-surface-2/50 border-white/10 focus:border-primary/50 focus:ring-primary/20 transition-all duration-200">
                    <SelectValue placeholder={isThai ? 'เลือกช่องทางติดต่อ' : 'Select a channel'} />
                  </SelectTrigger>
                  <SelectContent className="bg-surface-2 border-white/10">
                    {preferredContactOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {isThai ? option.labelTh : option.labelEn}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          {/* Package Interest */}
          <div className="space-y-2">
            <Label htmlFor="package_id" className="text-sm font-medium text-text/90">
              {isThai ? 'สนใจแพ็กเกจ' : 'Package interest'}
            </Label>
            <Controller
              name="package_id"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className="bg-surface-2/50 border-white/10 focus:border-primary/50 focus:ring-primary/20 transition-all duration-200">
                    <SelectValue placeholder={isThai ? 'เลือกแพ็กเกจ (ไม่บังคับ)' : 'Select a package (optional)'} />
                  </SelectTrigger>
                  <SelectContent className="bg-surface-2 border-white/10">
                    {packageInterestOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {isThai ? option.labelTh : option.labelEn}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          {/* Budget Range */}
          <div className="space-y-2">
            <Label htmlFor="budget_range" className="text-sm font-medium text-text/90 flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-primary/70" />
              {isThai ? 'งบประมาณ' : 'Budget Range'}
            </Label>
            <Controller
              name="budget_range"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className="bg-surface-2/50 border-white/10 focus:border-primary/50 focus:ring-primary/20 transition-all duration-200">
                    <SelectValue placeholder={isThai ? 'เลือกช่วงงบประมาณ' : 'Select budget range'} />
                  </SelectTrigger>
                  <SelectContent className="bg-surface-2 border-white/10">
                    {budgetRanges.map((range) => (
                      <SelectItem key={range.value} value={range.value}>
                        {isThai ? range.labelTh : range.labelEn}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          {/* Timeline Target */}
          <div className="space-y-2">
            <Label htmlFor="timeline_target" className="text-sm font-medium text-text/90 flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary/70" />
              {isThai ? 'ระยะเวลาเป้าหมาย' : 'Timeline'}
            </Label>
            <Controller
              name="timeline_target"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className="bg-surface-2/50 border-white/10 focus:border-primary/50 focus:ring-primary/20 transition-all duration-200">
                    <SelectValue placeholder={isThai ? 'เลือกช่วงเวลา' : 'Select timeline'} />
                  </SelectTrigger>
                  <SelectContent className="bg-surface-2 border-white/10">
                    {timelineTargets.map((timeline) => (
                      <SelectItem key={timeline.value} value={timeline.value}>
                        {isThai ? timeline.labelTh : timeline.labelEn}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          {/* Goal/Challenge */}
          <div className="space-y-2">
            <Label htmlFor="goal" className="text-sm font-medium text-text/90">
              {isThai ? 'เป้าหมาย/ปัญหาที่อยากแก้' : 'Your Goal/Challenge'} <span className="text-primary">*</span>
            </Label>
            <Textarea
              id="goal"
              {...register('goal')}
              className={cn(
                "bg-surface-2/50 border-white/10 focus:border-primary/50 focus:ring-primary/20 transition-all duration-200 resize-none",
                errors.goal && 'border-red-500/50 focus:border-red-500'
              )}
              placeholder={isThai ? 'อธิบายเป้าหมาย ปัญหา หรือความต้องการของโปรเจกต์...' : 'Describe your project goals, challenges, or requirements...'}
              rows={4}
            />
            {errors.goal && (
              <p className="text-sm text-red-400/90">{errors.goal.message}</p>
            )}
          </div>

          {/* NDA Checkbox */}
          <div className="flex items-start space-x-3 p-4 rounded-xl bg-surface-2/30 border border-white/5">
            <Controller
              name="nda"
              control={control}
              render={({ field }) => (
                <Checkbox
                  id="nda"
                  checked={field.value}
                  onCheckedChange={(checked) => field.onChange(checked === true)}
                  className="mt-0.5 border-white/20 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
              )}
            />
            <div className="space-y-1">
              <Label htmlFor="nda" className="text-sm text-text/90 cursor-pointer flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary/70" />
                {isThai ? 'ต้องการ NDA (ข้อตกลงไม่เปิดเผยข้อมูล)' : 'Request NDA (Non-Disclosure Agreement)'}
              </Label>
              <p className="text-xs text-text-muted/70">
                {isThai
                  ? 'หากโปรเจกต์มีข้อมูลลับ เราสามารถเซ็น NDA ได้'
                  : 'If your project contains confidential information, we can sign an NDA'
                }
              </p>
            </div>
          </div>

          {/* Consent Checkbox */}
          <div className="flex items-start space-x-3">
            <Controller
              name="consent"
              control={control}
              render={({ field }) => (
                <Checkbox
                  id="consent"
                  checked={field.value}
                  onCheckedChange={(checked) => field.onChange(checked === true)}
                  className={cn(
                    "mt-0.5 border-white/20 data-[state=checked]:bg-primary data-[state=checked]:border-primary",
                    errors.consent && 'border-red-500/50'
                  )}
                />
              )}
            />
            <div className="space-y-1">
              <Label htmlFor="consent" className="text-sm text-text-muted/80 cursor-pointer">
                {isThai ? 'ยินยอมให้ CerebraTechAI ติดต่อกลับ' : 'I consent to CerebraTechAI contacting me'} <span className="text-primary">*</span>
              </Label>
              {errors.consent && (
                <p className="text-sm text-red-400/90">{errors.consent.message}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 border-0 shadow-[0_8px_32px_rgba(14,165,233,0.3)] hover:shadow-[0_12px_48px_rgba(14,165,233,0.4)] transition-all duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                {isThai ? 'กำลังส่ง...' : 'Sending...'}
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                {isThai ? 'ส่งและนัดคุย' : 'Submit and Book a Call'}
              </>
            )}
          </Button>

          {/* Privacy Note */}
          <p className="text-xs text-text-muted/60 text-center">
            {isThai
              ? 'ข้อมูลของคุณจะถูกเก็บเป็นความลับ และใช้สำหรับติดต่อกลับเท่านั้น'
              : 'Your information will be kept confidential and used only for follow-up purposes.'
            }
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
