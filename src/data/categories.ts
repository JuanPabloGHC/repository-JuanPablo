// Project categories used by the projects filter and the card labels.
export const categories = {
    web: "Web",
    mobile: "Mobile",
    desktop: "Desktop",
    games: "Games",
    ai: "AI / Data",
} as const;

export type CategoryKey = keyof typeof categories;
