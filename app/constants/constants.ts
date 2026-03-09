export const CATEGORY_CONFIG = {
  all: {
    label: "Home",
    title: "THE WORLD AND ITS TECHNOLOGY",
    subtitle: "Real-time African news on AgriTech • FinTech • MineTech — built in ZA",
  },
  agri: {
    label: "AgriTech",
    title: "AgriTech News | THE WORLD AND ITS TECHNOLOGY",
    subtitle: "Latest Agriculture & Precision Farming technology from South Africa",
    query: 'Agriculture AND "South Africa"',
  },
  fin: {
    label: "FinTech",
    title: "FinTech News | THE WORLD AND ITS TECHNOLOGY",
    subtitle: "Mobile banking, fintech and financial technology in Africa",
    query: '(fintech OR finance OR bank) AND (technology)',
  },
  health: {
    label: "HealthTech",
    title: "HealthTech News | THE WORLD AND ITS TECHNOLOGY",
    subtitle: "AI, healthcare and medical technology innovations from Africa",
    query: '("health" OR healthcare OR medical) AND (AI OR "artificial intelligence")',
  },
} as const;

export type Category = keyof typeof CATEGORY_CONFIG;