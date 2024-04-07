/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { StoryObj, Meta } from "@storybook/react";
import { HStack } from "../layout";
import { OrderedList, UnorderedList } from ".";

type Story = StoryObj<typeof UnorderedList>;

const listItems = (
  <>
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
  </>
);

export const UnorderedListStory: Story = {
  name: "Unordered List",
  args: {
    children: listItems,
  },
  render: (props) => (
    <HStack gap="16">
      <UnorderedList {...props} size="small" />
      <UnorderedList {...props} size="medium" />
      <UnorderedList {...props} size="large" />
    </HStack>
  ),
};

export const OrderedListStory: Story = {
  name: "Ordered List",
  args: {
    children: listItems,
  },
  render: (props) => (
    <HStack gap="16">
      <OrderedList {...props} size="small" />
      <OrderedList {...props} size="medium" />
      <OrderedList {...props} size="large" />
    </HStack>
  ),
};

export const NestedLists: Story = {
  render: () => (
    <UnorderedList>
      <li>
        Varer med verdi opp til 3000 kroner der mva. er betalt i utenlandsk nettbutikk
        (VOEC-ordningen): Ingen fortolling.
      </li>
      <li>
        Næringsmidler, særavgiftsvarer og restriksjonsbelagte varer uansett verdi, samt varer med
        verdi over&nbsp;3000 kroner: Fortolling til 270&nbsp;kroner (gjelder fra 01.12.2023).
      </li>
      <li>
        Andre varer med verdi mellom 0 og 3000 kroner blir fortollet basert på verdi av innholdet i
        sendingen. Posten har satt ned prisene for å utføre fortollingen.
        <UnorderedList>
          <li>Verdi på vare 0–500 kroner: 45 kroner</li>
          <li>Verdi på vare&nbsp;500–3000 kroner: 75 kroner</li>
        </UnorderedList>
      </li>
    </UnorderedList>
  ),
};

const meta: Meta<typeof UnorderedList> = {
  title: "List",
  component: UnorderedList,
};
export default meta;
