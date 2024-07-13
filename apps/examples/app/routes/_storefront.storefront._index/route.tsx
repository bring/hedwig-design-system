import { Box, Card, Grid, Link, VStack } from "@postenbring/hedwig-react";
import { client } from "../../../tina/__generated__/client";

export async function clientLoader() {
  const { data, query, variables } = await client.queries.global({
    relativePath: "global.json",
  });

  return {
    dataQueryVariables: {
      data,
      query,
      variables,
    },
  };
}

export default function Component() {
  return (
    <div className="hds-mt-48-64 hds-mb-32-40">
      <VStack gap="40-48">
        {/* Brand slogan */}
        <Grid center span={{ initial: 12, small: 8 }}>
          <div>
            <h1 className="hds-text-h1">Hedwig Design System</h1>
            <p className="hds-mt-40-48">
              Hedwig offers everything you&apos;ll need when creating accessible and cohesive
              digital services and experiences in line with the Posten and Bring brand. Fast and
              easy!
            </p>
          </div>
        </Grid>

        {/* Nav */}
        <Grid gap="20-24" span={{ initial: 12, medium: 4 }}>
          <Card>
            <Card.Body>
              <Card.BodyHeader as="h2">
                <Card.BodyHeaderTitle asChild>
                  <Link href="getting-started">Getting started 🚀</Link>
                </Card.BodyHeaderTitle>
              </Card.BodyHeader>
            </Card.Body>
          </Card>
          <Box>Heyo</Box>
          <Box>Heyo</Box>
        </Grid>
      </VStack>
    </div>
  );
}
