export type AccountPostParams = {
  id: number;
  session_id?: string;
  body: Record<PropertyKey, unknown>;
};
