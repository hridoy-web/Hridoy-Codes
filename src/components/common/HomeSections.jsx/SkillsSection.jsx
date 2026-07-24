import HighlightCard from '@/components/ui/HighlightCard';
import SkillsGrid from '@/components/ui/SkillsGrid';
import { HiSparkles } from 'react-icons/hi2';


export default function SkillsSection() {
    return (
        <section id="skills" className="relative py-20 lg:py-28 bg-white overflow-hidden">
            {/* Background Decorative Soft Lights */}
            <div className="absolute top-1/3 left-0 w-72 h-72 bg-purple-300/10 blur-[120px] rounded-full pointer-events-none -z-10" />
            <div className="absolute bottom-10 right-0 w-80 h-80 bg-brand-primary/10 blur-[140px] rounded-full pointer-events-none -z-10" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* SEO & Performance Friendly Header */}
                <header className="flex flex-col items-center text-center mb-2">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-badge border border-brand-primary/20 text-brand-primary text-xs font-semibold tracking-wide mb-4 shadow-sm">
                        <HiSparkles className="w-4 h-4 text-brand-primary animate-pulse" />
                        <span>Technical Proficiency</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight leading-tight">
                        Skills &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-purple-600 to-brand-secondary">Technologies</span>
                    </h2>

                    <p className="mt-4 text-base sm:text-lg text-brand-muted max-w-2xl font-normal leading-relaxed">
                        A curated stack of modern frameworks, libraries, and development tools I use to craft scalable, high-performance web applications.
                    </p>
                </header>

                {/* Client Interactive Filter Component */}
                <SkillsGrid />

                {/* HighLight Card */}
                <HighlightCard />
            </div>
        </section>
    );
}