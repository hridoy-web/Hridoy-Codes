import { educationData } from '@/components/data/educationData';
import EducationTimeline from '@/components/ui/EducationTimeline';
import { HiAcademicCap } from 'react-icons/hi2';

export default function EducationSection() {
    return (
        <section
            id="education"
            aria-labelledby="education-heading"
            className="w-full max-w-6xl mx-auto px-4 mb-12 font-sans"
        >
            {/* Header */}
            <header className="text-center max-w-2xl mx-auto mb-14 sm:mb-20 space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800/50 text-purple-700 dark:text-purple-300 text-xs font-mono font-semibold">
                    <HiAcademicCap className="w-4 h-4 text-purple-600 dark:text-purple-300" />
                    <span>Academic Qualification</span>
                </div>

                <h2
                    id="education-heading"
                    className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white tracking-tight"
                >
                    Educational Journey
                </h2>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
                    My academic progression from business studies to management principles that shape my problem-solving approach.
                </p>
            </header>

            {/* Interactive Timeline Client Component */}
            <EducationTimeline data={educationData} />
        </section>
    );
}