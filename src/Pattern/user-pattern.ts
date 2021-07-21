export const USER_PATTERNS = [
  "plain",
  "gradient",
  "fading",
  "runner",
  "rainbow",
] as const;
export type UserPattern = typeof USER_PATTERNS[number];
