import type { TechnologyKey } from "data/technologies";

export interface Project {
    image: ImageMetadata
    title: string
    description: string
    technologies: TechnologyKey[]
    links: Link[]
}
