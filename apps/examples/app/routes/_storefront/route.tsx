import "@postenbring/hedwig-css";
import "../_layout/style.css";

import { Navbar, VStack } from "@postenbring/hedwig-react";
import { Outlet, Link as RemixLink, useLoaderData } from "@remix-run/react";

import { tinaField, useTina } from "tinacms/dist/react";

import { LayoutFooter } from "../_layout/footer";
import { LayoutHeader } from "../_layout/header";
import { useTheme } from "../../components/use-theme";
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

function NavbarMenuItems() {
  const { activeTheme } = useTheme();
  const { dataQueryVariables } = useLoaderData<typeof clientLoader>();
  const { data } = useTina(dataQueryVariables);

  return (
    <>
      {data.global.header?.nav?.map((item) => {
        if (!item) return null;

        const icon = item.iconSvg ? (
          <Navbar.ItemIcon>
            <span dangerouslySetInnerHTML={{ __html: item.iconSvg }} />
          </Navbar.ItemIcon>
        ) : item.external ? (
          <Navbar.ItemIcon>
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M13.8438 5.6875C13.3516 5.6875 13 5.33594 13 4.84375C13 4.38672 13.3516 4 13.8438 4H18.9062C19.3633 4 19.75 4.38672 19.75 4.84375V9.90625C19.75 10.3984 19.3633 10.75 18.9062 10.75C18.4141 10.75 18.0625 10.3984 18.0625 9.90625V6.88281L11.0312 13.8789C10.7148 14.2305 10.1875 14.2305 9.87109 13.8789C9.51953 13.5625 9.51953 13.0352 9.87109 12.6836L16.8672 5.6875H13.8438ZM4 7.09375C4 6.03906 4.87891 5.125 5.96875 5.125H9.90625C10.3633 5.125 10.75 5.51172 10.75 5.96875C10.75 6.46094 10.3633 6.8125 9.90625 6.8125H5.96875C5.79297 6.8125 5.6875 6.95312 5.6875 7.09375V17.7812C5.6875 17.957 5.79297 18.0625 5.96875 18.0625H16.6562C16.7969 18.0625 16.9375 17.957 16.9375 17.7812V13.8438C16.9375 13.3867 17.2891 13 17.7812 13C18.2383 13 18.625 13.3867 18.625 13.8438V17.7812C18.625 18.8711 17.7109 19.75 16.6562 19.75H5.96875C4.87891 19.75 4 18.8711 4 17.7812V7.09375Z" />
            </svg>
          </Navbar.ItemIcon>
        ) : null;

        /**
         * { label: "Icon and label", value: "iconAndLabel" },
         * { label: "Only icon on large", value: "onlyIconOnLarge" },
         * { label: "Only icon on mobile", value: "onlyIconOnMobile" },
         * { label: "Only icon", value: "onlyIcon" },
         */
        const label =
          item.iconBehaviour === "onlyIcon" ? (
            ""
          ) : item.iconBehaviour === "onlyIconOnMobile" ? (
            <span className="hidden-before-large">{item.label}</span>
          ) : item.iconBehaviour === "onlyIconOnLarge" ? (
            <span className="hidden-after-large">{item.label}</span>
          ) : (
            item.label
          );

        if (item.external) {
          return (
            <Navbar.LinkItem key={item.href} asChild>
              <a
                data-tina-field={tinaField(item, "label")}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {label}
                {icon}
              </a>
            </Navbar.LinkItem>
          );
        }
        return (
          <Navbar.LinkItem key={item.href} asChild>
            <RemixLink
              data-tina-field={tinaField(item, "label")}
              to={{
                pathname: "/storefront/" + item.href,
                search: activeTheme === "bring" ? "?theme=bring" : "",
              }}
            >
              {label}
              {icon}
            </RemixLink>
          </Navbar.LinkItem>
        );
      })}
    </>
  );
}

export default function Layout() {
  const { dataQueryVariables } = useLoaderData<typeof clientLoader>();
  const { data } = useTina(dataQueryVariables);

  return (
    <VStack style={{ minHeight: "100vh" }}>
      <LayoutHeader
        navbarMenuItems={<NavbarMenuItems />}
        shortHeader={data.global.header?.shortHeader ?? false}
      />
      <div style={{ flexGrow: 1 }}>
        <Outlet />
      </div>
      <div className="hds-mt-80-120" />
      <LayoutFooter />
    </VStack>
  );
}
