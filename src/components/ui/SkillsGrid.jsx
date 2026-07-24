'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { categories, skillsData } from '../data/skillsData';

export default function SkillsGrid() {
    const [activeTab, setActiveTab] = useState('all');

    // Filter skills using useMemo for faster page rendering & smooth performance
    const filteredSkills = useMemo(() => {
        return activeTab === 'all'
            ? skillsData
            : skillsData.filter((skill) => skill.category === activeTab);
    }, [activeTab]);

    return (
        <section 
            aria-labelledby="skills-heading" 
            className="w-full max-w-6xl mx-auto px-4 py-8 font-sans"
        >
            {/* Category Tab Switcher Nav */}
            <nav 
                aria-label="Skill Categories" 
                className="flex justify-center mb-10 px-2"
            >
                <div 
                    role="tablist" 
                    aria-orientation="horizontal"
                    className="grid grid-cols-2 sm:flex sm:flex-row w-full max-w-md sm:max-w-none sm:w-auto gap-2 sm:gap-3 p-1"
                >
                    {categories.map((tab) => {
                        const isActive = activeTab === tab.id;
                        
                        // "Backend & Security" টেক্সটকে মোবাইলে এক লাইনে রাখার জন্য "Backend" ফিল্টার
                        const displayLabel = tab.label === 'Backend & Security' ? 'Backend' : tab.label;

                        return (
                            <button
                                key={tab.id}
                                role="tab"
                                aria-selected={isActive}
                                aria-controls={`panel-${tab.id}`}
                                id={`tab-${tab.id}`}
                                onClick={() => setActiveTab(tab.id)}
                                className={`relative px-3 py-2.5 sm:px-6 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 z-10 focus:outline-none flex items-center justify-center text-center border cursor-pointer whitespace-nowrap ${
                                    isActive
                                        ? 'text-white border-transparent'
                                        : 'text-slate-600 dark:text-slate-300 bg-slate-100/80 dark:bg-slate-900/80 hover:bg-slate-200/80 dark:hover:bg-slate-800/80 border-slate-200/90 dark:border-slate-800'
                                }`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTabIndicator"
                                        className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-xl -z-10 shadow-md shadow-purple-500/30 cursor-pointer"
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}
                                {displayLabel}
                            </button>
                        );
                    })}
                </div>
            </nav>

            {/* Responsive Grid */}
            <div 
                id={`panel-${activeTab}`}
                role="tabpanel"
                aria-labelledby={`tab-${activeTab}`}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5 items-start content-start min-h-[500px] sm:min-h-[380px]"
            >
                {filteredSkills.map((skill) => {
                    const IconComponent = skill.icon;

                    return (
                        <div
                            key={skill.name}
                            className="group relative rounded-3xl p-4 sm:p-6 bg-white dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 hover:border-purple-500/50 dark:hover:border-purple-500/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-start justify-between overflow-hidden h-full min-h-[160px]"
                        >
                            {/* Soft Background Glow */}
                            <div
                                className="absolute -top-10 -right-10 w-28 h-28 rounded-full blur-2xl opacity-15 pointer-events-none transition-all duration-500 group-hover:opacity-40 group-hover:scale-125"
                                style={{ backgroundColor: skill.color }}
                            />

                            {/* Header: React Icon & Level Badge (Responsive Badge Fix) */}
                            <div className="w-full flex items-center justify-between mb-4 z-10 gap-1">
                                <div className="text-3xl sm:text-4xl transition-transform duration-300 group-hover:scale-110 flex items-center justify-center shrink-0">
                                    {IconComponent && (
                                        <>
                                            <IconComponent 
                                                style={{ color: skill.color }} 
                                                className="dark:hidden text-3xl sm:text-4xl" 
                                                aria-hidden="true"
                                            />
                                            <IconComponent 
                                                style={{ color: skill.darkColor || skill.color }} 
                                                className="hidden dark:block text-3xl sm:text-4xl" 
                                                aria-hidden="true"
                                            />
                                        </>
                                    )}
                                </div>

                                {/* Responsive Level Badge - Single Line Fix */}
                                <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-tight text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/60 px-2 py-1 rounded-lg border border-purple-200/60 dark:border-purple-800/50 whitespace-nowrap">
                                    {skill.level}
                                </span>
                            </div>

                            {/* Title & Description */}
                            <div className="z-10 mt-2">
                                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
                                    {skill.name}
                                </h3>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                                    {skill.desc}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}