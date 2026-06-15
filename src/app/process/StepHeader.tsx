"use client";

import Link from "next/link";

type StepHeaderProps = {
  currentStep: string;
  totalSteps: number;
};

export default function StepHeader({ currentStep, totalSteps }: StepHeaderProps) {
  const stepNum = parseInt(currentStep);
  const prevStep = stepNum > 1 ? stepNum - 1 : null;
  const nextStep = stepNum < totalSteps ? stepNum + 1 : null;

  return (
    <header className="step-header" id="step-header">
      <div className="step-header__inner">
        {prevStep ? (
          <Link href={`/process/${prevStep}/`} className="step-header__nav" aria-label="Previous step">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </Link>
        ) : (
          <span className="step-header__nav step-header__nav--disabled">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </span>
        )}

        <span className="step-header__counter">
          {currentStep.padStart(2, "0")} / {String(totalSteps).padStart(2, "0")}
        </span>

        <button className="step-header__menu" aria-label="Menu" id="menu-toggle">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </header>
  );
}
