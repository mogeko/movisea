import { Language } from "@/types/shared";

export type AccountGetParams = {
  id: number;
  language?: Language;
  page?: number;
  sort_by?: "created_at.asc" | "created_at.desc";
  session_id?: string;
};
