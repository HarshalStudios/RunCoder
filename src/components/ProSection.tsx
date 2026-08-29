import { Check, X, Sparkles, ShieldCheck, Download, RefreshCw, ExternalLink, Star } from 'lucide-react';
import { PLAY_STORE_URL } from '../types';

export default function ProSection() {
  const plans = [
    {
      name: 'Monthly Pass',
      billing: 'Subscription',
      badge: 'Flexible',
      desc: 'Flexible access for short-term projects and trying out premium coding fonts.',
      cta: 'View in App',
      note: 'Managed by Google Play Billing. Renews monthly until canceled in your Google Play account.',
      features: [
        'Ad-free coding workspace',
        'Unlock premium coding fonts',
        'Full access to Pro templates',
        'Support ongoing development'
      ]
    },
    {
      name: 'Annual Pass',
      billing: 'Subscription',
      badge: 'Popular',
      popular: true,
      desc: 'Best for students, semesters, and consistent year-round mobile development.',
      cta: 'View in App',
      note: 'Managed by Google Play Billing. Renews annually until canceled in your Google Play account.',
      features: [
        'Ad-free coding workspace',
        'Unlock premium coding fonts',
        'Full access to Pro templates',
        'Support ongoing development'
      ]
    },
    {
      name: 'Lifetime Pass',
      billing: 'One-Time Purchase',
      badge: 'One-Time',
      desc: 'One-time purchase with no recurring subscription fees.',
      cta: 'View in App',
      note: 'One-time purchase linked to your Google Play account. No automatic renewals.',
      features: [
        'Ad-free coding workspace',
        'Unlock premium coding fonts',
        'Full access to Pro templates',
        'Support ongoing development'
      ]
    }
  ];

  const comparisonRows = [
    { name: 'Advertisements', free: 'Ad-Supported', pro: 'Ad-Free' },
    { name: 'Multi-File Code Editor', free: 'Included', pro: 'Included' },
    { name: '7 Supported Languages', free: 'Included', pro: 'Included' },
    { name: 'Standard Templates', free: 'Included', pro: 'Included' },
    { name: 'Pro Starter Templates', free: 'Basic Only', pro: 'Full Access' },
    { name: 'Coding Fonts', free: 'Standard Fonts', pro: 'Premium Fonts' },
    { name: 'Google Play Billing', free: 'Supported', pro: 'Supported' }
  ];

  return (
    <div className="space-y-20 pb-16" id="pro-page-root">
      
      {/* 1. Header Hero */}
      <section className="text-center space-y-4 max-w-3xl mx-auto pt-10 px-4">
        <div className="inline-flex items-center space-x-1.5 bg-amber-400/10 text-amber-300 border border-amber-400/20 px-3 py-1 rounded-full text-[10px] font-bold tracking-tight uppercase font-mono">
          <Sparkles className="w-3.5 h-3.5" />
          <span>RUNCODER PRO</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
          More focus. More control.
        </h1>
        <p className="text-slate-400 text-sm leading-relaxed max-w-xl mx-auto">
          Unlock the premium features that make coding on Android more comfortable. Remove advertisements, customize your editor with premium typography, and support active development.
        </p>
      </section>

      {/* 2. Localized Price Notice */}
      <section className="max-w-4xl mx-auto px-4" id="pricing-policy-banner">
        <div className="bg-[#131520] border border-slate-800/80 rounded-3xl p-6 sm:p-7 flex flex-col md:flex-row items-center gap-5 text-left">
          <div className="w-11 h-11 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
            <RefreshCw className="w-5 h-5 text-indigo-400" />
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-extrabold text-white">Google Play Dynamic Pricing</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Pricing is shown in the RunCoder Android app through Google Play Billing and may vary by country, currency, and applicable taxes. Subscriptions and one-time purchases are securely managed through your Google Account.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Plans Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8" id="plans-grid">
        {plans.map((p, idx) => (
          <div 
            key={idx}
            className={`bg-[#131520] border rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden transition-all ${
              p.popular 
                ? 'border-indigo-500 shadow-2xl shadow-indigo-950/40 ring-1 ring-indigo-500/20 md:scale-102' 
                : 'border-slate-800/80 hover:border-slate-700/80'
            }`}
          >
            {p.popular && (
              <div className="absolute top-0 right-0 bg-indigo-600 text-white font-bold text-[9px] px-3.5 py-1 rounded-bl-xl tracking-wider uppercase font-mono">
                Popular
              </div>
            )}

            <div className="space-y-6 text-left">
              <div>
                <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest font-mono">
                  {p.billing}
                </span>
                <h3 className="text-lg font-extrabold text-white leading-snug mt-1 font-display">{p.name}</h3>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed min-h-[32px]">{p.desc}</p>
              </div>

              {/* Pricing Mode Section */}
              <div className="py-4 border-y border-slate-800/80 space-y-1.5">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block font-mono">Billing Channel</span>
                <div className="text-base font-extrabold text-white">Google Play Billing</div>
                <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
                  {p.note}
                </p>
              </div>

              {/* Benefits list */}
              <div className="space-y-2.5 pt-1">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block font-mono">Included in Pass</span>
                {p.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start space-x-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-slate-300">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 px-4 rounded-xl text-xs font-bold transition-all active:scale-95 cursor-pointer text-center flex items-center justify-center space-x-2 ${
                  p.popular
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-950/20 border border-indigo-400/20'
                    : 'bg-[#1d2033] hover:bg-slate-800 text-slate-300 border border-slate-800/80'
                }`}
              >
                <Download className="w-3.5 h-3.5 shrink-0" />
                <span>{p.cta}</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* 4. Billing Architecture & Privacy Notice */}
      <section className="max-w-4xl mx-auto px-4" id="billing-privacy-info">
        <div className="bg-[#131520] rounded-2xl border border-slate-800/80 p-5 flex items-start sm:items-center space-x-3.5 text-left">
          <ShieldCheck className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5 sm:mt-0" />
          <p className="text-xs text-slate-400 leading-relaxed">
            <strong className="text-slate-200">Google Play Billing:</strong> Payments are handled directly through Google Play Billing. The RunCoder website does not process credit cards or payment details. Subscriptions can be managed or canceled anytime in your Google Play Store account settings.
          </p>
        </div>
      </section>

      {/* 5. Side-By-Side Comparison Table */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6" id="comparison-section">
        <div className="text-center space-y-1.5">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">Plan Breakdown</span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight font-display">Free vs. RunCoder Pro</h2>
        </div>

        <div className="bg-[#131520] border border-slate-800/80 rounded-3xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0d0e15] border-b border-slate-800/80 text-xs font-bold text-slate-400">
                  <th className="p-4 sm:p-5">Feature</th>
                  <th className="p-4 sm:p-5 text-center">Free</th>
                  <th className="p-4 sm:p-5 text-center">Pro Pass</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50 text-xs text-slate-300">
                {comparisonRows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-800/20 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-white">{row.name}</td>
                    <td className="p-4 sm:p-5 text-center font-medium text-slate-400">
                      {row.free}
                    </td>
                    <td className="p-4 sm:p-5 text-center font-bold text-indigo-400">
                      {row.pro}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  );
}
