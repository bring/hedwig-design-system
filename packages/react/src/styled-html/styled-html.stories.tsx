/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { StyledHtml } from ".";

const meta: Meta<typeof StyledHtml> = {
  title: "Styled Html",
  component: StyledHtml,
  args: {
    children: (
      <>
        <h1>Hello</h1>
        <h2>Hello</h2>

        <a href="https://www.postenbring.no">Postenbring</a>

        <ul>
          <li>Hei</li>
          <li>Hallo</li>
          <li>Hello</li>
        </ul>

        <ol>
          <li>En</li>
          <li>To</li>
          <li>Tre</li>
        </ol>
      </>
    ),
  },
  argTypes: {
    size: {
      defaultValue: "default",
      options: ["default", "small"],
      control: {
        type: "radio",
      },
      darkmode: {
        defaultValue: false,
        options: [true, false],
        control: {
          type: "radio",
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof StyledHtml>;
export const Default: Story = {
  args: {},
};

export const Darkmode: Story = {
  args: {
    darkmode: true,
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const Small: Story = {
  args: {
    size: "small",
  },
};

export const DarkmodeSmall: Story = {
  args: {
    darkmode: true,
    size: "small",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const ArticleContent: Story = {
  args: {
    children: (
      <>
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

        <h1 className="hds-typography-h3">Slik bruker du Pakkeboks:</h1>

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
          Du får varsel i Posten-appen når du har en pakke som skal hentes i Pakkeboks. Slik gjør
          du:
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
            Du trenger ikke reservere luke rett etter kjøp, dette kan du gjøre innenfor 2 timer før
            du skal sende pakken
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
      </>
    ),
  },
};
