import "@postenbring/hedwig-css/dist/reset.css";
import {
  Box,
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
  Select,
  Link,
  LinkList,
  Message,
  Modal,
  OrderedList,
  PrimaryButton,
  Tab,
  TabContent,
  TabContents,
  TabList,
  Tabs,
  UnorderedList,
  WarningBanner,
} from "@postenbring/hedwig-react";
import { useRef } from "react";

const bringButtonText = "Bring button";

export default function KitchenSink() {
  return (
    <>
      <div>
        <section>
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
        <PrimaryButton>A button</PrimaryButton>
        <h2>Links</h2>
        <Link href="#demo-link" variant="no-underline" size="large">
          A link
        </Link>
        <h2>Descriptive lists</h2>
        <DescriptionList variant="vertical">
          <DescriptionTerm>Something:</DescriptionTerm>
          <DescriptionDetails>To keep your eyes on 👀, vertically</DescriptionDetails>
        </DescriptionList>
        <DescriptionList variant="horizontal">
          <DescriptionTerm>Something:</DescriptionTerm>
          <DescriptionDetails>To keep your eyes on 👀, horizontally</DescriptionDetails>
        </DescriptionList>
        <div>
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

        <section>
          <h2>Box and Message</h2>
          <div
            style={{
              display: "flex",
              maxWidth: 600,
              padding: "var(--hds-spacing-medium-2)",
              flexDirection: "column",
              gap: "var(--hds-spacing-medium-2)",
            }}
          >
            <Box variant="lighter">
              <h3 style={{ margin: 0, font: "var(--hds-typography-body-title)" }}>This is box</h3>
              <p style={{ marginTop: "var(--hds-spacing-small-2)" }}>With some content and stuff</p>
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
          <h2>Dropdown</h2>
          <div
            style={{
              maxWidth: 600,
              padding: "var(--hds-spacing-medium-2)",
            }}
          >
            <Select label="A dropdown" variant="default">
              <option value="" disabled selected hidden>
                Please select
              </option>
              <option value="1">option 1</option>
              <option value="2">option 2</option>
              <option value="3">option 3</option>
            </Select>
          </div>
          <h2>Modal</h2>
          <ModalExample />
        </section>

        <section>
          <h2>Tabs</h2>
          <div>
            <Tabs defaultTab="first">
              <TabList>
                <Tab tabId="first">Tab</Tab>
                <Tab tabId="second">TabTab</Tab>
                <Tab tabId="third">TabTabTab</Tab>
              </TabList>
              <TabContents>
                <TabContent forTabId="first">Single tab</TabContent>
                <TabContent forTabId="second">Two tabs</TabContent>
                <TabContent forTabId="third">
                  <h3>Tabs, tabs everywhere 😱!</h3>
                </TabContent>
              </TabContents>
            </Tabs>
          </div>
        </section>
      </div>
    </>
  );
}

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
          <PrimaryButton fill="outlined" onClick={() => modalRef.current?.close()}>
            Cancel
          </PrimaryButton>
        </div>
      </Modal>
    </>
  );
}
