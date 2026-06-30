import "@postenbring/hedwig-css";
import { Select, HStack } from "@postenbring/hedwig-react";

const Example = () => (
  <HStack justify="center" gap="24" wrap className="hds-mt-16 hds-mb-16">
    <Select label="Label" defaultValue="" validationMessage="Information" data-color="info">
      <option disabled hidden value="">
        Please select
      </option>
      <option value="parcel">Parcel</option>
      <option value="freight">Freight</option>
      <option value="express">Express delivery</option>
    </Select>
    <Select label="Label" defaultValue="" validationMessage="Great success" data-color="success">
      <option disabled hidden value="">
        Please select
      </option>
      <option value="parcel">Parcel</option>
      <option value="freight">Freight</option>
      <option value="express">Express delivery</option>
    </Select>
    <Select label="Label" defaultValue="" validationMessage="Warning message" data-color="warning">
      <option disabled hidden value="">
        Please select
      </option>
      <option value="parcel">Parcel</option>
      <option value="freight">Freight</option>
      <option value="express">Express delivery</option>
    </Select>
  </HStack>
);

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  index: 4,
  layout: "centered-fullwidth",
};
