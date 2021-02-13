import { FakePattern, FAKE_PATTERNS } from "./fake-pattern";
import { UserPattern, USER_PATTERNS } from "./user-pattern";
export const PATTERNS = [...FAKE_PATTERNS, ...USER_PATTERNS]
export type Pattern = FakePattern | UserPattern;