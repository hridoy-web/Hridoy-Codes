export const projectsData = [
    {
        id: "flexura",
        slug: "flexura",
        title: "Flexura",
        subtitle: "Ultimate Fitness & Gym Management System",
        category: "SaaS / Full-Stack MERN",
        image: "/images/Home-flexura.png",
        liveLink: "https://flexura-frontend-fitness-and-gym-ma.vercel.app",
        clientRepo: "https://github.com/hridoy-web/flexura-frontend-fitness-and-gym-management-platform",
        backendRepo: "https://github.com/hridoy-web/Flexura-Server",
        techStack: [
            "Next.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Framer Motion",
            "Stripe SDK",
            "Tailwind CSS",
            "DaisyUI",
        ],
        shortDescription:
            "High-performance role-based ecosystem for gym membership management, class scheduling, trainer assignment, and Stripe payments.",
        fullDescription:
            "Flexura is a production-grade fitness management platform engineered with 3 distinct User Roles (Member, Trainer, Admin). It solves manual gym operational friction through class booking, Stripe subscription invoicing, trainer schedule approvals, and soft-block user governance.",
        features: [
            "Role-Based Access Control (RBAC) for Members, Trainers, and Admins.",
            "Stripe API payment gateway integration with instant invoice generation.",
            "Admin soft-block moderation system preserving historic analytics.",
            "Interactive Class Booking & Trainer weekly schedule builder."
        ],
        challenges:
            "Configuring safe multi-tier RBAC protection across Next.js dynamic routing while syncing complex asynchronous Stripe webhook triggers required strict state verification and clean architecture design.",
        futurePlans: [
            "Integrate automated email subscription reminders via Resend.",
            "Implement workout progress tracker charts using Chart.js.",
            "Add live video consultation sessions between trainers and members."
        ]
    },
    {
        id: "fluento-speak",
        slug: "fluento-speak",
        title: "Fluento Speak",
        subtitle: "AI-Powered English Communication Platform",
        category: "EdTech & AI",
        image: "/images/project-fluento-speak.png",
        liveLink: "https://fluento-speak.vercel.app",
        clientRepo: "https://github.com/hridoy-web/Fluento-Speak",
        techStack: [
            "Next.js 16",
            "BetterAuth",
            "Node.js",
            "Express.js",
            "MongoDB",
            "AI API",
            "Tailwind CSS",
            "DaisyUI",
        ],
        shortDescription:
            "A full-stack platform democratizing English learning in Bangladesh with AI-powered assistance, instant post creation, and interactive modules.",
        fullDescription:
            "Fluento Speak bridges the gap between passive learning and confident spoken communication. It features a persistent floating AI practice companion for bilingual guidance and an AI Post Generator that creates structured study material from single keywords.",
        features: [
            "Floating AI Assistant providing persistent, side-by-side English translation.",
            "Instant AI Post Generator for title, summary, and detail generation.",
            "Role-based authentication & lesson publishing flow.",
            "Community Explore Hub with structured English learning guides."
        ],
        challenges:
            "Designing a floating AI interface that handles non-blocking streams and real-time side-by-side translation required careful UI state management and backend rate-limiting optimization to ensure smooth user interactions.",
        futurePlans: [
            "30-Day Freelancing English & Spoken Roadmap tracks.",
            "Gamified progression with quizzes and interactive tasks.",
            "Full administrative dashboard with student performance analytics."
        ]
    },
    {
        id: "re-tech",
        slug: "re-tech",
        isTypescript: true,
        title: "ReTech",
        subtitle: "Pre-Owned Gadget Marketplace",
        category: "Full-Stack MERN",
        image: "/images/ReTech-Home.png",
        liveLink: "https://re-tech-phi.vercel.app/",
        clientRepo: "https://github.com/hridoy-web/ReTech",
        backendRepo: "https://github.com/hridoy-web/ReTech-Backend",
        techStack: [
            "Next.js 16",
            "TypeScript",
            "BetterAuth",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Tailwind CSS v4",
            "DaisyUI",
        ],
        shortDescription:
            "A secure pre-owned hardware marketplace where users can buy and sell gadgets, manage active inventory, and filter items seamlessly.",
        fullDescription:
            "ReTech is a modern full-stack gadget marketplace engineered to connect buyers and sellers of pre-owned hardware securely. Built with Next.js 16 and TypeScript, it features strict backend-driven search and filtering pipelines, instant inventory management, and robust authentication flow using BetterAuth.",
        features: [
            "Sell & Buy Gadgets with dedicated inventory control.",
            "Dynamic Explore Page with multi-parameter filtering (Title, Category, Price).",
            "Home Page Latest Additions grid directly fetched via MongoDB aggregation.",
            "Secure user authentication flow using BetterAuth."
        ],
        challenges:
            "Being my first full-stack project with TypeScript, I faced strict type configuration errors and syntax roadblocks across Express controllers and Next.js server actions. Resolving these through systematic debugging gave me a deep, practical understanding of type safety and robust software architecture.",
        futurePlans: [
            "Integrate an escrow payment gateway for fraud-free transactions.",
            "Add real-time buyer-seller chat system using Socket.io.",
            "Implement user rating and feedback verification systems."
        ]
    },
];