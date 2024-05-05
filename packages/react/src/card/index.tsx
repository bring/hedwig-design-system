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

const CardComponent = Card as typeof Card & {
  Media: typeof CardMedia;
  MediaImg: typeof CardMediaImg;
  Body: typeof CardBody;
  BodyHeader: typeof CardBodyHeader;
  BodyHeaderOverline: typeof CardBodyHeaderOverline;
  BodyHeaderTitle: typeof CardBodyHeaderTitle;
  BodyDescription: typeof CardBodyDescription;
  BodyAction: typeof CardBodyAction;
  BodyActionArrow: typeof CardBodyActionArrow;
};
CardComponent.Media = CardMedia;
CardComponent.MediaImg = CardMediaImg;
CardComponent.Body = CardBody;
CardComponent.BodyHeader = CardBodyHeader;
CardComponent.BodyHeaderOverline = CardBodyHeaderOverline;
CardComponent.BodyHeaderTitle = CardBodyHeaderTitle;
CardComponent.BodyDescription = CardBodyDescription;
CardComponent.BodyAction = CardBodyAction;
CardComponent.BodyActionArrow = CardBodyActionArrow;

export {
  CardComponent as Card,
  CardMedia,
  CardMediaImg,
  CardBody,
  CardBodyHeader,
  CardBodyHeaderOverline,
  CardBodyHeaderTitle,
  CardBodyDescription,
  CardBodyAction,
  CardBodyActionArrow,
};

export type * from "./card";
