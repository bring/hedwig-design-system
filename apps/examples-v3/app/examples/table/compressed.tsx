import "@postenbring/hedwig-css";
import { Table } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Table
      size="compressed"
      caption="Compressed table"
      description="A short explanation of what this table contains, If you need it."
    >
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
    </Table>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = { index: 1, layout: "centered-fullwidth" };
