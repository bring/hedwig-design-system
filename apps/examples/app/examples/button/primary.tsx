import "@postenbring/hedwig-css";
import { Button, HStack, VStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <VStack gap="24">
      <h2>Large - Only text</h2>
      <HStack gap="24" wrap align="end">
        <Button>Call to action</Button>
        <Button disabled>Disabled</Button>
      </HStack>
      <h2>Small - Only text</h2>
      <HStack gap="24" wrap align="end">
        <Button size="small">Call to action</Button>
        <Button size="small" disabled>
          Disabled
        </Button>
      </HStack>
      <h2>Large - With leading icon</h2>
      <HStack gap="24" wrap align="end">
        <Button>
          <EnvelopeIcon />
          Call to action
        </Button>
        <Button disabled>
          <EnvelopeIcon />
          Disabled
        </Button>
      </HStack>
      <h2>Small - With leading icon</h2>
      <HStack gap="24" wrap align="end">
        <Button size="small">
          <GlobeIcon />
          Call to action
        </Button>
        <Button size="small" disabled>
          <GlobeIcon />
          Disabled
        </Button>
      </HStack>
      <h2>Large - With only icon</h2>
      <HStack gap="24" wrap align="end">
        <Button>
          <EnvelopeIcon />
        </Button>
        <Button disabled>
          <EnvelopeIcon />
        </Button>
      </HStack>
      <h2>Small - With only icon</h2>
      <HStack gap="24" wrap align="end">
        <Button size="small">
          <GlobeIcon />
        </Button>
        <Button size="small" disabled>
          <GlobeIcon />
        </Button>
      </HStack>
    </VStack>
  );
}

const GlobeIcon = () => (
  <svg
    aria-hidden
    fill="none"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 19.3125C12.2602 19.3125 12.9492 19.0594 13.6734 17.6109C13.9828 16.9887 14.25 16.2328 14.4469 15.375H9.55312C9.75 16.2328 10.0172 16.9887 10.3266 17.6109C11.0508 19.0594 11.7398 19.3125 12 19.3125ZM9.27539 13.6875H14.7246C14.7809 13.1496 14.8125 12.5836 14.8125 12C14.8125 11.4164 14.7809 10.8504 14.7246 10.3125H9.27539C9.21914 10.8504 9.1875 11.4164 9.1875 12C9.1875 12.5836 9.21914 13.1496 9.27539 13.6875ZM9.55312 8.625H14.4469C14.25 7.76719 13.9828 7.01133 13.6734 6.38906C12.9492 4.94063 12.2602 4.6875 12 4.6875C11.7398 4.6875 11.0508 4.94063 10.3266 6.38906C10.0172 7.01133 9.75 7.76719 9.55312 8.625ZM16.4191 10.3125C16.4719 10.8574 16.4965 11.4234 16.4965 12C16.4965 12.5766 16.4684 13.1426 16.4191 13.6875H19.1156C19.2422 13.1461 19.3125 12.5801 19.3125 12C19.3125 11.4199 19.2457 10.8539 19.1156 10.3125H16.4227H16.4191ZM18.4863 8.625C17.734 7.18008 16.5141 6.01992 15.027 5.34141C15.5227 6.24141 15.9164 7.36289 16.173 8.625H18.4898H18.4863ZM7.82344 8.625C8.08008 7.36289 8.47383 6.24492 8.96953 5.34141C7.48242 6.01992 6.2625 7.18008 5.51016 8.625H7.82695H7.82344ZM4.88437 10.3125C4.75781 10.8539 4.6875 11.4199 4.6875 12C4.6875 12.5801 4.7543 13.1461 4.88437 13.6875H7.58086C7.52813 13.1426 7.50352 12.5766 7.50352 12C7.50352 11.4234 7.53164 10.8574 7.58086 10.3125H4.88437ZM15.027 18.6586C16.5141 17.9801 17.734 16.8199 18.4863 15.375H16.173C15.9164 16.6371 15.5227 17.7551 15.027 18.6586ZM8.97305 18.6586C8.47734 17.7586 8.08359 16.6371 7.82695 15.375H5.51016C6.2625 16.8199 7.48242 17.9801 8.96953 18.6586H8.97305ZM12 21C9.61305 21 7.32387 20.0518 5.63604 18.364C3.94821 16.6761 3 14.3869 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12C21 14.3869 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.3869 21 12 21Z"
      fill="currentColor"
    />
  </svg>
);

const EnvelopeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 10.5C4 8.85938 5.3125 7.5 7 7.5H25C26.6406 7.5 28 8.85938 28 10.5V22.5C28 24.1875 26.6406 25.5 25 25.5H7C5.3125 25.5 4 24.1875 4 22.5V10.5ZM6.25 10.5V11.5781L14.3125 18.1875C15.2969 18.9844 16.6562 18.9844 17.6406 18.1875L25.75 11.5781V10.5C25.75 10.125 25.375 9.75 25 9.75H7C6.57812 9.75 6.25 10.125 6.25 10.5ZM6.25 14.4844V22.5C6.25 22.9219 6.57812 23.25 7 23.25H25C25.375 23.25 25.75 22.9219 25.75 22.5V14.4844L19.0938 19.9219C17.2656 21.4219 14.6875 21.4219 12.8594 19.9219L6.25 14.4844Z"
      fill="currentColor"
    />
  </svg>
);

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 0,
};
