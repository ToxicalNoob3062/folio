export type Route = "home" | "about" | "work" | "writing";

export type Article = {
  id: string;
  date: string;
  title: string;
  summary: string;
  link: string;
};

export type Project = {
  id: number;
  icon: string;
  title: string;
  description: string;
  links: string[];
};

export type Skill = {
  id: number;
  heading: string;
  images: string[];
};

export type XP = {
  id: number;
  role: string;
  company: string;
  date: string;
  points: string[];
};

export type Gallery = {
  id: number;
  images: string[];
};
