(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/data/content.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "education",
    ()=>education,
    "experiences",
    ()=>experiences,
    "portfolioData",
    ()=>portfolioData,
    "projects",
    ()=>projects,
    "skills",
    ()=>skills
]);
const experiences = [
    {
        title: 'Software Developer',
        company: 'IBM Labs',
        period: 'December 2024 - Present',
        bullets: [
            'Design and implement control plane components using Golang and Python for AI infrastructure and cloud-native systems.',
            'Develop Kubernetes Custom Resource Definitions (CRDs) and operators using Kubebuilder for automated resource management.',
            'Build highly available microservices with gRPC and REST APIs spanning multiple regions.',
            'Manage IBM Cloud Bare Metal Servers at scale, implementing monitoring systems using IPMI/BMC interfaces.',
            'Implement telemetry collection using eBPF and define SLA/SLO metrics for system reliability.',
            'Establish CI/CD pipelines and release management best practices for production deployments.',
            'Collaborate with cross-functional teams ensuring GPU/CUDA compatibility for AI workloads.'
        ]
    },
    {
        title: 'Principal Software Engineer',
        company: 'CAST Software',
        period: 'November 2019 - December 2024',
        bullets: [
            'Designed a Role-Based Access Control (RBAC) system, reducing authorization-related issues ensuring seamless integration with multiple platforms.',
            'Designed and implemented a scalable ETL queue system, improving data processing speed.',
            'Optimized Neo4j query performance, cutting down execution time which enhanced system responsiveness.',
            'Mentored a team of 6 backend developers, improving overall code quality and boosting team productivity through continuous learning and technical guidance.'
        ]
    },
    {
        title: 'Software Developer',
        company: 'Kloud9 Technologies',
        period: 'March 2018 - October 2019',
        bullets: [
            'Developed a Kubernetes Custom Resource Definition (CRD) to automate resource management, improving scalability and reducing manual intervention in deployments.',
            'Created a custom CI/CD tool tailored for multi-cloud environments (GCP, AWS, OpenShift, Kubernetes), enhancing deployment success rates across 20+ projects.',
            'Designed a template engine for dynamically generating deployment pipelines, enabling teams to create custom workflows across various cloud platforms.',
            'Designed and implemented an approval system that automated deployment propagation from development to QA, and QA to production.',
            'Standardized Kubernetes deployments on AWS, GKE, and AKS, reducing manual effort and accelerating release cycles.'
        ]
    },
    {
        title: 'Production System & Network Engineer',
        company: 'Flipkart Pvt Ltd',
        period: 'November 2015 - March 2018',
        bullets: [
            'Developed a hardware health monitoring system using Golang, Beego, Gorilla Mux, and Redis for real-time server monitoring via IPMI.',
            'Created and consumed REST APIs using Golang for the monitoring system, integrating with hardware to track server metrics.',
            'Built a live capacity planner to monitor resource availability across VMs, utilizing Golang, MySQL, and Beego.',
            'Managed over 21,000 Linux servers in multiple data centers, implementing monitoring tools like Nagios and Splunk.',
            'Automated system administration tasks and monitoring scripts using shell scripting.',
            'Provided production support and handled user administration, key-based access, and virtualization through KVM.'
        ]
    },
    {
        title: 'System Engineer',
        company: 'Brocade Communications',
        period: 'April 2015 - November 2015',
        bullets: [
            'Developed Python and Shell scripts to automate Linux system monitoring, leading to 30% faster issue detection.',
            'Handled hardware issues for 600+ servers from HP, IBM, and Dell, coordinating with vendors for resolution.',
            'Built and configured servers from scratch, including managing Linux KVM servers.',
            'Managed file systems, resolved file system issues, and resized using LVM; applied kernel patches.',
            'Centralized server log management using Splunk, created dashboards and log analysis reports.'
        ]
    },
    {
        title: 'System Engineer',
        company: 'Suksh Technology Pvt Ltd, Bengaluru',
        period: 'January 2013 - April 2015',
        bullets: [
            'Automated hardware provisioning and system configuration tasks using Python and Shell, reducing setup times by 35%.'
        ]
    }
];
const projects = [
    {
        title: 'CAST Imaging',
        role: 'Enterprise Software Analysis Platform',
        company: 'CAST Software',
        description: 'Led the development of an enterprise-grade software analysis platform that reverse-engineers complex software systems to create interactive architecture blueprints.',
        highlights: [
            {
                label: 'RBAC System',
                value: 'Reducing authorization issues by 40%'
            },
            {
                label: 'ETL Pipeline',
                value: 'Improving data processing speed by 60%'
            },
            {
                label: 'Database Optimization',
                value: 'Reducing execution time by 70%'
            },
            {
                label: 'Team Leadership',
                value: 'Mentored 6 developers, improved productivity'
            }
        ],
        tech: [
            'Golang',
            'Neo4j',
            'PostgreSQL',
            'Microservices',
            'Docker',
            'Kubernetes'
        ]
    },
    {
        title: 'Multi-Cloud Continuous Delivery',
        role: 'Platform Engineering',
        company: 'Kloud9 Technologies',
        description: 'Architected and developed a comprehensive CI/CD platform supporting multiple cloud providers with automated deployment pipelines.',
        highlights: [
            {
                label: 'Multi-Cloud',
                value: 'AWS EC2, GKE, Azure AKS, OpenShift'
            },
            {
                label: 'Kubernetes CRD',
                value: 'Automated resource management'
            },
            {
                label: 'Template Engine',
                value: 'Dynamic pipeline generation'
            },
            {
                label: 'Approval System',
                value: 'Automated deployment propagation'
            },
            {
                label: 'Impact',
                value: '45% enhanced deployment success rate'
            }
        ],
        tech: [
            'Golang',
            'Kubernetes',
            'Docker',
            'Jenkins',
            'AWS',
            'GCP',
            'Azure'
        ]
    },
    {
        title: 'Bare Metal Server Monitoring',
        role: 'Infrastructure Management',
        company: 'Flipkart',
        description: 'Developed a comprehensive hardware health monitoring system for 21,000+ servers across multiple data centers using IPMI protocol.',
        highlights: [
            {
                label: 'Real-time Monitoring',
                value: 'Temperature, voltage, fan speeds'
            },
            {
                label: 'REST API',
                value: 'Golang-based hardware metrics'
            },
            {
                label: 'Capacity Planning',
                value: 'Live dashboard with MySQL'
            },
            {
                label: 'Scale',
                value: '21,000+ servers, 99.9% uptime'
            }
        ],
        tech: [
            'Golang',
            'Beego',
            'Redis',
            'MySQL',
            'IPMI',
            'Nagios',
            'Splunk'
        ]
    },
    {
        title: 'AI-Driven Infrastructure',
        role: 'Research & Development',
        company: 'Internal Project',
        description: 'Designed intelligent infrastructure management system using machine learning to predict and optimize resource allocation.',
        highlights: [
            {
                label: 'Predictive Analytics',
                value: 'Data patterns and demand trends'
            },
            {
                label: 'Auto-scaling',
                value: 'Automated resource deployment'
            },
            {
                label: 'Cost Optimization',
                value: 'Intelligent de-allocation, 30% reduction'
            },
            {
                label: 'Config Management',
                value: 'Automated infrastructure config'
            }
        ],
        tech: [
            'Python',
            'Machine Learning',
            'Kubernetes',
            'Cloud APIs',
            'Monitoring'
        ]
    }
];
const skills = [
    {
        name: 'Golang',
        level: 95,
        category: 'languages'
    },
    {
        name: 'Python',
        level: 85,
        category: 'languages'
    },
    {
        name: 'Shell Scripting (Bash)',
        level: 90,
        category: 'languages'
    },
    {
        name: 'Kubernetes',
        level: 92,
        category: 'devops'
    },
    {
        name: 'Docker',
        level: 90,
        category: 'devops'
    },
    {
        name: 'AWS / GCP / Azure',
        level: 85,
        category: 'devops'
    },
    {
        name: 'Neo4j (Graph DB)',
        level: 85,
        category: 'databases'
    },
    {
        name: 'PostgreSQL / MySQL',
        level: 88,
        category: 'databases'
    },
    {
        name: 'Redis',
        level: 82,
        category: 'databases'
    }
];
const education = [
    {
        university: 'Punjab Technical University',
        degree: 'Bachelor of Technology',
        field: 'Electronics & Communication Engineering',
        period: 'August 2008 - May 2012'
    }
];
const portfolioData = {
    name: 'Karanjit',
    lastName: 'Singh',
    title: 'Principal Software Engineer',
    subtitle: 'Bengaluru · +91 9036765664 · karan.parhar90@gmail.com',
    photo: '/img/profile.jpeg',
    bio: 'Software Engineer with 12+ years of expertise in developing large-scale software systems using Golang and other technologies. Proven track record of leading high-performing teams, architecting scalable solutions, and delivering complex projects across multiple industries.',
    social: {
        linkedin: 'https://www.linkedin.com/in/karanjit-singh-78b33a129/',
        github: 'https://github.com/karanparhar',
        twitter: 'https://twitter.com/karanjitparhar',
        facebook: 'https://www.facebook.com/karan.parhar.5'
    },
    availableFor: [
        'Cloud Architecture',
        'Backend Development',
        'DevOps Engineering',
        'Technical Leadership'
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/content.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/facebook.js [app-client] (ecmascript) <export default as Facebook>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const NAV_ITEMS = [
    {
        href: '#about',
        label: 'About'
    },
    {
        href: '#experience',
        label: 'Experience'
    },
    {
        href: '#projects',
        label: 'Projects'
    },
    {
        href: '#education',
        label: 'Education'
    },
    {
        href: '#skills',
        label: 'Skills'
    },
    {
        href: '#contact',
        label: 'Contact'
    }
];
function Sidebar() {
    _s();
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('about');
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Sidebar.useEffect": ()=>{
            const handleScroll = {
                "Sidebar.useEffect.handleScroll": ()=>{
                    setScrolled(window.scrollY > 50);
                    const sections = NAV_ITEMS.map({
                        "Sidebar.useEffect.handleScroll.sections": (item)=>item.href.substring(1)
                    }["Sidebar.useEffect.handleScroll.sections"]);
                    for(let i = sections.length - 1; i >= 0; i--){
                        const el = document.getElementById(sections[i]);
                        if (el && el.getBoundingClientRect().top <= 200) {
                            setActiveSection(sections[i]);
                            break;
                        }
                    }
                }
            }["Sidebar.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            return ({
                "Sidebar.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["Sidebar.useEffect"];
        }
    }["Sidebar.useEffect"], []);
    const handleNav = (href)=>{
        setMobileOpen(false);
        const el = document.getElementById(href.substring(1));
        el?.scrollIntoView({
            behavior: 'smooth'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "lg:hidden fixed top-0 left-0 z-[60] bg-bg-surface/90 backdrop-blur-md p-3 m-2 rounded-lg border border-border",
                onClick: ()=>setMobileOpen(!mobileOpen),
                "aria-label": "Toggle navigation",
                children: mobileOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/components/Sidebar.tsx",
                    lineNumber: 52,
                    columnNumber: 23
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/components/Sidebar.tsx",
                    lineNumber: 52,
                    columnNumber: 41
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Sidebar.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: `fixed top-0 left-0 h-screen bg-bg-surface/95 backdrop-blur-xl border-r border-border z-50 flex flex-col items-center py-10 px-4 transition-all duration-300
          w-full lg:w-sidebar
               ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center w-full mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative mb-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -inset-2 rounded-full bg-accent/20 blur-xl opacity-40"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.tsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-28 h-28 rounded-full overflow-hidden border-2 border-border",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/img/profile.jpeg",
                                            alt: `${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["portfolioData"].name} ${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["portfolioData"].lastName}`,
                                            className: "w-full h-full object-cover",
                                            loading: "eager"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Sidebar.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.tsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Sidebar.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-heading font-bold text-text-primary text-xl tracking-tight text-center",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["portfolioData"].name,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-accent",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["portfolioData"].lastName
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.tsx",
                                        lineNumber: 78,
                                        columnNumber: 34
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Sidebar.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-text-secondary text-sm font-body mt-1.5 font-medium",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["portfolioData"].title
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-accent text-xs font-mono font-medium",
                                    children: "Open to opportunities"
                                }, void 0, false, {
                                    fileName: "[project]/components/Sidebar.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Sidebar.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "w-full flex-1 overflow-y-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-1",
                            children: NAV_ITEMS.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `nav-link ${activeSection === item.href.substring(1) ? 'active' : ''}`,
                                    onClick: ()=>handleNav(item.href),
                                    children: item.label
                                }, item.href, false, {
                                    fileName: "[project]/components/Sidebar.tsx",
                                    lineNumber: 92,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Sidebar.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Sidebar.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full mt-auto pt-6 flex flex-col items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3",
                                children: [
                                    {
                                        href: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["portfolioData"].social.linkedin,
                                        label: 'LinkedIn',
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"]
                                    },
                                    {
                                        href: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["portfolioData"].social.github,
                                        label: 'GitHub',
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"]
                                    },
                                    {
                                        href: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["portfolioData"].social.twitter,
                                        label: 'Twitter',
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"]
                                    },
                                    {
                                        href: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["portfolioData"].social.facebook,
                                        label: 'Facebook',
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"]
                                    }
                                ].map(({ href, label, icon: Icon })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: href,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "w-9 h-9 rounded-lg bg-bg-elevated border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-all duration-300",
                                        "aria-label": label,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/components/Sidebar.tsx",
                                            lineNumber: 121,
                                            columnNumber: 17
                                        }, this)
                                    }, href, false, {
                                        fileName: "[project]/components/Sidebar.tsx",
                                        lineNumber: 113,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/resume/karan_resume.pdf",
                                target: "_blank",
                                className: "w-full text-center px-4 py-2.5 bg-accent/10 text-accent rounded-lg text-xs font-heading font-semibold uppercase tracking-widest hover:bg-accent/20 border border-accent/20 transition-all duration-300",
                                children: "Download Resume"
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Sidebar.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Sidebar.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: mobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "fixed inset-0 bg-black/50 z-40 lg:hidden",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    onClick: ()=>setMobileOpen(false)
                }, void 0, false, {
                    fileName: "[project]/components/Sidebar.tsx",
                    lineNumber: 140,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Sidebar.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: scrolled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                    className: "fixed bottom-6 right-6 z-50 w-10 h-10 bg-accent/10 backdrop-blur rounded-lg flex items-center justify-center text-accent border border-accent/20 hover:bg-accent/20",
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: 20
                    },
                    onClick: ()=>window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        }),
                    "aria-label": "Back to top",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                        size: 18
                    }, void 0, false, {
                        fileName: "[project]/components/Sidebar.tsx",
                        lineNumber: 161,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Sidebar.tsx",
                    lineNumber: 153,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Sidebar.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Sidebar, "ghDkd14NdS4AKuBJtBLo7UnVJ6Y=");
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0i8ds5h._.js.map