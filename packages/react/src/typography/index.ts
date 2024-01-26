import "@postenbring/hedwig-css/dist/fonts.css";
import "@postenbring/hedwig-css/dist/tokens.css";
import "@postenbring/hedwig-css/dist/body.css";

import "@postenbring/hedwig-css/dist/typography.css";

import { Typography } from "./typography";

const Text = Typography;
Text.displayName = "Text";

export { Typography, Text };

export type * from "./typography";
