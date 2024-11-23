import type { Project } from "types/project";

import ChatAppImage from "images/projects/ChatAppImage.png";
import RoomSchedulingSoftwareImage from "images/projects/RoomSchedulingSoftwareImage.png";
import MusicalEmotionsImage from "images/projects/MusicalEmotionImage.png";
import HackStemImage from "images/projects/HackStemImage.png";
import ChomElChurroImage from "images/projects/ChomElChurroImage.png";
import CodiconImage from "images/projects/CodiconImage.png";
import GuyWithASwordImage from "images/projects/GuyWithASwordImage.png";
import ColorChallengeImage from "images/projects/ColorChallengeImage.png";

export const projects: Project[] = [
    {
        title: "Chat-App",
        image: ChatAppImage,
        description: "A MVP desktop chat app inspired by WhatsApp and Telegram. Built with C#, .Net MAUI, Entity Framework and SQL Server, enabling profile updates, one-to-one chats  and chat management features.",
        technologies: ["language-csharp", "language-xaml"],
        links: [
            {
                name: "Code",
                url: "https://github.com/JuanPabloGHC/Chat-App"
            }
        ]
    },
    {
        title: "Room Scheduling Software",
        image: RoomSchedulingSoftwareImage,
        description: "A MVP desktop application to manage gaming venues, allowing users to schedule rooms for activities like PC gaming, consoles and VR. Built with C#, .NET MAUI, Entity Framework and SQL Server.",
        technologies: ["language-csharp", "language-xaml"],
        links: [
            {
                name: "Code",
                url: "https://github.com/JuanPabloGHC/Room-Scheduling-Software"
            }
        ]
    },
    {
        title: "Musical Emotions",
        image: MusicalEmotionsImage,
        description: "Emotion-driven Python application recommending music tailored to your mood. Powered by TensorFlow, OpenCV, OpenAI API and Spotify API, it analyzes emotions and suggests music on Spotify.",
        technologies: ["language-python"],
        links: [            
            {
                name: "Code",
                url: "https://github.com/C4ncino/Musical_Emotions"
            }
        ]
    },
    {
        title: "HackStem 4th Edition",
        image: HackStemImage,
        description: "Video game for HackStem 4th Edition designed to raise awareness about environmental issues through gamification. Developed using C# and Unity, aiming to educate kids between 5-12 years old.",
        technologies: ["language-csharp", "unity"],
        links: [
            {
                name: "Code",
                url: "https://github.com/JuanPabloGHC/IBEROHACK"
            }
        ]
    },
    {
        title: "Chom El Churro",
        image: ChomElChurroImage,
        description: "Chom El Churro video game. Developed with C# and Unity for Windows. The player must practice and improve their skills to survive and fight enemies in order to free the Churrerías.",
        technologies: ["language-csharp", "unity"],
        links: [
            {
                name: "Project",
                url: "https://fugaxy-studio.itch.io/chom-el-churro"
            }
        ]
    },
    {
        title: "Versus.py",
        image: CodiconImage,
        description: "Web application to learn Python competing with other people. Developed for Codicon 2024 and using; Frontend: Vite, React and TypeScript. Backend: Python, PostgreSQL and SQLAlchemy.",
        technologies: ["language-python", "language-typescript", "react", "tailwind"],
        links: [
            {
                name: "Code",
                url: "https://github.com/GM-CUBE"
            }
        ]
    },
    {
        title: "Guy with a sword",
        image: GuyWithASwordImage,
        description: "Survival game with a single map where players focus on increasing their score. The objective is just survive as long as possible and trying to beat your high score. Developed with C# and Unity.",
        technologies: ["language-csharp", "unity"],
        links: [
            {
                name: "Code",
                url: "https://github.com/JuanPabloGHC/PrimerJuego"
            },
            {
                name: "Project",
                url: "https://fugaxy-studio.itch.io/guy-with-a-sword"
            }
        ]
    },
   {
        title: "Color Challenge",
        image: ColorChallengeImage,
        description: "Mobile video game. The player must change colors to navigate through obstacles, reaching the required score in each level to increase difficulty and is designed for single-player gameplay.",
        technologies: ["language-csharp", "unity"],
        links: [
            {
                name: "Code",
                url: "https://github.com/JuanPabloGHC/ColorChallenge"
            }
        ]
   } 
]