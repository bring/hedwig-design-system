import {
  Footer,
  FooterLogo,
  FooterButtonLink,
  FooterLinkSections,
  FooterLinkSection,
} from "./footer";

const FooterComponent = Footer as typeof Footer & {
  Logo: typeof FooterLogo;
  ButtonLink: typeof FooterButtonLink;
  LinkSections: typeof FooterLinkSections;
  LinkSection: typeof FooterLinkSection;
};
FooterComponent.Logo = FooterLogo;
FooterComponent.ButtonLink = FooterButtonLink;
FooterComponent.LinkSections = FooterLinkSections;
FooterComponent.LinkSection = FooterLinkSection;

export {
  FooterComponent as Footer,
  FooterLogo,
  FooterButtonLink,
  FooterLinkSections,
  FooterLinkSection,
};
export type * from "./footer";
