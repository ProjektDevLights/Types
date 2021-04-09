export const FAKE_PATTERNS = ["waking", "blinking", "fading", "custom"] as const;
export type FakePattern = (typeof FAKE_PATTERNS)[number];