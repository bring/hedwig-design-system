import "@postenbring/hedwig-css";
import { Container, SearchWrapper, VStack, Input, Button } from "@postenbring/hedwig-react";
import { XmarkIcon } from "../../../assets/icon-examples";

function onSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
}

const Example = () => (
  <Container variant="slim">
    <form onSubmit={onSubmit} style={{ padding: "var(--hds-spacing-20-24) 0" }}>
      <VStack gap="16-20">
        <SearchWrapper>
          <Input name="name" />
          <Button>Search</Button>
          <Button variant="tertiary" icon>
            <XmarkIcon />
          </Button>
        </SearchWrapper>
        <SearchWrapper>
          <Input label="Søk her" name="name" />
          <Button>Search</Button>
        </SearchWrapper>
        <SearchWrapper>
          <Input
            label="Søk her"
            name="name"
            validationMessage="Noe gikk galt"
            data-color="error"
            aria-invalid
          />
          <Button>Search</Button>
        </SearchWrapper>
        <SearchWrapper>
          <Input name="name" validationMessage="Noe gikk galt" data-color="error" aria-invalid />
          <Button>Search</Button>
        </SearchWrapper>
      </VStack>
    </form>
  </Container>
);

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  index: 0,
  layout: "centered-fullwidth",
};
