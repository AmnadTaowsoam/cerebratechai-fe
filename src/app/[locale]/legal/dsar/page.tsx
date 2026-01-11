'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { SeoHead } from '@/components/seo';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const content = {
  en: {
    title: 'Data Subject Access Request (DSAR)',
    description: 'Exercise your rights under the Personal Data Protection Act (PDPA) by submitting a request to access, correct, delete, or restrict the processing of your personal data.',
    subtitle: 'Submit a request to exercise your data protection rights',
    requestTypes: [
      { value: 'access', label: 'Access my data', description: 'Request a copy of the personal data we hold about you' },
      { value: 'rectify', label: 'Correct my data', description: 'Request correction of inaccurate or incomplete data' },
      { value: 'erase', label: 'Delete my data', description: 'Request deletion of your personal data (Right to be Forgotten)' },
      { value: 'restrict', label: 'Restrict processing', description: 'Request temporary suspension of data processing' },
      { value: 'object', label: 'Object to processing', description: 'Object to certain types of data processing' },
      { value: 'portability', label: 'Data portability', description: 'Request your data in a machine-readable format' },
      { value: 'withdraw', label: 'Withdraw consent', description: 'Withdraw your consent for data processing' },
    ],
    formLabels: {
      requestType: 'Type of Request',
      fullName: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number (Optional)',
      details: 'Request Details',
      detailsPlaceholder: 'Please provide details about your request...',
      verification: 'Identity Verification',
      verificationHelp: 'To protect your privacy, we may need to verify your identity before processing your request.',
      idDocument: 'ID Document Type',
      idNumber: 'ID Number (last 4 digits only)',
      submit: 'Submit Request',
      submitting: 'Submitting...',
    },
    idTypes: [
      { value: 'national_id', label: 'National ID Card' },
      { value: 'passport', label: 'Passport' },
      { value: 'drivers_license', label: "Driver's License" },
    ],
    processingTime: 'Processing Time: We will respond within 30 days as required by PDPA.',
    privacyNotice: 'Your request will be handled confidentially and securely. Information submitted will only be used to process your DSAR.',
    successMessage: 'Your request has been submitted successfully. We will respond to your email within 30 days.',
    errorMessage: 'Failed to submit request. Please try again or contact privacy@cerebratechai.com directly.',
  },
  th: {
    title: 'แบบฟอร์มขอใช้สิทธิเจ้าของข้อมูล (DSAR)',
    description: 'ใช้สิทธิของคุณตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 โดยส่งคำขอเข้าถึง แก้ไข ลบ หรือระงับการประมวลผลข้อมูลส่วนบุคคลของคุณ',
    subtitle: 'ส่งคำขอเพื่อใช้สิทธิตาม PDPA',
    requestTypes: [
      { value: 'access', label: 'เข้าถึงข้อมูล', description: 'ขอรับสำเนาข้อมูลส่วนบุคคลที่เราเก็บรักษา' },
      { value: 'rectify', label: 'แก้ไขข้อมูล', description: 'ขอแก้ไขข้อมูลที่ไม่ถูกต้องหรือไม่สมบูรณ์' },
      { value: 'erase', label: 'ลบข้อมูล', description: 'ขอลบข้อมูลส่วนบุคคล (สิทธิถูกลืม)' },
      { value: 'restrict', label: 'ระงับการใช้', description: 'ขอระงับการประมวลผลข้อมูลชั่วคราว' },
      { value: 'object', label: 'คัดค้าน', description: 'คัดค้านการประมวลผลข้อมูลบางประเภท' },
      { value: 'portability', label: 'โอนย้ายข้อมูล', description: 'ขอข้อมูลในรูปแบบที่อ่านได้ด้วยเครื่อง' },
      { value: 'withdraw', label: 'ถอนความยินยอม', description: 'ถอนความยินยอมในการประมวลผลข้อมูล' },
    ],
    formLabels: {
      requestType: 'ประเภทคำขอ',
      fullName: 'ชื่อ-นามสกุล',
      email: 'อีเมล',
      phone: 'เบอร์โทรศัพท์ (ไม่บังคับ)',
      details: 'รายละเอียดคำขอ',
      detailsPlaceholder: 'กรุณาระบุรายละเอียดคำขอของคุณ...',
      verification: 'การยืนยันตัวตน',
      verificationHelp: 'เพื่อปกป้องความเป็นส่วนตัว เราอาจต้องยืนยันตัวตนก่อนดำเนินการ',
      idDocument: 'ประเภทเอกสาร',
      idNumber: 'เลขที่บัตร (4 หลักสุดท้ายเท่านั้น)',
      submit: 'ส่งคำขอ',
      submitting: 'กำลังส่ง...',
    },
    idTypes: [
      { value: 'national_id', label: 'บัตรประชาชน' },
      { value: 'passport', label: 'พาสปอร์ต' },
      { value: 'drivers_license', label: 'ใบขับขี่' },
    ],
    processingTime: 'ระยะเวลาดำเนินการ: เราจะตอบกลับภายใน 30 วัน ตามที่ PDPA กำหนด',
    privacyNotice: 'คำขอของคุณจะได้รับการจัดการอย่างเป็นความลับและปลอดภัย ข้อมูลจะใช้เพื่อดำเนินการตามคำขอเท่านั้น',
    successMessage: 'ส่งคำขอเรียบร้อยแล้ว เราจะตอบกลับทางอีเมลภายใน 30 วัน',
    errorMessage: 'ไม่สามารถส่งคำขอได้ กรุณาลองใหม่หรือติดต่อ privacy@cerebratechai.com โดยตรง',
  },
};

