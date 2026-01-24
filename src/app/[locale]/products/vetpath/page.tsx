import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import Link from 'next/link';
import { Eye, Database, Users, Activity } from 'lucide-react';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'products.vetpath' });

  return {
    title: `${t('name')} - ${t('tagline')}`,
    description: t('heroSubtitle'),
    openGraph: {
      title: t('heroTitle'),
      description: t('heroSubtitle'),
    },
  };
}

export default async function VetPathPage({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'products.vetpath' });

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {t('heroTitle')}
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto text-cyan-100">
              {t('heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#features"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:opacity-90 transition min-w-[180px]"
              >
                {t('ctaPrimary')}
              </Link>
              <Link
                href="#features"
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition min-w-[180px]"
              >
                {t('ctaSecondary')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">{t('features')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition">
              <div className="w-14 h-14 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                <Eye className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{t('feature1_title')}</h3>
              <p className="text-slate-300 text-lg">{t('feature1_desc')}</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition">
              <div className="w-14 h-14 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{t('feature2_title')}</h3>
              <p className="text-slate-300 text-lg">{t('feature2_desc')}</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-indigo-500 transition">
              <div className="w-14 h-14 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{t('feature3_title')}</h3>
              <p className="text-slate-300 text-lg">{t('feature3_desc')}</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition">
              <div className="w-14 h-14 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                <Activity className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{t('feature4_title')}</h3>
              <p className="text-slate-300 text-lg">{t('feature4_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">{t('techStack')}</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
              <code className="text-cyan-400 text-lg">Python</code>
            </div>
            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
              <code className="text-blue-400 text-lg">PyTorch</code>
            </div>
            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
              <code className="text-indigo-400 text-lg">OpenCV</code>
            </div>
            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
              <code className="text-cyan-400 text-lg">React</code>
            </div>
            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
              <code className="text-blue-400 text-lg">Next.js</code>
            </div>
            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
              <code className="text-indigo-400 text-lg">AWS S3</code>
            </div>
            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
              <code className="text-cyan-400 text-lg">PostgreSQL</code>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-white">{t('pricing')}</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Clinic */}
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-2xl font-semibold mb-2 text-white">{t('clinic')}</h3>
              <div className="text-5xl font-bold mb-4 text-cyan-400">{t('clinicPrice')}</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-slate-300">
                  <span className="text-cyan-400">✓</span>
                  <span>100 slides/month</span>
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <span className="text-cyan-400">✓</span>
                  <span>AI diagnosis</span>
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <span className="text-cyan-400">✓</span>
                  <span>Basic support</span>
                </li>
              </ul>
              <Link
                href="#"
                className="block text-center py-3 border-2 border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-600 transition font-semibold"
              >
                Get Started
              </Link>
            </div>

            {/* Hospital */}
            <div className="bg-gradient-to-br from-cyan-600 to-blue-600 p-8 rounded-2xl text-white border-2 border-white/20">
              <h3 className="text-2xl font-semibold mb-2">{t('hospital')}</h3>
              <div className="text-5xl font-bold mb-4 text-cyan-400">{t('hospitalPrice')}</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-cyan-100">
                  <span>✓</span>
                  <span>500 slides/month</span>
                </li>
                <li className="flex items-center gap-2 text-cyan-100">
                  <span>✓</span>
                  <span>Advanced features</span>
                </li>
                <li className="flex items-center gap-2 text-cyan-100">
                  <span>✓</span>
                  <span>Priority support</span>
                </li>
              </ul>
              <Link
                href="#"
                className="block text-center py-3 bg-white text-cyan-600 rounded-lg hover:bg-cyan-700 transition font-semibold"
              >
                Get Started
              </Link>
            </div>

            {/* Enterprise */}
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-2xl font-semibold mb-2 text-white">{t('enterprise')}</h3>
              <div className="text-5xl font-bold mb-4 text-cyan-400">{t('custom')}</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-slate-300">
                  <span className="text-cyan-400">✓</span>
                  <span>Unlimited slides</span>
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <span className="text-cyan-400">✓</span>
                  <span>Custom models</span>
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <span className="text-cyan-400">✓</span>
                  <span>On-premise deployment</span>
                </li>
              </ul>
              <Link
                href="#"
                className="block text-center py-3 border-2 border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-600 transition font-semibold"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">FAQ</h2>
          <div className="space-y-6">
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h3 className="text-lg font-semibold mb-2 text-white">{t('faq.q1')}</h3>
              <p className="text-slate-300 text-lg">{t('faq.a1')}</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h3 className="text-lg font-semibold mb-2 text-white">{t('faq.q2')}</h3>
              <p className="text-slate-300 text-lg">{t('faq.a2')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900 to-blue-900">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">{t('ctaTitle')}</h2>
          <p className="text-xl opacity-90 mb-8">{t('ctaDesc')}</p>
          <Link
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-cyan-700 transition"
          >
            ติดต่อเพื่อเดโม
          </Link>
        </div>
      </section>
    </main>
  );
}
