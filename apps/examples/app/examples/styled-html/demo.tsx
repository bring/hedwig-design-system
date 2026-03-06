import "@postenbring/hedwig-css";
import { Container, StyledHtml } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Container>
      <StyledHtml style={{ padding: "var(--hds-spacing-24)" }}>
        <h1>Weights and dimensions for domestic shipments</h1>
        <p>
          Posten has different maximum and minimum dimensions for letters and parcels that are to be
          sent. This is because the items must go through various mechanical processing stages
          before they reach the recipient. Measure and weigh your item so that we can sort it as
          quickly as possible. You can frank your items with stamps, write a code on them, or print
          an address label.
        </p>
        <h2>Mail franked with stamps or code</h2>

        <p>Find a measuring tape or ruler and a baking scale or bathroom scale.</p>

        <h3>Maximum size for letters with stamps</h3>

        <ul>
          <li>Length + width + thickness: 90 cm</li>
          <li>Length: 60 cm</li>
          <li>Weight: 2 kilos</li>
        </ul>

        <p>If the letter is larger or heavier than this, it can be sent as Norgespakke™.</p>

        <p>
          NB: If the letter is more than 35.3 cm long or more than 25 cm wide, it is priced as more
          than 7 cm thick.{" "}
          <a href="content://aa151440-df95-4b07-be5c-4de700cf0c98">See the price list for 2026</a>.
        </p>

        <h3>Maximum size for letters with a digital stamp</h3>

        <ul>
          <li>Maximum weight: 2 kilos</li>
          <li>Maximum size: 35,3 x 25 x 2&nbsp;cm</li>
          <li>Minimum size: 9 x 14 cm</li>
        </ul>

        <p>
          For larger shipments, <a href="http://www.posten.no">see Norgespakke™</a>.
        </p>

        <h3>Minimum letter size</h3>

        <p>The minimum size for all letters&nbsp; 9 x 14 cm.</p>

        <h3>Maximum size for roll</h3>

        <ul>
          <li>Length: 90 cm</li>
          <li>Length + double diameter: 104 cm</li>
          <li>Minimum roll size</li>
          <li>Length: 10 cm</li>
          <li>Length + double diameter: 17 cm</li>
        </ul>

        <p>
          <a href="http://www.posten.no">Read more about letters in Norway.</a>
        </p>

        <h2>Parcels</h2>

        <h3>Norgespakke™ small</h3>

        <ul>
          <li>Maximum weight: up to 5 kg</li>
          <li>Maximum size: 35,3 x 25 x 12 cm</li>
          <li>Minimum size: 9 x 14 cm</li>
        </ul>

        <p>
          <a href="http://www.posten.no">Read more about Norgespakke™ small.</a>
        </p>

        <h3>Norgespakke™ large</h3>

        <ul>
          <li>Maximum weight: 35 kg per parcel</li>
          <li>Maximum size: 120 x 60 x 60 cm</li>
          <li>Minimum size: 23 x 13 x 1 cm</li>
        </ul>

        <p>
          If the parcel is more than 120 cm long, has a width of more than 60 cm and/or a height of
          more than 60 cm, there is a handling surcharge of 186.– kroner.
        </p>

        <p>The parcel can then be up to 240 cm long and length + circumference up to 360 cm.</p>

        <p>
          <a href="http://www.posten.no">Read more about Norgespakke™ large.</a>
        </p>

        <h3>Norgespakke™ express</h3>

        <ul>
          <li>Maximum weight: 35 kg per parcel</li>
          <li>Maximum size: 120 x 60 x 60 cm</li>
          <li>Minimum size: 23 x 13 x 1 cm</li>
        </ul>

        <p>
          <a href="http://www.posten.no">Read more about Norgespakke™ express.</a>
        </p>
      </StyledHtml>
    </Container>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 0,
};
