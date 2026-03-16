export const CATEGORY_CONFIG = {
  all: {
    label: "Home",
    title: "THE WORLD AND ITS TECHNOLOGY",
    subtitle: "Real-time African news on AgriTech • FinTech • MineTech — built in ZA",
  },
  agri: {
    label: "AgriTech",
    title: "AgriTech News | THE WORLD AND ITS TECHNOLOGY",
    subtitle: "Agriculture & Farming technology Africa",
    query: '(Agric OR Agriculture OR Farming OR Farmers OR Farm) AND (Tech OR AI) NOT Bank',
  },
  fin: {
    label: "FinTech",
    title: "FinTech News | THE WORLD AND ITS TECHNOLOGY",
    subtitle: "Mobile banking, fintech and financial technology in Africa",
    query: '(Financial OR Finance, Banks) AND (Tech OR "Artificial Intelligence")',
  },
  health: {
    label: "HealthTech",
    title: "HealthTech News | THE WORLD AND ITS TECHNOLOGY",
    subtitle: "AI, healthcare and medical technology innovations from Africa",
    query: '"Health Tech" OR "Health AI" OR "AI Health" OR (Technology AND Health)',
  },
} as const;

export type Category = keyof typeof CATEGORY_CONFIG;
