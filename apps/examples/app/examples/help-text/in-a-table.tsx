import { HStack, HelpText, Text, VStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <div>
      <Text variant="h2" as="h1">
        Å betale
      </Text>
      <VStack asChild gap="16" style={{ minWidth: 300 }} className="hds-text-body-small">
        <dl>
          <HStack justify="space-between">
            <dt>
              <HelpText word="Toll (10,7 %)">Toll</HelpText>
            </dt>
            <dd>62,58 NOK</dd>
          </HStack>

          <HStack justify="space-between">
            <dt>
              <HelpText word="Mva (25 %)">Mva (25 %)</HelpText>
            </dt>
            <dd>161,87 NOK</dd>
          </HStack>

          <HStack justify="space-between">
            <dt>
              <HelpText word="Forenklet fortolling">Forenklet fortolling</HelpText>
            </dt>
            <dd>149,00 NOK</dd>
          </HStack>

          <HStack justify="space-between">
            <dt className="hds-text-body-title">Totalt</dt>
            <dd>373,45 NOK</dd>
          </HStack>
        </dl>
      </VStack>
      <style dangerouslySetInnerHTML={{ __html: `dd {margin:0;}` }} />
    </div>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 1,
};
