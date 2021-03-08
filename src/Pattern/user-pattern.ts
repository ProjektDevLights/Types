export const USER_PATTERNS = ["plain", "gradient", "runner"] as const;
export type UserPattern = (typeof USER_PATTERNS)[number];