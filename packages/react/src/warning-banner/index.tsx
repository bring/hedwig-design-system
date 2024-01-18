import "@postenbring/hedwig-css/dist/fonts.css";
import "@postenbring/hedwig-css/dist/tokens.css";
import "@postenbring/hedwig-css/dist/body.css";

import "@postenbring/hedwig-css/dist/warning-banner.css";

import { WarningBanner, WarningBannerTitle, WarningBannerDescription } from "./warning-banner";

const WarningBannerComponent = WarningBanner as typeof WarningBanner & {
  Title: typeof WarningBannerTitle;
  Description: typeof WarningBannerDescription;
};

WarningBannerComponent.Title = WarningBannerTitle;
WarningBannerComponent.Description = WarningBannerDescription;

WarningBannerComponent.Title.displayName = "WarningBanner.Title"; // Should this be "WarningBanner"? Makes the storybook code samples wrong
WarningBannerComponent.Description.displayName = "WarningBanner.Description"; // Should this be "WarningBanner"? Makes the storybook code samples wrong

export { WarningBannerComponent as WarningBanner }; // Should this include WarningBannerTitle and WarningBannerDescription
