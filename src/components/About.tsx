import { ArrowRight, CheckCircle2, User, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ThemeConfig } from '../types';

interface AboutProps {
  onScrollTo: (sectionId: string) => void;
  theme?: ThemeConfig;
}

export default function About({ onScrollTo, theme }: AboutProps) {
  const accentGradient = theme?.accentGradient || 'from-violet-400 via-fuchsia-400 to-cyan-300';

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#0a0d16]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Profile Photo Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group w-full max-w-sm">
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-violet-600 via-indigo-500 to-cyan-400 rounded-3xl blur-md opacity-35 group-hover:opacity-65 transition duration-500 pointer-events-none" />
              <div className="relative rounded-2xl bg-[#0c101c]/90 border border-white/[0.1] p-6 flex flex-col items-center text-center shadow-2xl backdrop-blur-xl">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden bg-slate-900 border-2 border-white/[0.12] flex items-center justify-center shadow-inner">
                  <img
                    src="/sakshi-kashyap.jpg"
                    alt="Sakshi Kashyap – Digital Marketing + AI"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute top-2.5 right-2.5 bg-[#07090e]/90 border border-cyan-500/40 px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-cyan-300 flex items-center gap-1 backdrop-blur-sm">
                    <Sparkles className="w-2.5 h-2.5 text-cyan-400" />
                    <span>AI Specialist</span>
                  </div>
                </div>
                <div className="mt-5 text-center">
                  <h3 className="text-lg font-bold text-white tracking-tight">{PERSONAL_INFO.name}</h3>
                  <p className="text-xs text-violet-400 font-medium">{PERSONAL_INFO.title}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-cyan-400">
                <span>About Me</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Empowering Brands & Products With Generative AI
            </h2>
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-slate-200 text-base leading-relaxed backdrop-blur-sm">
              <p className="font-medium text-slate-100">
                {PERSONAL_INFO.bioParagraph1}
              </p>
              <p className="mt-3 text-slate-300 text-sm">
                {PERSONAL_INFO.bioParagraph2}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] flex items-start gap-3 transition-colors">
                <div className="p-2 rounded-lg bg-violet-500/15 text-violet-400 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Digital Marketing Certified</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Trained in AI campaign strategy, user acquisition, and conversion funnel optimization.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] flex items-start gap-3 transition-colors">
                <div className="p-2 rounded-lg bg-cyan-500/15 text-cyan-400 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">AI-Assisted Web Dev</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Building responsive, aesthetic interfaces using rapid AI scaffolding workflows.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] flex items-start gap-3 transition-colors">
                <div className="p-2 rounded-lg bg-fuchsia-500/15 text-fuchsia-400 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Interactive Game Dev</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Prompting AI models to build playable browser canvas physics, scoring, and arcade games.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] flex items-start gap-3 transition-colors">
                <div className="p-2 rounded-lg bg-emerald-500/15 text-emerald-400 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">AI Video & Media Creation</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Producing generative video scenes, synthetic voice narration, and high-retention social assets.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onScrollTo('skills')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-violet-400 hover:text-violet-300 transition-colors group cursor-pointer"
              >
                <span>Explore my skills & AI tools</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}