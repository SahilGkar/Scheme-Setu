export type Language = 'en' | 'hi';

export interface UserProfile {
  age: number | '';
  gender: string;
  income: number | '';
  caste: string;
  state: string;
  occupation: string;
  disability: boolean;
  student: boolean;
}

export interface Scheme {
  id: string;
  name: string;
  provider: string; // e.g., "Central Govt" or "Maharashtra State"
  description: string;
  benefits: string;
  eligibility: string[];
  category: 'Education' | 'Health' | 'Agriculture' | 'Business' | 'Housing' | 'Pension' | 'Other';
  applicationLink?: string;
  probability: number; // 0-100 confidence match
}

export type LoadingState = 'idle' | 'analyzing' | 'searching' | 'compiling' | 'complete' | 'error';
