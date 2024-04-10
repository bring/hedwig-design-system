import {
  Card,
  CardMedia,
  CardMediaImg,
  CardBody,
  CardBodyHeader,
  CardBodyHeaderOverline,
  CardBodyHeaderTitle,
  CardBodyDescription,
  CardBodyAction,
  CardBodyActionArrow,
} from "./card";

const CardMediaComponent = CardMedia as typeof CardMedia & {
  Img: typeof CardMediaImg;
};
CardMediaComponent.Img = CardMediaImg;

const CardBodyHeaderComponent = CardBodyHeader as typeof CardBodyHeader & {
  Overline: typeof CardBodyHeaderOverline;
  Title: typeof CardBodyHeaderTitle;
};
CardBodyHeaderComponent.Overline = CardBodyHeaderOverline;
CardBodyHeaderComponent.Title = CardBodyHeaderTitle;

const CardBodyActionComponent = CardBodyAction as typeof CardBodyAction & {
  Arrow: typeof CardBodyActionArrow;
};
CardBodyActionComponent.Arrow = CardBodyActionArrow;

const CardBodyComponent = CardBody as typeof CardBody & {
  Header: typeof CardBodyHeaderComponent;
  Overline: typeof CardBodyHeaderOverline;
  Title: typeof CardBodyHeaderTitle;
  Description: typeof CardBodyDescription;
  Action: typeof CardBodyActionComponent;
};

CardBodyComponent.Header = CardBodyHeaderComponent;
CardBodyComponent.Description = CardBodyDescription;
CardBodyComponent.Action = CardBodyActionComponent;

const CardComponent = Card as typeof Card & {
  Media: typeof CardMediaComponent;
  Body: typeof CardBodyComponent;
};
CardComponent.Media = CardMediaComponent;
CardComponent.Body = CardBodyComponent;

export {
  CardComponent as Card,
  CardMedia,
  CardMediaImg,
  CardBody,
  CardBodyHeader,
  CardBodyHeaderOverline,
};

export type * from "./card";
