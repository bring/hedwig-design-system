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
    leftLabel: "Progress name",
    totalSteps: 5,
    activeStep: 2,
  },
};

export const TitleUnderneath: Story = {
  args: {
    activeStep: 2,
    leftLabel: "Pakke til utlandet",
    rightLabelLang: "no",
    totalSteps: 5,
    title: "Hvem sender pakken?",
    titleAs: "h2",
  },
};

export const WithBadgeInLabel: Story = {
  args: {
    activeStep: 2,
    leftLabel: (
      <>
        Norgespakke™ liten
        <Badge size="smaller" style={{ marginLeft: "var(--hds-spacing-small-3)" }}>
          73,-
        </Badge>
      </>
    ),
    rightLabelLang: "no",
    totalSteps: 5,
    title: "Størrelse og vekt",
    titleAs: "h2",
  },
};
