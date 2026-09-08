import { ContactIcon, GlobeIcon, PhoneIcon, UserIcon } from "./icons";

/**
 * Icon per `serviceIcon` key, matching (a subset of) kp-decorator's `iconMap`.
 * Unrecognized keys render as text-only rather than guessing at an icon.
 */
export const serviceIconMap: Record<string, React.ReactNode> = {
  kundeservice: <ContactIcon />,
  person: <UserIcon />,
  internasjonalt: <GlobeIcon />,
  smarttelefon: <PhoneIcon />,
};
