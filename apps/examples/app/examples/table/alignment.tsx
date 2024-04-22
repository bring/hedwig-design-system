import { Table } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Table>
      <thead>
        <tr>
          <th style={{ textAlign: "left" }}>Left aligned</th>
          <th style={{ textAlign: "center" }}>Center aligned</th>
          <th style={{ textAlign: "right" }}>Right aligned</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ textAlign: "left" }}>Left</td>
          <td style={{ textAlign: "center" }}>Center</td>
          <td style={{ textAlign: "right" }}>Right</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 3,
  description:
    "Set the <code>text-align</code> css property to align the content of the table cells.",
  layout: "centered-fullwidth",
};
