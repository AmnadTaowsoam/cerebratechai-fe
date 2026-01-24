import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import Link from 'next/link';
import { Leaf, Heart, Activity, BarChart } from 'lucide-react';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'industries.agriculture' });

  return {
    title: `${t('title')} - ${t('description')}`,
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
    },
  };
}

export default async function AgriculturePage({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'industries.agriculture' });

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 opacity-20"></div>
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('title')}</h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto text-green-100">
              {t('description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#solutions"
                className="px-8 py-4 bg-white text-green-600 rounded-lg font-semibold hover:bg-opacity-90 transition min-w-[180px]"
              >
                {t('solution1')}
              </Link>
              <Link
                href="#contact"
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition min-w-[180px]"
              >
                {t('cta')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">{t('challenges')}</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl border border-slate-200">
              <div className="text-center mb-4">
                <Activity className="w-12 h-12 text-green-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">{t('challenge1')}</h3>
              <p className="text-slate-600 text-lg">{t('challenge1')}</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200">
              <div className="text-center mb-4">
                <BarChart className="w-12 h-12 text-orange-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">{t('challenge2')}</h3>
              <p className="text-slate-600 text-lg">{t('challenge2')}</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200">
              <div className="text-center mb-4">
                <Leaf className="w-12 h-12 text-emerald-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">{t('challenge3')}</h3>
              <p className="text-slate-600 text-lg">{t('challenge3')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">{t('solutions')}</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-100 p-8 rounded-2xl border border-slate-200 hover:border-green-500 transition">
              <div className="flex items-center justify-center mb-4">
                <Leaf className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{t('solution1')}</h3>
              <p className="text-slate-600 text-lg">{t('solution1')}</p>
            </div>
            <div className="bg-slate-100 p-8 rounded-2xl border border-slate-200 hover:border-emerald-500 transition">
              <div className="flex items-center justify-center mb-4">
                <BarChart className="w-12 h-12 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{t('solution2')}</h3>
              <p className="text-slate-600 text-lg">{t('solution2')}</p>
            </div>
            <div className="bg-slate-100 p-8 rounded-2xl border border-slate-200 hover:border-green-500 transition">
              <div className="flex items-center justify-center mb-4">
                <Activity className="w-12 h-12 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{t('solution3')}</h3>
              <p className="text-slate-600 text-lg">{t('solution3')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-slate-900">{t('pricing')}</h2>
          <p className="text-center text-slate-600 mb-12">{t('pricing')}</p>
          <Link
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            {t('cta')}
          </Link>
        </div>
      </section>

      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">FAQ</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="text-lg font-semibold mb-2 text-slate-800">{t('faq.q1')}</h3>
              <p className="text-slate-600 text-lg">{t('faq.a1')}</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="text-lg font-semibold mb-2 text-slate-800">{t('faq.q2')}</h3>
              <p className="text-slate-600 text-lg">{t('faq.a2')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-green-500 to-emerald-500">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">{t('cta')}</h2>
          <p className="text-xl opacity-90 mb-8">{t('ctaDesc')}</p>
          <Link
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-600 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            {t('cta')}
          </Link>
        </div>
      </section>
    </div>
  );
}
