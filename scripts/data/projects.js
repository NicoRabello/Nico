export const projects = [
    {
        id: "crawler-eye",
        name: "Crawler Eye",
        title: "CRAWLER",
        template: "seo", // Layout focado em métricas e análise
        theme: { primary: "#00d4ff" },
        assets: {
            heroBg: "linear-gradient(135deg, #00d4ff22 0%, #000000 100%)",
            badge: "SEO ENGINE"
        },
        animationConfig: { type: "parallax", speed: 0.5 },
        content: {
            headline: "Data Mining • SEO Structure",
            overview: "O Crawler Eye automatiza a auditoria técnica de SEO, identificando falhas de marcação instantaneamente.",
            sections: [
                { title: "Input Strategy", items: ["URL Direta", "Sitemap.xml", "Deep Crawl"] },
                { title: "Analysis", items: ["JSON-LD", "Microdata", "Scripts"] }
            ]
        }
    },
    {
        id: "focus-pulse",
        name: "Focus Pulse",
        title: "FOCUS",
        template: "dashboard", // Layout focado em visualização de dados
        theme: { primary: "#ff3e00" },
        assets: {
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
        template: "about", // Layout focado em apresentação pessoal
        theme: { primary: "#2fee15" },
        assets: {
            heroBg: "linear-gradient(135deg, #2fee15 0%, #000000 100%)",
            badge: "Curiosities & preferences"
        },
        animationConfig: { type: "parallax", speed: 0.5 },
        content: {
            headline: "Data Mining • SEO Structure",
            overview: "O Crawler Eye automatiza a auditoria técnica de SEO, identificando falhas de marcação instantaneamente.",
            sections: [
                { title: "Movies", items: ["URL Direta", "Sitemap.xml", "Deep Crawl"] },
                { title: "Music", items: ["JSON-LD", "Microdata", "Scripts"] },
                { title: "Books", items: ["JSON-LD", "Microdata", "Scripts"] }
            ]
        }
    }
];
