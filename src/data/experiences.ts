import type { Experience } from "types/experience";

export const experiences: Experience[] = [
    {
        title: "Customer Success Engineer",
        company: "ROOK",
        dateStart: new Date(2025, 7, 11),
        dateEnd: new Date(),
        current: true,
        description: "Helping companies integrate wearable data into their apps through ROOK's API, SDK, and webhooks. Supporting technical integrations, troubleshooting and guidance.",
        aptitudes: ["root cause analysis", "problem-solving", "communication", "active listening"]
    },
    {
        title: "ALDS & Apps Trainee",
        company: "Schaeffler",
        dateStart: new Date(2024, 4, 13),
        dateEnd: new Date(2025, 7, 4),
        current: false,
        description: "Development of web apps using .NET, Entity Framework and SQL Server for backend and Angular for frontend, desktop apps and windows service using .NET Framework.",
        aptitudes: ["teamwork", "problem-solving", "adaptability", "responsability", "communication"]
    },
    {
        title: "Software Developer",
        company: "Freelancer",
        dateStart: new Date(2023, 1, 15),
        dateEnd: new Date(2024, 3, 16),
        current: false,
        description: "Working as a freelancer developing: web apps (landing pages) using Astro, Typescript and TailwindCSS and a mobile app using Ionic and Typescript.",
        aptitudes: ["teamwork", "communication", "leadership", "autonomy", "time-management"]
    }
]