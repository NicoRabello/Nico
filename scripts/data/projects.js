export const projects = [
    {
        id: "crawler-eye",
        name: "Crawler Eye",
        title: "CRAWLER",
        template: "seo", // Layout focado em métricas e análise
        theme: { 
            primary: "#00d4ff",
            pageBg: "#05161a" // Fundo escuro azulado
        },
        assets: {
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2000&auto=format&fit=crop",
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
        theme: { 
            primary: "#ff3e00",
            pageBg: "#1a0b05" // Fundo escuro avermelhado
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
        template: "about", // Layout focado em apresentação pessoal
        theme: { 
            primary: "#2fee15",
            pageBg: "#080f05" // Fundo escuro esverdeado
        },
        assets: {
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop",
            heroBg: "linear-gradient(135deg, #2fee15 0%, #000000 100%)",
            badge: "Curiosities & preferences"
        },
        animationConfig: { type: "parallax", speed: 0.5 },
        content: {
            headline: "Data Mining • SEO Structure",
            overview: "O Crawler Eye automatiza a auditoria técnica de SEO, identificando falhas de marcação instantaneamente.",
            sections: [
                { title: "Movies", items: ["Interstellar", "Justice League", "Inception"] },
                { title: "Music", items: ["Mattel", "Not Ready to Die", "The fight"] },
                { title: "Pets", items: ["Gatinha", "Kira", "Chris"] }
            ]
        }
    }
];
