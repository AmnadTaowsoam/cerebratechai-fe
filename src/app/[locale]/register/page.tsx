import Link from 'next/link';

import { RegisterForm } from '@/components/auth/register-form';
import { MagicHero, ShimmerButton } from '@/components/magicui';

export default function RegisterPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = params.locale?.startsWith('th') ? 'th' : 'en';
  const basePath = `/${locale}`;

  return (
    <div className="bg-bg">
      <MagicHero
        eyebrow="Create access"
        title="Create your account"
        description="Spin up a new CerebraTechAI workspace profile, invite teammates, and personalise your preferences."
        align="center"
        actions={
          <ShimmerButton asChild className="px-6 py-3 text-sm">
            <Link href={`${basePath}/login` as any}>
              Already have an account? Sign in
            </Link>
          </ShimmerButton>
        }
      >
        <div className="space-y-6">
          <RegisterForm />
          <p className="text-center text-sm text-white/60">
            By continuing you agree to our{' '}
            <Link
              href={`${basePath}/legal/terms` as any}
              className="text-primary hover:text-primary/80"
            >
              Terms of Service
            </Link>
            .
          </p>
        </div>
      </MagicHero>
    </div>
  );
}
