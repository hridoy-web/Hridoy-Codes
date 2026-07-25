'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { HiArrowLeft, HiHome } from 'react-icons/hi2';

export default function NotFoundActions() {
  const router = useRouter();

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
      {/* Primary Purple Button */}
      <Link
        href="/"
        className="w-full sm:w-auto px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm shadow-md shadow-purple-500/20 hover:shadow-purple-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group"
      >
        <HiHome className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
        Return Home
      </Link>

      {/* Secondary Button */}
      <button
        onClick={() => router.back()}
        className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-semibold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
      >
        <HiArrowLeft className="w-4 h-4" />
        Go Back
      </button>
    </div>
  );
}