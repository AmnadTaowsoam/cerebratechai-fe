'use client';

import Link from 'next/link';
import {
  Cpu,
  Wifi,
  Scale,
  Database,
  Cloud,
  Smartphone,
  Shield,
  TrendingUp,
} from 'lucide-react';
import { DashboardDemo } from '@/components/interactive/dashboard-demo';
import { TrafficLightAdvisor } from '@/components/interactive/traffic-light-advisor';

interface SmartFarmContentProps {
  translations: Record<string, string>;
}

export function SmartFarmContent({ translations: t }: SmartFarmContentProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
              {t.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#demo"
                className="px-8 py-4 bg-white text-green-600 rounded-lg font-semibold hover:bg-opacity-90 transition min-w-[180px]"
              >
                {t.ctaPrimary}
              </Link>
              <Link
                href="#features"
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition min-w-[180px]"
              >
                {t.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t['stats.title']}</h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              {t['stats.subtitle']}
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">
                {t['stats.accuracy']}
              </div>
              <div className="text-text-muted">{t['stats.accuracyDesc']}</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-secondary mb-2">
                {t['stats.uptime']}
              </div>
              <div className="text-text-muted">{t['stats.uptimeDesc']}</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-warning mb-2">
                {t['stats.response']}
              </div>
              <div className="text-text-muted">{t['stats.responseDesc']}</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-success mb-2">
                {t['stats.clients']}
              </div>
              <div className="text-text-muted">{t['stats.clientsDesc']}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t.features}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-surface p-6 rounded-xl border border-surface-3 hover:border-primary/50 transition">
              <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Cpu className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.feature1_title}</h3>
              <p className="text-text-muted text-lg">{t.feature1_desc}</p>
            </div>
            <div className="bg-surface p-6 rounded-xl border border-surface-3 hover:border-secondary/50 transition">
              <div className="w-14 h-14 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                <Wifi className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.feature2_title}</h3>
              <p className="text-text-muted text-lg">{t.feature2_desc}</p>
            </div>
            <div className="bg-surface p-6 rounded-xl border border-surface-3 hover:border-warning/50 transition">
              <div className="w-14 h-14 bg-warning/20 rounded-lg flex items-center justify-center mb-4">
                <Scale className="w-7 h-7 text-warning" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.feature3_title}</h3>
              <p className="text-text-muted text-lg">{t.feature3_desc}</p>
            </div>
            <div className="bg-surface p-6 rounded-xl border border-surface-3 hover:border-success/50 transition">
              <div className="w-14 h-14 bg-success/20 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-7 h-7 text-success" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.feature4_title}</h3>
              <p className="text-text-muted text-lg">{t.feature4_desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* WeighVision™ Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                {t['weighVision.badge']}
              </div>
              <h2 className="text-4xl font-bold mb-4">
                {t['weighVision.title']}
              </h2>
              <p className="text-text-muted text-lg">
                {t['weighVision.description']}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-bg p-6 rounded-xl border border-surface-3">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Scale className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {t['weighVision.feature1_title']}
                </h3>
                <p className="text-text-muted">
                  {t['weighVision.feature1_desc']}
                </p>
              </div>
              <div className="bg-bg p-6 rounded-xl border border-surface-3">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                  <Cpu className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {t['weighVision.feature2_title']}
                </h3>
                <p className="text-text-muted">
                  {t['weighVision.feature2_desc']}
                </p>
              </div>
              <div className="bg-bg p-6 rounded-xl border border-surface-3">
                <div className="w-12 h-12 bg-success/20 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-success" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {t['weighVision.feature3_title']}
                </h3>
                <p className="text-text-muted">
                  {t['weighVision.feature3_desc']}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traffic Light Advisor Section */}
      <section className="py-20 bg-surface-2">
        <div className="container mx-auto px-4">
          <TrafficLightAdvisor />
        </div>
      </section>

      {/* Offline-First Architecture */}
      <section className="py-20 bg-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4">
                {t['offlineFirst.badge']}
              </div>
              <h2 className="text-4xl font-bold mb-4">
                {t['offlineFirst.title']}
              </h2>
              <p className="text-text-muted text-lg">
                {t['offlineFirst.description']}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <div className="bg-surface p-6 rounded-xl border border-surface-3">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Cpu className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {t['offlineFirst.feature1_title']}
                    </h3>
                    <p className="text-text-muted">
                      {t['offlineFirst.feature1_desc']}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-surface p-6 rounded-xl border border-surface-3">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Wifi className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {t['offlineFirst.feature2_title']}
                    </h3>
                    <p className="text-text-muted">
                      {t['offlineFirst.feature2_desc']}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-surface p-6 rounded-xl border border-surface-3">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-warning/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Database className="w-6 h-6 text-warning" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {t['offlineFirst.feature3_title']}
                    </h3>
                    <p className="text-text-muted">
                      {t['offlineFirst.feature3_desc']}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-surface p-6 rounded-xl border border-surface-3">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-success/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {t['offlineFirst.feature4_title']}
                    </h3>
                    <p className="text-text-muted">
                      {t['offlineFirst.feature4_desc']}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Demo */}
      <section id="demo" className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t.dashboardDemo}
          </h2>
          <div className="flex justify-center">
            <DashboardDemo />
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                {t['techStack.badge']}
              </div>
              <h2 className="text-4xl font-bold mb-4">
                {t['techStack.title']}
              </h2>
              <p className="text-text-muted text-lg">
                {t['techStack.description']}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-surface p-6 rounded-xl border border-surface-3">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Cpu className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {t['techStack.edge']}
                </h3>
                <p className="text-text-muted">{t['techStack.edgeDesc']}</p>
              </div>
              <div className="bg-surface p-6 rounded-xl border border-surface-3">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                  <Cloud className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {t['techStack.cloud']}
                </h3>
                <p className="text-text-muted">{t['techStack.cloudDesc']}</p>
              </div>
              <div className="bg-surface p-6 rounded-xl border border-surface-3">
                <div className="w-12 h-12 bg-success/20 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-success" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {t['techStack.mobile']}
                </h3>
                <p className="text-text-muted">{t['techStack.mobileDesc']}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">{t.pricing}</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Kit */}
            <div className="bg-bg p-8 rounded-2xl border border-surface-3">
              <h3 className="text-2xl font-semibold mb-2">{t.starterKit}</h3>
              <div className="text-5xl font-bold mb-4">{t.starterPrice}</div>
              <p className="text-text-muted mb-6">{t.starterDesc}</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-success">✓</span>
                  <span>1 sensor node</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-success">✓</span>
                  <span>Basic dashboard</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-success">✓</span>
                  <span>Mobile app</span>
                </li>
              </ul>
              <Link
                href="#"
                className="block text-center py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition font-semibold"
              >
                {t.getStarted}
              </Link>
            </div>

            {/* Farm Kit */}
            <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl text-white border-2 border-white/20">
              <h3 className="text-2xl font-semibold mb-2">{t.farmKit}</h3>
              <div className="text-5xl font-bold mb-4">{t.farmPrice}</div>
              <p className="opacity-90 mb-6">{t.farmDesc}</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <span>✓</span>
                  <span>5 sensor nodes</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span>
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span>
                  <span>Alert system</span>
                </li>
              </ul>
              <Link
                href="#"
                className="block text-center py-3 bg-white text-primary rounded-lg hover:bg-opacity-90 transition font-semibold"
              >
                {t.getStarted}
              </Link>
            </div>

            {/* Enterprise */}
            <div className="bg-bg p-8 rounded-2xl border border-surface-3">
              <h3 className="text-2xl font-semibold mb-2">{t.enterprise}</h3>
              <div className="text-5xl font-bold mb-4">{t.custom}</div>
              <p className="text-text-muted mb-6">{t.enterpriseDesc}</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <span>✓</span>
                  <span>Custom deployment</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span>
                  <span>White-label</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span>
                  <span>API Integration</span>
                </li>
              </ul>
              <Link
                href="#"
                className="block text-center py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition font-semibold"
              >
                {t.contactUs}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-bg">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t['faq.title']}</h2>
            <p className="text-text-muted text-lg">{t['faq.subtitle']}</p>
          </div>
          <div className="space-y-6">
            <div className="bg-surface p-6 rounded-xl border border-surface-3">
              <h3 className="text-lg font-semibold mb-2">{t['faq.q1']}</h3>
              <p className="text-text-muted text-lg">{t['faq.a1']}</p>
            </div>
            <div className="bg-surface p-6 rounded-xl border border-surface-3">
              <h3 className="text-lg font-semibold mb-2">{t['faq.q2']}</h3>
              <p className="text-text-muted text-lg">{t['faq.a2']}</p>
            </div>
            <div className="bg-surface p-6 rounded-xl border border-surface-3">
              <h3 className="text-lg font-semibold mb-2">{t['faq.q3']}</h3>
              <p className="text-text-muted text-lg">{t['faq.a3']}</p>
            </div>
            <div className="bg-surface p-6 rounded-xl border border-surface-3">
              <h3 className="text-lg font-semibold mb-2">{t['faq.q4']}</h3>
              <p className="text-text-muted text-lg">{t['faq.a4']}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-emerald-500">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">{t.ctaTitle}</h2>
          <p className="text-xl opacity-90 mb-8">{t.ctaDesc}</p>
          <Link
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-600 rounded-lg font-semibold hover:bg-opacity-90 transition"
          >
            {t.contactUs}
          </Link>
        </div>
      </section>
    </>
  );
}
