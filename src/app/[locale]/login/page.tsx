import Link from 'next/link';

import { LoginForm } from '@/components/auth/login-form';
import { MagicHero, ShimmerButton } from '@/components/magicui';

export default function LoginPage() {
  return (
    <div className="bg-bg">
      <MagicHero
        eyebrow="Secure access"
        title="Sign in to your account"
        description="Use your Cerebratechai credentials to access dashboards, manage resources, and collaborate."
        align="center"
        actions={
          <ShimmerButton asChild className="px-6 py-3 text-sm">
            <Link href="/register">Need an account? Create one</Link>
          </ShimmerButton>
        }
      >
        <div className="space-y-6">
          <LoginForm />
          <p className="text-center text-sm text-white/60">
            Need help?{' '}
            <a href="mailto:hello@cerebratechai.com" className="text-primary hover:text-primary/80">
              Contact support
            </a>
          </p>
        </div>
      </MagicHero>
    </div>
  );
}
