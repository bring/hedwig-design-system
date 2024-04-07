// TODO: Get from tokens package
// For now it's fine, since it's still in this monorepo
const spacingSizes = {
  "4": "4",
  "8": "8",
  "12": "12",
  "16": "16",
  "20": "20",
  "24": "24",
  "32": "32",
  "40": "40",
  "48": "48",
  "64": "64",
  "80": "80",
  "120": "120",
} as const;
export type SpacingSizes = keyof typeof spacingSizes;

const responsiveSpacingSizes = {
  "4-8": "4-8",
  "8-12": "8-12",
  "12-16": "12-16",
  "16-20": "16-20",
  "20-24": "20-24",
  "24-32": "24-32",
  "32-40": "32-40",
  "40-48": "40-48",
  "48-64": "48-64",
  "64-80": "64-80",
  "80-120": "80-120",
  "120-160": "120-160",
} as const;
export type ResponsiveSpacingSizes = keyof typeof responsiveSpacingSizes;

export function getSpacingVariable(size: SpacingSizes | ResponsiveSpacingSizes) {
  return `var(--hds-spacing-${size})`;
}
