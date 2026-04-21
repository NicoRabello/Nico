export const projects = [
    {
        id: "crawler-eye",
        name: "Crawler Eye",
        title: "CRAWLER",
        template: "seo", 
        theme: { 
            primary: "#00d4ff",
            pageBg: "#010d1f" 
        },
        assets: {
            image: "../../images/crawlerEye.png",
            heroBg: "linear-gradient(135deg, #00d4ff22 0%, #000000 100%)",
            badge: "SEO ENGINE"
        },
        animationConfig: { type: "parallax", speed: 0.5 },
        content: {
            headline: "Data Mining • SEO Structure",
            overview: "O Crawler Eye automatiza a auditoria técnica de SEO, identificando falhas de marcação instantaneamente.",
            sections: [
                { title: "Input Strategy", items: ["URL Direta", "Sitemap.xml", "Deep Crawl"] },
                { title: "Analysis", items: ["JSON-LD", "Microdata", "Scripts"] },
                {title: "To test", items: ["access link: https://crawlereye.onrender.com"] }
            ]
        }
    },
    {
        id: "focus-pulse",
        name: "Focus Pulse",
        title: "FOCUS",
        template: "dashboard",
        theme: { 
            primary: "#ff3e00",
            pageBg: "#1a0b05" 
        },
        assets: {
            image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?q=80&w=2000&auto=format&fit=crop",
            heroBg: "linear-gradient(135deg, #ff3e0022 0%, #000000 100%)",
            badge: "PRODUCTIVITY v1.5"
        },
        animationConfig: { type: "focus-reveal", speed: 0.8 },
        content: {
            headline: "Flow State • Deep Work",
            overview: "Extensão projetada para eliminar distrações e otimizar o fluxo de trabalho cognitivo.",
            metrics: [
                { label: "Deep Work", value: "85%" },
                { label: "Distractions", value: "12%" }
            ],
            features: ["Bloqueio customizável", "Dashboard Analítico", "Histórico de Score"]
        }
    },
    {
        id: "about-me",
        name: "About Me",
        title: "ABOUT",
        template: "about", 
        theme: { 
            primary: "#2fee15",
            pageBg: "#080f05" 
        },
        assets: {
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop",
            heroBg: "linear-gradient(135deg, #2fee15 0%, #000000 100%)",
            badge: "Curiosities & preferences"
        },
        animationConfig: { type: "parallax", speed: 0.5 },
        content: {
            headline: "More about me",
            overview: "",
            sections: [
                { title: "Movies", items: ["Interstellar", "Justice League", "Inception"] },
                { title: "Music", items: ["Mattel", "Not Ready to Die", "The fight"] },
                { title: "Pets", items: ["Gatinha", "Kira", "Chris"] }
            ]
        }
    },
    {
        id: "career-timeline",
        name: "Career Timeline",
        title: "CAREER",
        template: "career", 
        theme: { 
            primary: "#6C5CE7",
            pageBg: "#1d193b" 
        },
        assets: {
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop",
            heroBg: "linear-gradient(135deg, #2fee15 0%, #000000 100%)",
            badge: "Experience & Expertise"
        },
        animationConfig: { type: "parallax", speed: 0.5 },
        content: {
            sections: [
                { title: "Movies", items: ["Interstellar", "Justice League", "Inception"] },
                { title: "Music", items: ["Mattel", "Not Ready to Die", "The fight"] },
                { title: "Pets", items: ["Gatinha", "Kira", "Chris"] }
            ],
            experience: [
                { 
                    enterprise: "iMDT",
                    expertise: "Desenvolvedor Full Stack especializado em soluções de SEO e automação de dados, com experiência em projetos de grande escala para otimização de presença digital." 
                },
                { 
                    enterprise: "Metrovia Telecom",
                    expertise: "Desenvolvedor Full Stack especializado em soluções de SEO e automação de dados, com experiência em projetos de grande escala para otimização de presença digital." 
                },
                { 
                    enterprise: "Agência Set",
                    expertise: "Desenvolvedor Full Stack especializado em soluções de SEO e automação de dados, com experiência em projetos de grande escala para otimização de presença digital." 
                },
                { 
                    enterprise: "Prefeitura municipal de Balneário Camboriú",
                    expertise: "Desenvolvedor Full Stack especializado em soluções de SEO e automação de dados, com experiência em projetos de grande escala para otimização de presença digital." 
                },
                { 
                    enterprise: "Oficina do Notebook",
                    expertise: "Desenvolvedor Full Stack especializado em soluções de SEO e automação de dados, com experiência em projetos de grande escala para otimização de presença digital." 
                },
            ],

            
        }
    },
];
