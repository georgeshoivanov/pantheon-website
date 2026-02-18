export type SessionCategory = "coaching" | "games" | "lva";

export type Session = {
  id: string;
  title: string;
  category: SessionCategory;
  levelLabel: string; // e.g. "Intermediate", "Mixed ability", "LVA Squad"
  day: string;        // e.g. "Monday"
  time: string;       // e.g. "18:00–20:00"
  audience?: string;  // short line: "Mixed" / "Men" / "Women"
  description: string;
  location?: string;
  sportasUrl?: string; // only for bookable sessions
};

export const sessions: Session[] = [
  // COACHING
  {
    id: "fri-masterclass",
    title: "Intermediate Coaching (Masterclass)",
    category: "coaching",
    levelLabel: "Intermediate",
    day: "Friday",
    time: "19:00–21:00",
    audience: "Mixed",
    location: "Downside Youth Club",
    description:
      "Coached session focused on advanced skill development, structure, and game-relevant reps.",
    sportasUrl: "https://sportas.co.uk/account/pantheonvolley",
  },
  {
    id: "sat-level-up",
    title: "Level Up Series",
    category: "coaching",
    levelLabel: "Mixed ability",
    day: "Saturday",
    time: "16:30–18:30",
    audience: "Mixed",
    location: "In2Sports Canary Wharf",
    description:
      "Progressive coaching for mixed ability athletes—build fundamentals and level up fast.",
    sportasUrl: "https://sportas.co.uk/account/pantheonvolley",
  },

  // GAMES
  {
    id: "wed-intermediate-games",
    title: "Mixed Intermediate Games",
    category: "games",
    levelLabel: "Intermediate",
    day: "Wednesday",
    time: "18:00–20:00",
    audience: "Mixed",
    location: "Leyton Score Leisure Centre",
    description:
      "Competitive 6v6 games. Best if you can pass, set and serve consistently in a team system.",
    sportasUrl: "https://sportas.co.uk/account/pantheonvolley",
  },
  {
    id: "fri-intermediate-games",
    title: "Mixed Intermediate Games",
    category: "games",
    levelLabel: "Intermediate",
    day: "Friday",
    time: "18:00–20:00",
    audience: "Mixed",
    location: "Leyton Score Leisure Centre",
    description:
      "Fast-paced games for intermediate players—great for competitive reps and rhythm.",
    sportasUrl: "https://sportas.co.uk/account/pantheonvolley",
  },
  {
    id: "sun-intermediate-games",
    title: "Mixed Intermediate Games",
    category: "games",
    levelLabel: "Intermediate",
    day: "Sunday",
    time: "12:00–14:00",
    audience: "Mixed",
    location: "Leyton Score Leisure Centre",
    description:
      "Weekend games session—high volume game reps for consistent intermediate players.",
    sportasUrl: "https://sportas.co.uk/account/pantheonvolley",
  },

  // LVA TEAMS
  {
    id: "mon-mens-lva",
    title: "Men’s LVA Team Training",
    category: "lva",
    levelLabel: "LVA Squad",
    day: "Monday",
    time: "18:00–20:00",
    audience: "Men",
    description:
      "Invitation-based squad training for LVA competition. Selection / commitment required.",
  },
  {
    id: "mon-womens-lva",
    title: "Women’s LVA Team Training",
    category: "lva",
    levelLabel: "LVA Squad",
    day: "Monday",
    time: "20:00–22:00",
    audience: "Women",
    description:
      "Invitation-based squad training for LVA competition. Selection / commitment required.",
  },
];
