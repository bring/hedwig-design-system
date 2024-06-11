import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { forwardRef } from "react";

type TitleProps =
  | {
      /**
       * Optional title of the active step to be shown underneath the step indicator
       *
       * Use `titleAs` to set the correct heading level
       */
      title: React.ReactNode;
      titleAs: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    }
  | {
      title?: undefined;
      titleAs?: undefined;
    };

interface StepIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  /*
   * 1-indexed number of the active step
   */
  activeStep: number;

  /**
   * 1-indexed number of steps
   */
  totalSteps: number;

  /**
   * Label on the left side above the steps
   */
  label: React.ReactNode;

  /**
   * Language for the "step x of y" label, default is "en"
   */
  lang?: "no" | "en" | "da" | "sv";
}

export const StepIndicator = forwardRef<HTMLDivElement, StepIndicatorProps & TitleProps>(
  (
    {
      activeStep,
      totalSteps,
      className,
      label,
      lang = "en",
      title,
      titleAs: TitleComponent,
      ...rest
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={clsx("hds-step-indicator", className as undefined)}
        lang={lang}
        {...rest}
      >
        <div className={clsx("hds-step-indicator__header")}>
          <span className={clsx("hds-step-indicator__left-label")}>{label}</span>
          <span>{stepLabelTranslations[lang](activeStep, totalSteps)}</span>
        </div>

        <div className={clsx("hds-step-indicator__steps")}>
          {Array.from({ length: totalSteps }, (_, i) => (
            <div
              className={clsx("hds-step-indicator__step")}
              data-state={getStepState(i + 1, activeStep)}
              key={i}
            />
          ))}
        </div>

        {title ? (
          <TitleComponent className={clsx("hds-step-indicator__title")}>{title}</TitleComponent>
        ) : null}
      </div>
    );
  },
);
StepIndicator.displayName = "StepIndicator";

/**
 * Translated texts for the `step x of y` label.
 */
const stepLabelTranslations: Record<
  "no" | "en" | "da" | "sv",
  (activeStep: number, totalSteps: number) => string
> = {
  no: (activeStep: number, totalSteps: number) => `steg ${activeStep} av ${totalSteps}`,
  en: (activeStep: number, totalSteps: number) => `step ${activeStep} of ${totalSteps}`,
  da: (activeStep: number, totalSteps: number) => `trin ${activeStep} af ${totalSteps}`,
  sv: (activeStep: number, totalSteps: number) => `steg ${activeStep} av ${totalSteps}`,
};

/**
 * Determine the state of a step.
 * 1-indexed
 */
function getStepState(renderedStep: number, activeStep: number) {
  if (renderedStep < activeStep) {
    return "previous";
  }
  if (renderedStep === activeStep) {
    return "active";
  }
  return "next";
}
