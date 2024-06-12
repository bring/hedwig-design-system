import "@postenbring/hedwig-css";
import { StyledHtml } from "@postenbring/hedwig-react";

function Example() {
  return (
    <StyledHtml
      unstable_darkmode
      style={{
        background: "var(--hds-dark-mode-colors-obsidian)",
        padding: "var(--hds-spacing-24)",
      }}
    >
      <h1>Pakkebokser</h1>
      <p>
        Pakkeboksene er selvbetjente, og er plassert slik at de er mulig å bruke hele døgnet. Du
        trenger bare mobilen din og Posten-appen for å åpne lukene.
      </p>

      <p>
        Akkurat nå er det satt ut pakkebokser over 1800 steder i landet, og fremover vil det komme
        enda flere.&nbsp;
      </p>

      <p>
        <a href="/motta/fleksibelt/pakkeboks" title="Les mer og finn Pakkeboks">
          Her kan du finne din nærmeste Pakkeboks
        </a>
      </p>

      <h2 className="hds-text-h3">Slik bruker du Pakkeboks:</h2>

      <p>
        For å bruke pakkeboksene må du&nbsp;
        <a href="/posten-app" target="_blank" title="Last ned Posten-appen">
          laste ned Posten-appen
        </a>
        &nbsp;på mobilen din. Med appen kan du:
      </p>

      <ul>
        <li>Åpne luke for å hente pakke</li>
        <li>Reservere og åpne luke når du skal sende pakke</li>
        <li>Velge om du vil ha pakker kun levert i de midterste lukene</li>
        <li>Dele pakkene dine&nbsp;med andre, slik at de kan hente eller sende dem for deg</li>
      </ul>

      <h2>Hente pakker</h2>

      <p>
        Du får varsel i Posten-appen når du har en pakke som skal hentes i Pakkeboks. Slik gjør du:
      </p>

      <ul>
        <li>Stå ved pakkeboksen og åpne appen. Husk å ha på Bluetooth</li>
        <li>Appen kobler til riktig boks, og viser hvilken luke pakken din er i</li>
        <li>Trykk på Åpne luke, og ta ut pakken din.</li>
        <li>Steng luken og lukk appen</li>
      </ul>

      <h2>Velge høyde på luke</h2>

      <p>Slik velger du at du vil ha pakkene kun i midterste luker:</p>

      <ul>
        <li>Du må ha nyeste versjon av Posten-appen</li>
        <li>Åpne appen, og trykk på «Profil»</li>
        <li>Velg «Levering i Pakkeboks», deretter&nbsp;«Luker på midten»</li>
        <li>Lagre valget ditt</li>
      </ul>

      <h2>Sende fra Pakkeboks</h2>

      <p>
        Nå kan du bruke Posten-appen for å reservere luker i pakkeboksen når du skal sende{" "}
        <a
          href="/sende/i-norge/norgespakke/norgespakke-0-5-kg"
          target="_blank"
          title="Les mer om Norgespakke™ liten"
        >
          Norgespakke™ liten
        </a>
        .
      </p>

      <p>Slik reserverer du luke for å sende pakke:</p>

      <ul>
        <li>
          Du må ha Posten-appen for å bestille sending og&nbsp;holde av en&nbsp;luke i pakkeboksen
        </li>
        <li>Velg&nbsp;Norgespakke™ liten, og følg stegene for kjøp av frakt</li>
        <li>Velg innlevering på Posten, og fullfør kjøpet</li>
        <li>
          Du trenger ikke reservere luke rett etter kjøp, dette kan du gjøre innenfor 2 timer før du
          skal sende pakken
        </li>
        <li>Pakken din blir hentet senest neste virkedag</li>
      </ul>

      <h2>Returnere fra Pakkeboks</h2>

      <ul>
        <li>
          Du må ha&nbsp;<a href="https://www.posten.no/posten-app">Posten-appen</a>&nbsp;for å
          reservere en luke.
        </li>
        <li>Velg retur i appen og følg stegene videre</li>
        <li>Fest&nbsp;adresselappen for retur&nbsp;midt på pakken med strekkoden godt synlig</li>
        <li>Luken holdes av i to timer fra du reserverer den.</li>
        <li>Du kan reservere en luke&nbsp;når som helst</li>
      </ul>

      <p>Er det noe du lurer på?</p>

      <p>
        Se flere <a href="/kundeservice/pakkeboks-hjelp">spørsmål og svar om Pakkeboks</a>.
      </p>
    </StyledHtml>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  layout: "none",
  description: "🚧 Experimental darkmode. You need to set the background color yourself.",
  index: 2,
};
