import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";

type TitleProps =
  | {
      /**
       * Optional title of the current step to be shown underneath the step indicator
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
   * 1-indexed number of the current step
   */
  currentStep: number;

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
 * It does not handle step content or navigation, only the visual indication of the current step.
 */
export function StepIndicator({
  currentStep,
  totalSteps,
  className,
  leftLabel,
  rightLabel,
  rightLabelLang,
  title,
  titleAs: TitleComponent,
  ...rest
}: StepIndicatorProps & TitleProps) {
  return (
    <div className={clsx("hds-step-indicator", className as undefined)} {...rest}>
      <div className={clsx("hds-step-indicator__header")}>
        <span className={clsx("hds-step-indicator__left-label")}>{leftLabel}</span>
        <span>
          {rightLabel ?? stepLabelTranslations[rightLabelLang ?? "en"](currentStep, totalSteps)}
        </span>
      </div>

      <div className={clsx("hds-step-indicator__steps")}>
        {Array.from({ length: totalSteps }, (_, i) => (
          <div
            className={clsx("hds-step-indicator__step")}
            data-state={getStepState(i + 1, currentStep)}
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
  (currentStep: number, totalSteps: number) => string
> = {
  no: (currentStep: number, totalSteps: number) => `steg ${currentStep} av ${totalSteps}`,
  en: (currentStep: number, totalSteps: number) => `step ${currentStep} of ${totalSteps}`,
  da: (currentStep: number, totalSteps: number) => `trin ${currentStep} af ${totalSteps}`,
  sv: (currentStep: number, totalSteps: number) => `steg ${currentStep} av ${totalSteps}`,
};

/**
 * Determine the state of a step.
 * 1-indexed
 */
function getStepState(renderedStep: number, currentStep: number) {
  if (renderedStep < currentStep) {
    return "previous";
  }
  if (renderedStep === currentStep) {
    return "active";
  }
  return "next";
}
