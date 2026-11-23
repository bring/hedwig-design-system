import "@postenbring/hedwig-css";
import { Avatar } from "@postenbring/hedwig-react";

function portrait(background: string) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="${background}"/><circle cx="50" cy="38" r="18" fill="#fff" fill-opacity=".8"/><path d="M14 100c0-22 16-36 36-36s36 14 36 36z" fill="#fff" fill-opacity=".8"/></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function navLogo() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#d6001c"/><path d="M28 72V28h12l20 28V28h12v44H60L40 44v28z" fill="#fff"/></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

const messages = [
  {
    key: "ester",
    avatar: <Avatar>AA</Avatar>,
    sender: "Ester Sæter",
    subject: "Videresender tilbud",
    date: "15.05.26",
  },
  {
    key: "nav",
    avatar: <Avatar variant="logo" src={navLogo()} alt="" />,
    sender: "Nav",
    subject: "Vedtak om endret barnetrygd",
    date: "20.06.26",
  },
  {
    key: "thomas",
    avatar: <Avatar src={portrait("#7a9cc6")} alt="" />,
    sender: "Thomas Lind",
    subject: "Saker til neste møte",
    date: "10.07.26",
  },
];

function Example() {
  return (
    <ul style={{ listStyle: "none", margin: 0, padding: 0, maxWidth: "36rem" }}>
      {messages.map((message) => (
        <li
          key={message.key}
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            padding: "0.75rem 0",
            borderBottom: "1px solid #ddd",
          }}
        >
          {message.avatar}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div className="hds-text-body-title">{message.sender}</div>
            <div>{message.subject}</div>
          </div>
          <time className="hds-text-body-small">{message.date}</time>
        </li>
      ))}
    </ul>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 3,
  description:
    "Avatars in a message list. As the sender is written next to the avatar, the avatar is decorative and needs no accessible name.",
};
