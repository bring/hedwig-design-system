import "@postenbring/hedwig-css/dist/fonts.css";
import "@postenbring/hedwig-css/dist/tokens.css";
import "@postenbring/hedwig-css/dist/body.css";

import "@postenbring/hedwig-css/dist/typography.css";

import { Typography } from "./typography";

export { Typography };

/**
 * ## Alias to @see Typography
 *
 * Only one component will remain
 */
const Text = Typography;
Text.displayName = "Text";
export { Text };

export type * from "./typography";
