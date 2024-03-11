import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";

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
  leftLabel: React.ReactNode;

  /**
   * Override the label on the right side above the steps
   * Default is "step x of y". use {@link rightLabelLang} to change language
   */
  rightLabel?: React.ReactNode;

  /**
   * Language for the "step x of y" label, default is "en"
   */
  rightLabelLang?: "no" | "en" | "da" | "sv";
}

/**
 * Indicate a step in a process.
 *
 * It does not handle step content or navigation, only the visual indication of the active step.
 */
export function StepIndicator({
  activeStep,
  totalSteps,
  className,
  leftLabel,
  rightLabel,
  rightLabelLang = "en",
  title,
  titleAs: TitleComponent,
  ...rest
}: StepIndicatorProps & TitleProps) {
  return (
    <div className={clsx("hds-step-indicator", className as undefined)} {...rest}>
      <div className={clsx("hds-step-indicator__header")}>
        <span className={clsx("hds-step-indicator__left-label")}>{leftLabel}</span>
        <span lang={rightLabel ? undefined : rightLabelLang}>
          {rightLabel ?? stepLabelTranslations[rightLabelLang](activeStep, totalSteps)}
        </span>
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
}

/**
 * Default translated text for the right label.
 * This is probably a common use case, so we provide it as a default, with to use with the most common languages.
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
