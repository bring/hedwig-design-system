import "@postenbring/hedwig-css";
import { Alert, Badge, Button, Container, HStack, VStack, Text } from "@postenbring/hedwig-react";

function Example() {
  return (
    <>
      <body data-color-scheme="light" style={{ paddingTop: "32px", paddingBottom: "32px" }}>
        <Container>
          <Text as="h2" variant="h2" className="hds-mb-16-20" style={{ width: "65%" }}>
            Last ned Posten-appen
          </Text>
          <Text as="p" variant="body" className="hds-mb-16-20" style={{ width: "65%" }}>
            Posten-appen er en av Norges mest brukte og godt likte apper med over 2 millioner
            brukere.{" "}
          </Text>
          <Button className="hds-mb-16-20">Last ned posten appen</Button>
          <Text as="h2" variant="h2" className="hds-mb-16-20" style={{ width: "65%" }}>
            Velg favoritt-hentested
          </Text>
          <Text as="p" variant="body" className="hds-mb-48-64" style={{ width: "65%" }}>
            Nå kan du bruke appen til å velge ditt foretrukne hentested. Det vil si at om du handler
            hos en nettbutikk som ikke lar deg velge hvor du vil ha pakken, så blir pakken levert
            til den pakkeboksen eller Post i Butikk som du setter som favoritt. Dette gjør du enkelt
            ved å åpne Posten-appen, gå inn på profilen din og velge ditt favoritt-hentested.
          </Text>
        </Container>
        <Container variant="slim" className="hds-mb-48-64">
          <VStack gap="24-32" className="hds-mb-48-64">
            <Alert variant="info">
              <Alert.Title>Information</Alert.Title>
              <Alert.Description>Some not that important information.</Alert.Description>
            </Alert>
            <Alert variant="success">
              <Alert.Title>Success</Alert.Title>
              <Alert.Description>
                Something went according to expectations. Thats great!
              </Alert.Description>
            </Alert>
            <Alert variant="warning">
              <Alert.Title>Warning</Alert.Title>
              <Alert.Description>
                Something did not go as expected. Yellow always means something negative.
              </Alert.Description>
            </Alert>
            <Alert variant="error">
              <Alert.Title>Error</Alert.Title>
              <Alert.Description>Something has gone wrong.</Alert.Description>
            </Alert>
          </VStack>
        </Container>
        <Container>
          <HStack gap="16-20" className="hds-mb-48-64">
            <Badge variant="lighter">Lighter</Badge>
            <Badge variant="darker">Darker</Badge>
            <Badge variant="white">White</Badge>
            <Badge variant="info">Info</Badge>
            <Badge variant="neutral">Neutral</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
          </HStack>
        </Container>
      </body>
    </>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  index: 2,
  description:
    "Using <i><b>data-color-scheme</b></i> to control theme (light, dark, auto). The <i><b>data-color-scheme</b></i> attribute can be added to an element — typically the html or body tag — to switch between light mode, dark mode, or an automatic mode based on the user’s system preferences.</p>",
};
