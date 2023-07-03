import { Language } from "@/types/shared";

export type MovieDetailsParams = {
  append_to_response?: string;
  language?: Language;
  id: number;
};
