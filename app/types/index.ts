// types/index.ts

export type HealthProfile = {
  diabetes: boolean;
  bp: boolean;
  cholesterol?: boolean;
};

export type Food = {
  id: string;
  name: string;
  price: number;
  healthSafe: boolean;
  tags: string[];
};

export type Restaurant = {
  id: string;
  name: string;
  rating: number;
  distance: string;
};
