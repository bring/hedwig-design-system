/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Chip, ChipGroup } from ".";

function StarOutline() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    >
      <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z" />
    </svg>
  );
}

function StarSolid() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    >
      <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z" />
    </svg>
  );
}

const meta: Meta<typeof Chip> = {
  title: "Chip",
  component: Chip,
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const Preview: Story = {
  tags: ["!dev"],
  args: {
    type: "checkbox",
    variant: "main",
    children: "Sporing",
    disabled: false,
  },
  argTypes: {
    type: {
      control: "select",
      options: ["radio", "checkbox", "removable", "button", "toggle"],
    },
    variant: { control: "inline-radio", options: ["main", "neutral"] },
  },
  render: (args) => {
    if (args.type === "toggle") {
      return <Chip {...args} icon={<StarOutline />} pressedIcon={<StarSolid />} />;
    }
    return <Chip {...args} />;
  },
};

const variants = ["main", "neutral"] as const;

export const AllTypes: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 16 }}>
      {variants.map((variant) => (
        <ChipGroup key={variant}>
          <Chip variant={variant} type="radio" name={`all-${variant}`} defaultChecked>
            Radio
          </Chip>
          <Chip variant={variant} type="checkbox">
            Checkbox
          </Chip>
          <Chip variant={variant} type="removable">
            Removable
          </Chip>
          <Chip variant={variant} type="button">
            Button
          </Chip>
          <Chip variant={variant} type="toggle" icon={<StarOutline />} pressedIcon={<StarSolid />}>
            Toggle
          </Chip>
        </ChipGroup>
      ))}
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 16 }}>
      {variants.map((variant) => (
        <ChipGroup key={variant}>
          <Chip variant={variant} type="radio" disabled>
            Radio
          </Chip>
          <Chip variant={variant} type="checkbox" disabled>
            Checkbox
          </Chip>
          <Chip variant={variant} type="removable" disabled>
            Removable
          </Chip>
          <Chip variant={variant} type="button" disabled>
            Button
          </Chip>
          <Chip variant={variant} type="toggle" icon={<StarOutline />} disabled>
            Toggle
          </Chip>
        </ChipGroup>
      ))}
    </div>
  ),
};

export const Checked: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 16 }}>
      {variants.map((variant) => (
        <ChipGroup key={variant}>
          <Chip variant={variant} type="radio" name={`checked-${variant}`} defaultChecked>
            Radio
          </Chip>
          <Chip variant={variant} type="checkbox" defaultChecked>
            Checkbox
          </Chip>
          <Chip
            variant={variant}
            type="toggle"
            icon={<StarOutline />}
            pressedIcon={<StarSolid />}
            defaultPressed
          >
            Toggle
          </Chip>
        </ChipGroup>
      ))}
    </div>
  ),
};

export const Inline: Story = {
  render: () => (
    <div style={{ maxWidth: 320 }}>
      <ChipGroup layout="inline" aria-label="Services">
        {["Sporing", "Hente i butikk", "Levering på døren", "Pakkeboks", "Postkontor"].map(
          (label) => (
            <Chip key={label} type="checkbox">
              {label}
            </Chip>
          ),
        )}
      </ChipGroup>
    </div>
  ),
};

export const Wrap: Story = {
  render: () => (
    <div style={{ maxWidth: 320 }}>
      <ChipGroup layout="wrap" aria-label="Services">
        {["Sporing", "Hente i butikk", "Levering på døren", "Pakkeboks", "Postkontor"].map(
          (label) => (
            <Chip key={label} type="checkbox">
              {label}
            </Chip>
          ),
        )}
      </ChipGroup>
    </div>
  ),
};

export const RadioGroup: Story = {
  render: () => (
    <ChipGroup role="radiogroup" aria-label="Weight">
      {["0-2 kg", "2-5 kg", "5-10 kg", "10-35 kg"].map((label, index) => (
        <Chip key={label} type="radio" name="weight" value={label} defaultChecked={index === 0}>
          {label}
        </Chip>
      ))}
    </ChipGroup>
  ),
};

export const AsLink: Story = {
  render: () => (
    <Chip type="button" asChild>
      <a href="#tracking">Sporing</a>
    </Chip>
  ),
};
