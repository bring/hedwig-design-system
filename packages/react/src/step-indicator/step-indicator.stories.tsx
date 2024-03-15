/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../badge";
import { StepIndicator } from ".";

const meta: Meta<typeof StepIndicator> = {
  title: "Step indicator",
  component: StepIndicator,
};

export default meta;

type Story = StoryObj<typeof StepIndicator>;

export const Default: Story = {
  args: {
    label: "Progress name",
    totalSteps: 5,
    activeStep: 2,
  },
};

export const Title: Story = {
  args: {
    activeStep: 2,
    label: "Pakke til utlandet",
    lang: "no",
    totalSteps: 5,
    title: "Hvem sender pakken?",
    titleAs: "h2",
  },
};

export const WithBadgeInLabel: Story = {
  args: {
    activeStep: 2,
    label: (
      <>
        Norgespakke™ liten
        <Badge size="smaller" style={{ marginLeft: "var(--hds-spacing-small-3)" }}>
          73,-
        </Badge>
      </>
    ),
    lang: "no",
    totalSteps: 5,
    title: "Størrelse og vekt",
    titleAs: "h2",
  },
};
