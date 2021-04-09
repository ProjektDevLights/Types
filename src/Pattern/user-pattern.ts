export const USER_PATTERNS = ["plain", "gradient", "runner", "rainbow"] as const;
export type UserPattern = (typeof USER_PATTERNS)[number];