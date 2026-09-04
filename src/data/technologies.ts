export interface Technology {
    name: string;
    icon: string;
}

// Central registry of technologies -> colored brand icon (Iconify) + display name.
// Icons come from the @iconify-json/{devicon,logos,vscode-icons} packages.
export const technologies = {
    python: { name: "Python", icon: "devicon:python" },
    csharp: { name: "C#", icon: "devicon:csharp" },
    dotnet: { name: ".NET", icon: "devicon:dotnetcore" },
    html: { name: "HTML", icon: "devicon:html5" },
    css: { name: "CSS", icon: "devicon:css3" },
    tailwind: { name: "Tailwind CSS", icon: "devicon:tailwindcss" },
    typescript: { name: "TypeScript", icon: "devicon:typescript" },
    react: { name: "React", icon: "devicon:react" },
    reactnative: { name: "React Native", icon: "devicon:react" },
    expo: { name: "Expo", icon: "devicon:expo" },
    xaml: { name: "XAML", icon: "vscode-icons:file-type-xaml" },
    xml: { name: "XML", icon: "vscode-icons:file-type-xml" },
    entityframework: { name: "Entity Framework", icon: "devicon:entityframeworkcore" },
    sqlserver: { name: "SQL Server", icon: "devicon:microsoftsqlserver" },
    tensorflow: { name: "TensorFlow", icon: "devicon:tensorflow" },
    opencv: { name: "OpenCV", icon: "devicon:opencv" },
    unity: { name: "Unity", icon: "devicon:unity" },
    ionic: { name: "Ionic", icon: "devicon:ionic" },
    astro: { name: "Astro", icon: "devicon:astro" },
    vite: { name: "Vite", icon: "devicon:vitejs" },
    postgresql: { name: "PostgreSQL", icon: "devicon:postgresql" },
    neon: { name: "Neon", icon: "logos:neon-icon" },
    sqlalchemy: { name: "SQLAlchemy", icon: "devicon:sqlalchemy" },
    angular: { name: "Angular", icon: "devicon:angularjs" },
    openai: { name: "OpenAI", icon: "logos:openai-icon" },
    spotify: { name: "Spotify", icon: "logos:spotify-icon" },
} as const satisfies Record<string, Technology>;

export type TechnologyKey = keyof typeof technologies;
