import "@postenbring/hedwig-tokens/tokens-output/css/fonts.css";
import "@postenbring/hedwig-tokens/tokens-output/css/tokens.css";
import "@postenbring/hedwig-css/dist/base.css";

import "@postenbring/hedwig-css/dist/box.css";
import "@postenbring/hedwig-css/dist/message.css";

import { Message, MessageTitle, MessageDescription } from "./message";

const MessageComponent = Message as typeof Message & {
  Title: typeof MessageTitle;
  Description: typeof MessageDescription;
};

MessageComponent.Title = MessageTitle;
MessageComponent.Description = MessageDescription;

MessageComponent.Title.displayName = "Message";
MessageComponent.Description.displayName = "Message";

export { MessageComponent as Message, MessageTitle, MessageDescription };
