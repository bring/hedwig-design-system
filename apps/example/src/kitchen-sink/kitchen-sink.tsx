import "@postenbring/hedwig-css/dist/reset.css";
import {
  Box,
  Card,
  DescriptionList,
  Select,
  Link,
  LinkList,
  Message,
  Modal,
  OrderedList,
  PrimaryButton,
  Tabs,
  UnorderedList,
  WarningBanner,
  Checkbox,
} from "@postenbring/hedwig-react";
import { useRef } from "react";
import postenBringImage from "../../static/posten-bring.jpg";

const bringButtonText = "Bring button";

export default function KitchenSink() {
  return (
    <>
      <div>
        <section>
          {/** @deprecated moved to `examples` app */}
          <WarningBanner
            title={"Koronasituasjonen og driften"}
            description={
              <>
                Postutleveringen vil fungere som normalt i de kommunene som har fått strengere
                koronatiltak. Posten utvider tilbudet om hjemlevering i de kommunene som nå blir
                berørt av nedstenging på Vest- og Østlandet. For de som til vanlig har
                kveldslevering mellom kl. 17–21, har vi utvidet kjøretidene til mellom kl. 15–22
                pga. høyt antall pakker. For kontaktløs levering, velg at pakken settes igjen
                utenfor. <br />{" "}
                <Link variant="solid" href="#demo-link">
                  Link to wherever
                </Link>
              </>
            }
          />
        </section>
        <h1>Hello world</h1>
        <h2>Buttons</h2>
        {/** @deprecated moved to `examples` app */}
        <PrimaryButton>A button</PrimaryButton>
        <h2>Links</h2>

        {/** @deprecated moved to `examples` app */}
        <Link href="#demo-link" variant="no-underline" size="large">
          A link
        </Link>

        {/** @deprecated moved to `examples` app */}
        <h2>Descriptive lists</h2>
        <DescriptionList variant="vertical">
          <dt>Something:</dt>
          <dd>To keep your eyes on 👀, vertically</dd>
        </DescriptionList>
        <DescriptionList variant="horizontal">
          <dt>Something:</dt>
          <dd>To keep your eyes on 👀, horizontally</dd>
        </DescriptionList>
        <div>
          {/** @deprecated moved to `examples` app */}
          <h2>Lists</h2>
          <UnorderedList>
            <li>Hello</li>
            <li>World</li>
          </UnorderedList>
          <OrderedList>
            <li>Hello</li>
            <li>World</li>
          </OrderedList>
          <LinkList>
            <li>
              <Link href="#demo-link">Link to wherever</Link>
            </li>
            <li>
              <Link href="https://hedwig.posten.no">Hedwig rocks 🪨</Link>
            </li>
          </LinkList>
          <div className="hds-theme-bring">
            <Box>
              <p>
                To apply Bring theme instead of Posten theme in your app, you can wrap a{" "}
                <code>div</code> around your components:
                <br />
                <code>
                  &lt;div className="hds-theme-bring"&gt;
                  <br />
                  &emsp;&lt;PrimaryButton&gt;
                  {bringButtonText}&lt;/PrimaryButton&gt;
                  <br />
                  &lt;/div&gt;
                </code>
                <br />
                Result:
              </p>
              <PrimaryButton>{bringButtonText}</PrimaryButton>
            </Box>
          </div>
        </div>

        {/** @deprecated moved to `examples` app */}
        <section>
          <h2>Box and Message</h2>
          <div
            style={{
              display: "flex",
              maxWidth: 600,
              padding: "var(--hds-spacing-24)",
              flexDirection: "column",
              gap: "var(--hds-spacing-24)",
            }}
          >
            <Box variant="lighter">
              <h3 style={{ margin: 0, font: "var(--hds-typography-body-title)" }}>This is box</h3>
              <p style={{ marginTop: "var(--hds-spacing-8)" }}>With some content and stuff</p>
            </Box>
            <Message closeable>
              <Message.Title>This is a message</Message.Title>
            </Message>
            <Message variant="attention">
              <Message.Title>Attention, attention</Message.Title>
              <Message.Description>Will the real slim shady please stand up</Message.Description>
            </Message>
          </div>
        </section>

        <section>
          <h2>Select</h2>
          <div
            style={{
              maxWidth: 600,
              padding: "var(--hds-spacing-24)",
            }}
          >
            <Select label="A select" variant="default" defaultValue="">
              <option value="" disabled hidden>
                Please select
              </option>
              <option value="1">option 1</option>
              <option value="2">option 2</option>
              <option value="3">option 3</option>
            </Select>
          </div>
          <h2>Checkbox</h2>
          <div
            style={{
              maxWidth: 600,
              padding: "var(--hds-spacing-24)",
            }}
          >
            <Checkbox title="Check this box" variant="bounding-box">
              Detailed description if needed
            </Checkbox>
          </div>
          <h2>Modal</h2>
          <ModalExample />
        </section>
        <section>
          <CardsExample />
        </section>

        {/** @deprecated moved to `examples` app */}
        <section>
          <h2>Tabs</h2>
          <div>
            <Tabs defaultTab="first">
              <Tabs.List>
                <Tabs.Tab tabId="first">Tab</Tabs.Tab>
                <Tabs.Tab tabId="second">TabTab</Tabs.Tab>
                <Tabs.Tab tabId="third">TabTabTab</Tabs.Tab>
              </Tabs.List>
              <Tabs.Contents>
                <Tabs.Content forTabId="first">Single tab</Tabs.Content>
                <Tabs.Content forTabId="second">Two tabs</Tabs.Content>
                <Tabs.Content forTabId="third">
                  <h3>Tabs, tabs everywhere 😱!</h3>
                </Tabs.Content>
              </Tabs.Contents>
            </Tabs>
          </div>
        </section>
      </div>
    </>
  );
}

