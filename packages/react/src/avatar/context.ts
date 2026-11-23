import { createContext } from "react";

export type AvatarSize = "small" | "medium" | "large" | "xlarge";

/** The size set by an `AvatarGroup`, used by `Avatar`s inside it unless they set their own `size`. */
export const AvatarGroupContext = createContext<AvatarSize | undefined>(undefined);
