import type { TechnologyKey } from "data/technologies";
import type { CategoryKey } from "data/categories";

export interface Project {
    image: ImageMetadata
    title: string
    description: string
    categories: CategoryKey[]
    technologies: TechnologyKey[]
    links: Link[]
}