export default function DSARPage({ params }: { params: { locale: string } }) {
  const locale = params.locale?.startsWith('th') ? 'th' : 'en';
  const isThai = locale === 'th';
  const copy = content[locale];

  const [formData, setFormData] = useState({
    requestType: '',
    fullName: '',
    email: '',
    phone: '',
    details: '',
    idDocumentType: '',
    idNumber: '',
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');

    // Simulate API call
    setTimeout(() => {
      // In production, this would send to an API endpoint
      console.log('DSAR Request:', formData);
      setSubmitStatus('success');

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          requestType: '',
          fullName: '',
          email: '',
          phone: '',
          details: '',
          idDocumentType: '',
          idNumber: '',
        });
        setSubmitStatus('idle');
      }, 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <SeoHead
        title={isThai ? 'แบบฟอร์ม DSAR - CerebraTechAI' : 'DSAR Form - CerebraTechAI'}
        description={copy.description}
        url="/legal/dsar"
        noindex={true}
      />

      <div className="bg-bg min-h-screen">
        <section className="border-b border-hairline bg-surface py-16">
          <div className="container mx-auto px-6">
            <h1 className="text-3xl font-bold text-text md:text-4xl">{copy.title}</h1>
            <p className="mt-3 max-w-3xl text-text-muted">{copy.description}</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6 max-w-3xl">
            <Card className="border-hairline bg-surface">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Request Type */}
                  <div>
                    <label className="block text-sm font-medium text-text mb-3">
                      {copy.formLabels.requestType} <span className="text-red-500">*</span>
                    </label>
                    <div className="space-y-2">
                      {copy.requestTypes.map((type) => (
                        <label key={type.value} className="flex items-start gap-3 p-3 rounded-lg border border-hairline hover:bg-bg/50 cursor-pointer transition-colors">
                          <input
                            type="radio"
                            name="requestType"
                            value={type.value}
                            checked={formData.requestType === type.value}
                            onChange={handleChange}
                            className="mt-1"
                            required
                          />
                          <div>
                            <div className="font-medium text-text">{type.label}</div>
                            <div className="text-sm text-text-muted">{type.description}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">
                      {copy.formLabels.fullName} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-bg border border-hairline rounded-lg text-text focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">
                      {copy.formLabels.email} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-bg border border-hairline rounded-lg text-text focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">
                      {copy.formLabels.phone}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-bg border border-hairline rounded-lg text-text focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  {/* Request Details */}
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">
                      {copy.formLabels.details} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="details"
                      value={formData.details}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder={copy.formLabels.detailsPlaceholder}
                      className="w-full px-4 py-2 bg-bg border border-hairline rounded-lg text-text focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    />
                  </div>

                  {/* Identity Verification */}
                  <div className="border-t border-hairline pt-6">
                    <h3 className="text-lg font-semibold text-text mb-2">
                      {copy.formLabels.verification}
                    </h3>
                    <p className="text-sm text-text-muted mb-4">
                      {copy.formLabels.verificationHelp}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-text mb-2">
                          {copy.formLabels.idDocument}
                        </label>
                        <select
                          name="idDocumentType"
                          value={formData.idDocumentType}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-bg border border-hairline rounded-lg text-text focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">Select...</option>
                          {copy.idTypes.map((type) => (
                            <option key={type.value} value={type.value}>
                              {type.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-text mb-2">
                          {copy.formLabels.idNumber}
                        </label>
                        <input
                          type="text"
                          name="idNumber"
                          value={formData.idNumber}
                          onChange={handleChange}
                          maxLength={4}
                          placeholder="****"
                          className="w-full px-4 py-2 bg-bg border border-hairline rounded-lg text-text focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={submitStatus === 'loading' || submitStatus === 'success'}
                      className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {submitStatus === 'loading' ? copy.formLabels.submitting : copy.formLabels.submit}
                    </Button>
                  </div>

                  {/* Success Message */}
                  {submitStatus === 'success' && (
                    <div className="flex items-start gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-green-500">{copy.successMessage}</p>
                    </div>
                  )}

                  {/* Error Message */}
                  {submitStatus === 'error' && (
                    <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                      <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-red-500">{copy.errorMessage}</p>
                    </div>
                  )}

                  {/* Processing Time & Privacy Notice */}
                  <div className="space-y-3 pt-4 border-t border-hairline">
                    <p className="text-sm text-text-muted flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5 text-primary" />
                      {copy.processingTime}
                    </p>
                    <p className="text-sm text-text-muted flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5 text-primary" />
                      {copy.privacyNotice}
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="mt-8 text-center">
              <p className="text-sm text-text-muted">
                {isThai ? 'หากมีคำถาม ติดต่อ: ' : 'Questions? Contact: '}
                <a href="mailto:privacy@cerebratechai.com" className="text-primary hover:underline">
                  privacy@cerebratechai.com
                </a>
                {isThai ? ' | โทร: ' : ' | Tel: '}
                <a href="tel:+66856621113" className="text-primary hover:underline">
                  085-662-1113
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
