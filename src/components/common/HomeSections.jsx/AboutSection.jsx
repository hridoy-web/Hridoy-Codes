import AboutTimeline from '@/components/ui/AboutTimeline';
import { HiSparkles } from 'react-icons/hi2';

export default function AboutSection() {
    return (
        <section id="about" className="relative py-20 lg:py-24 bg-slate-50/70 overflow-hidden">
            {/* Dynamic Background Glows */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-400/10 blur-[150px] rounded-full -z-10 pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-badge/80 border border-brand-primary/20 text-brand-primary text-xs font-semibold tracking-wide mb-4 shadow-sm">
                        <HiSparkles className="w-4 h-4 text-brand-primary animate-pulse" />
                        <span>Developer Roadmap</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight leading-tight">
                        My Journey <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-purple-600 to-indigo-600">&amp; Evolution</span>
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed">
                        From coding on a mobile screen to becoming a top 13% SCIC developer—here is my step-by-step roadmap.
                    </p>
                </div>

                {/* Client Component for Animation & Scroll */}
                <AboutTimeline />
            </div>
        </section>
    );
}