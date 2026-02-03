export type User = {
  id: string;
  name: string;
  headline: string;
  avatarUrl: string;
  avatarHint: string;
  location: string;
  summary: string;
  industry: string;
  skills: string[];
  experience: Experience[];
  education: Education[];
  connections: string[];
};

export type Experience = {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
};

export type Education = {
  id: string;
  school: string;
  degree: string;
  fieldOfStudy: string;
  startYear: number;
  endYear: number | null;
};

export type Post = {
  id: string;
  authorId: string;
  content: string;
  imageUrl?: string;
  imageHint?: string;
  createdAt: string;
  likes: number;
  comments: number;
};
