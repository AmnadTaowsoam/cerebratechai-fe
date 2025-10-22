import { LogOut, Settings, Upload, User } from 'lucide-react';

import { AuthGuard } from '@/components/auth/auth-guard';
import { ShimmerButton, MagicHero, AnimatedGradientText, Particles } from '@/components/magicui';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/lib/hooks/use-auth';

function DashboardContent() {
  const { user, logout } = useAuth();

  const metrics = [
    { value: 'Workspace', label: 'Organisation' },
    { value: user?.role ?? 'Member', label: 'Role' },
    { value: 'today', label: 'Last Sign-In' },
  ];

  return (
    <div className="bg-bg">
      <MagicHero
        eyebrow="Account workspace"
        title={`Welcome back, ${user?.name ?? 'Operator'}`}
        description="Review your workspace shortcuts, manage preferences, and jump directly into the tools you use most."
        actions={
          <ShimmerButton type="button" onClick={logout} className="px-6 py-3 text-sm">
            <LogOut className="h-4 w-4" />
            Sign out
          </ShimmerButton>
        }
        metrics={metrics}
      />

      <section className="relative py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.14),_transparent_60%)]" />
        <div className="absolute inset-0 opacity-25">
          <Particles quantity={32} staticity={18} ease={60} />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <div>
              <AnimatedGradientText className="px-4 py-2 text-[0.6rem] uppercase tracking-[0.35em] text-white/80">
                CONTROL CENTRE
              </AnimatedGradientText>
              <h2 className="mt-4 text-3xl font-semibold text-text">Stay on top of your workspace</h2>
              <p className="text-sm text-text-muted">
                Quick links to your profile, recent uploads, and settings.
              </p>
            </div>
            <Button variant="outline" className="border-white/20 bg-white/5 text-white backdrop-blur">
              Need help?
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Profile',
                description: 'Manage your account settings',
                icon: User,
                action: 'View Profile',
              },
              {
                title: 'Uploads',
                description: 'Manage your file uploads',
                icon: Upload,
                action: 'View Uploads',
              },
              {
                title: 'Settings',
                description: 'Configure your preferences',
                icon: Settings,
                action: 'Open Settings',
              },
            ].map((item) => (
              <Card
                key={item.title}
                className="group relative overflow-hidden border border-white/10 bg-surface/80 backdrop-blur transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_64px_rgba(8,23,45,0.45)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 transition duration-500 group-hover:opacity-100" />
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-text">
                    <item.icon className="h-5 w-5 text-primary" />
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-text-muted">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full border-white/10 bg-white/5 text-text">
                    {item.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <AuthGuard>
      <DashboardContent />
    </AuthGuard>
  );
}
