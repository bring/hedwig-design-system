import "@postenbring/hedwig-css";
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
              <HelpText helpText="Toll er en avgift på importerte varer som beløper seg til 10,7 % av vareverdien.">
                Toll (10,7 %)
              </HelpText>
            </dt>
            <dd>62,58 NOK</dd>
          </HStack>

          <HStack justify="space-between">
            <dt>
              <HelpText
                helpText="Merverdiavgift (MVA) er en skatt på verdien som legges til varer og tjenester i
                Norge med en sats på 25 %."
              >
                Mva (25 %)
              </HelpText>
            </dt>
            <dd>161,87 NOK</dd>
          </HStack>

          <HStack justify="space-between">
            <dt>
              <HelpText
                helpText="Forenklet fortolling er en enkel og rask tollklarering prosess for importerte varer.
                Den reduserer byråkrati og tid, og sparer importører både penger og administrativt
                arbeid."
              >
                Forenklet fortolling
              </HelpText>
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
  index: 2,
};
