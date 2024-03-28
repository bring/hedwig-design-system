import { Link, WarningBanner } from "@postenbring/hedwig-react";

function Example() {
  return (
    <WarningBanner
      title={"Koronasituasjonen og driften"}
      description={
        <>
          Postutleveringen vil fungere som normalt i de kommunene som har fått strengere
          koronatiltak. Posten utvider tilbudet om hjemlevering i de kommunene som nå blir berørt av
          nedstenging på Vest- og Østlandet. For de som til vanlig har kveldslevering mellom kl.
          17–21, har vi utvidet kjøretidene til mellom kl. 15–22 pga. høyt antall pakker. For
          kontaktløs levering, velg at pakken settes igjen utenfor. <br />
          <br />
          <Link variant="solid" href="#demo-link">
            Mer om Postens coronatiltak
          </Link>
        </>
      }
    />
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  layout: "none",
};
