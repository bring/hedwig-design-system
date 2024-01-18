import "@postenbring/hedwig-css/dist/fonts.css";
import "@postenbring/hedwig-css/dist/tokens.css";
import "@postenbring/hedwig-css/dist/body.css";

import "@postenbring/hedwig-css/dist/card.css";

import {
  Card,
  CardBody,
  CardMedia,
  CardMediaImg,
  CardBodyOverline,
  CardBodyTitle,
  CardBodyDescription,
  CardBodyAction,
} from "./card";

const CardMediaComponent = CardMedia as typeof CardMedia & {
  Img: typeof CardMediaImg;
};
CardMediaComponent.Img = CardMediaImg;

const CardBodyComponent = CardBody as typeof CardBody & {
  Overline: typeof CardBodyOverline;
  Title: typeof CardBodyTitle;
  Description: typeof CardBodyDescription;
  Action: typeof CardBodyAction;
};
CardBodyComponent.Overline = CardBodyOverline;
CardBodyComponent.Title = CardBodyTitle;
CardBodyComponent.Description = CardBodyDescription;
CardBodyComponent.Action = CardBodyAction;

const CardComponent = Card as typeof Card & {
  Media: typeof CardMediaComponent;
  Body: typeof CardBodyComponent;
};
CardComponent.Media = CardMediaComponent;
CardComponent.Body = CardBodyComponent;

export { CardComponent as Card };

export * from "./card";
