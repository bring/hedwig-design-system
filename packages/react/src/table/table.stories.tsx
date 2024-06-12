/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Table } from ".";

type Story = StoryObj<typeof Table>;

const meta: Meta<typeof Table> = {
  title: "Table",
  component: Table,
};
export default meta;

export const Preview: Story = {
  args: {
    caption: "Default table",
    description: "A short explanation of what this table contains, If you need it.",

    children: (
      <>
        <thead>
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
            <th>Header 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Row 1, Cell 1</td>
            <td>Row 1, Cell 2</td>
            <td>Row 1, Cell 3</td>
          </tr>
          <tr>
            <td>Row 2, Cell 1</td>
            <td>Row 2, Cell 2</td>
            <td>Row 2, Cell 3</td>
          </tr>
        </tbody>
      </>
    ),
  },
};
