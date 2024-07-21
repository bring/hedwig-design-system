import { Examples } from "../../components/component-examples";
import { FigmaEmbed, FigmaPreviews } from "../../components/figma";
import type { TemplateNames } from "../../../tina/rich-text-templates";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const MDXComponents: Record<TemplateNames, (props: any) => JSX.Element> = {
  Examples: (props: {
    componentName: string;
    exampleName?: string;
    showCodeByDefault?: boolean;
  }) => {
    return (
      <div className="hds-mb-24-32">
        <Examples
          componentName={props.componentName}
          exampleName={props.exampleName}
          showCodeByDefault={props.showCodeByDefault ?? false}
        />
      </div>
    );
  },
  FigmaPreviews: (props: { urls: string[] }) => {
    const urls = props.urls;
    return (
      <div className="hds-mb-24-32">
        <FigmaPreviews urls={urls} />
      </div>
    );
  },
  FigmaEmbed: (props: { url: string; hideBottomBar?: boolean }) => {
    return (
      <div className="hds-mb-24-32">
        <FigmaEmbed
          urlToEmbed={props.url}
          height={1200}
          width="80%"
          hideBottomBar={props.hideBottomBar}
        />
      </div>
    );
  },
};
