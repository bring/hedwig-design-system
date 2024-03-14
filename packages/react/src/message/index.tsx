import { Message, MessageTitle, MessageDescription } from "./message";

const MessageComponent = Message as typeof Message & {
  Title: typeof MessageTitle;
  Description: typeof MessageDescription;
};

MessageComponent.Title = MessageTitle;
MessageComponent.Description = MessageDescription;

export { MessageComponent as Message };