/** @deprecated moved to `examples` app */
function ModalExample() {
  const modalRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <PrimaryButton onClick={() => modalRef.current?.showModal()}>Open Modal</PrimaryButton>
      <Modal ref={modalRef}>
        <Modal.Header>Dialog header</Modal.Header>
        <p>
          Dialog header Dialog description - a description of what is about to happen and maybe
          something about the consequences.
        </p>
        <div style={{ display: "flex", gap: 16 }}>
          <PrimaryButton>Main action</PrimaryButton>
          <PrimaryButton fill="outline" onClick={() => modalRef.current?.close()}>
            Cancel
          </PrimaryButton>
        </div>
      </Modal>
    </>
  );
}

/** @deprecated moved to `examples` app */
function CardsExample() {
  return (
    <>
      <h2>Cards</h2>
      <div
        style={{
          margin: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          columnGap: "2.5em",
          rowGap: "2.5em",
        }}
      >
        <Card>
          <Card.Media>
            <Card.Media.Img alt="posten-bring" src={postenBringImage} />
          </Card.Media>
          <Card.Body>
            <Card.Body.Header as="h3">
              <Card.Body.Header.Overline>Theme</Card.Body.Header.Overline>
              <Card.Body.Header.Title as="a" href="#">
                Article 1
              </Card.Body.Header.Title>
            </Card.Body.Header>
            <Card.Body.Description>
              In this example, the whole card is an <code>&lt;a&gt;</code> tag.
            </Card.Body.Description>
            <Card.Body.Action.Arrow as="span" />
          </Card.Body>
        </Card>
        <Card>
          <Card.Media>
            <Card.Media.Img alt="posten-bring" src={postenBringImage} />
          </Card.Media>
          <Card.Body>
            <Card.Body.Header as="h3">
              <Card.Body.Header.Overline>Theme</Card.Body.Header.Overline>
              <Card.Body.Header.Title as={Link} href="#">
                Article 2
              </Card.Body.Header.Title>
            </Card.Body.Header>
            <Card.Body.Description>
              In this example, only the arrow below is a link.
            </Card.Body.Description>
            <Card.Body.Action.Arrow />
          </Card.Body>
        </Card>
        <Card>
          <Card.Media>
            <Card.Media.Img alt="posten-bring" src={postenBringImage} />
          </Card.Media>
          <Card.Body>
            <Card.Body.Header as="h3">
              <Card.Body.Header.Overline>Theme</Card.Body.Header.Overline>
              <Card.Body.Header.Title as="a" href="#">
                Article 3
              </Card.Body.Header.Title>
            </Card.Body.Header>
            <Card.Body.Description>
              In this example, there is a <code>&lt;Link'&gt;</code> component below.
            </Card.Body.Description>
            <Card.Body.Action>Read more</Card.Body.Action>
          </Card.Body>
        </Card>
        <Card className="hds-theme-bring">
          <Card.Media>
            <Card.Media.Img alt="posten-bring" src={postenBringImage} />
          </Card.Media>
          <Card.Body>
            <Card.Body.Header as="h3">
              <Card.Body.Header.Overline>Theme</Card.Body.Header.Overline>
              <Card.Body.Header.Title as="a" href="#">
                Article 4
              </Card.Body.Header.Title>
            </Card.Body.Header>
            <Card.Body.Description>A Bring card.</Card.Body.Description>
            <Card.Body.Action.Arrow as="span" />
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
