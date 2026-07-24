import {
    SiNextdotjs,
    SiReact,
    SiJavascript,
    SiTypescript,
    SiTailwindcss,
    SiDaisyui,
    SiHtml5,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiGit,
    SiGithub,
    SiVercel,
    SiNetlify,
    SiRender,
    SiCursor
} from 'react-icons/si';

import {
    TbBrandVscode,
    TbKey,
    TbCpu
} from 'react-icons/tb';

import { IoLogoCss3 } from 'react-icons/io5';

export const categories = [
    { id: 'all', label: 'All Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend & Security' },
    { id: 'tools', label: 'Tools & Ecosystem' }
];

export const skillsData = [
    // Frontend
    {
        name: 'Next.js',
        category: 'frontend',
        level: 'Core Stack',
        icon: SiNextdotjs,
        color: '#000000',
        darkColor: '#FFFFFF',
        desc: 'App Router, SSR, Server Actions'
    },
    {
        name: 'React.js',
        category: 'frontend',
        level: 'Core Stack',
        icon: SiReact,
        color: '#61DAFB',
        desc: 'SPA, Custom Hooks, Context API'
    },
    {
        name: 'Tailwind CSS',
        category: 'frontend',
        level: 'Core Stack',
        icon: SiTailwindcss,
        color: '#06B6D4',
        desc: 'Responsive Design, Custom Themes'
    },
    {
        name: 'JavaScript',
        category: 'frontend',
        level: 'Core',
        icon: SiJavascript,
        color: '#F7DF1E',
        desc: 'ES6+, Async/Await, DOM'
    },
    {
        name: 'TypeScript',
        category: 'frontend',
        level: 'Basic',
        icon: SiTypescript,
        color: '#3178C6',
        desc: 'Type Safety, Interfaces'
    },
    {
        name: 'DaisyUI',
        category: 'frontend',
        level: 'Proficient',
        icon: SiDaisyui,
        color: '#5A0EFE',
        desc: 'Component System'
    },
    {
        name: 'CSS3',
        category: 'frontend',
        level: 'Intermediate',
        icon: IoLogoCss3,
        color: '#1572B6',
        desc: 'Flexbox, Grid, Animations'
    },
    {
        name: 'HTML5',
        category: 'frontend',
        level: 'Advanced',
        icon: SiHtml5,
        color: '#E34F26',
        desc: 'Semantic Structure, SEO'
    },

    // Backend
    {
        name: 'Node.js',
        category: 'backend',
        level: 'Intermediate',
        icon: SiNodedotjs,
        color: '#339933',
        desc: 'Runtime Environment, REST APIs'
    },
    {
        name: 'Express.js',
        category: 'backend',
        level: 'Intermediate',
        icon: SiExpress,
        color: '#000000',
        darkColor: '#FFFFFF',
        desc: 'Backend Routing, Middleware'
    },
    {
        name: 'MongoDB',
        category: 'backend',
        level: 'Intermediate',
        icon: SiMongodb,
        color: '#47A248',
        desc: 'NoSQL, Mongoose Schemas'
    },
    {
        name: 'BetterAuth',
        category: 'backend',
        level: 'Proficient',
        icon: TbKey,
        color: '#9333EA',
        desc: 'Session & Auth Management'
    },

    // Tools
    {
        name: 'Git',
        category: 'tools',
        level: 'Essential',
        icon: SiGit,
        color: '#F05032',
        desc: 'Version Control'
    },
    {
        name: 'GitHub',
        category: 'tools',
        level: 'Essential',
        icon: SiGithub,
        color: '#181717',
        darkColor: '#FFFFFF',
        desc: 'Code Hosting & Collaboration'
    },
    {
        name: 'Vercel',
        category: 'tools',
        level: 'Deployment',
        icon: SiVercel,
        color: '#000000',
        darkColor: '#FFFFFF',
        desc: 'Frontend Hosting & Serverless'
    },
    {
        name: 'VS Code',
        category: 'tools',
        level: 'IDE',
        icon: TbBrandVscode,
        color: '#007ACC',
        desc: 'Primary Code Editor'
    },
    {
        name: 'Render',
        category: 'tools',
        level: 'Deployment',
        icon: SiRender,
        color: '#46E3B7',
        desc: 'Backend Deployment'
    },
    {
        name: 'Netlify',
        category: 'tools',
        level: 'Deployment',
        icon: SiNetlify,
        color: '#00C7B7',
        desc: 'Static Site Hosting'
    },
    {
        name: 'Cursor',
        category: 'tools',
        level: 'AI Editor',
        icon: SiCursor,
        color: '#000000',
        darkColor: '#FFFFFF',
        desc: 'AI-Powered Development'
    },
    {
        name: 'Antigravity',
        category: 'tools',
        level: 'Workflow',
        icon: TbCpu,
        color: '#8B5CF6',
        desc: 'AI Agent & Automation'
    }
];