"use client";

import type { ProcessPage } from "@/lib/processes";
import CuriositySection from "./CuriositySection";
import JourneyStep from "./JourneyStep";
import SpecialStep from "./SpecialStep";
import ArtisansSection from "./ArtisansSection";

type ProcessPageTemplateProps = {
  page: ProcessPage;
  totalSteps: number;
};

export default function ProcessPageTemplate({ page }: ProcessPageTemplateProps) {
  const lastJourneyNum = page.journeySteps.length;
  const { theme } = page;

  // Inject per-page CSS variables on the root element
  const cssVars = {
    "--page-bg": theme.pageBg,
    "--page-accent": theme.accent,
    "--page-accent-soft": theme.accentSoft,
    "--page-eyebrow": theme.eyebrow,
    "--hero-text": theme.heroText,
    "--header-bg": theme.headerBg,
  } as React.CSSProperties;

  return (
    <main
      className="process-page"
      id={`process-page-${page.step}`}
      style={cssVars}
    >
      {/* Themed header */}
      <header className="global-header">
        <a href="https://satmi.in/">
          <img src="/images/logo.png" alt="Satmi" />
        </a>
      </header>

      {/* 1. Hero / Curiosity Section */}
      <CuriositySection
        fragrance={page.fragrance}
        sanskritName={page.sanskritName}
        heroBanner={page.heroBanner}
        heroIllustration={page.heroIllustration}
        heroIllustrationDesktop={page.heroIllustrationDesktop}
        heroGradient={theme.heroGradient}
        heroOverlay={theme.heroOverlay}
      />

      {/* 2. Ingredient Journey */}
      <section className="journey" id="journey-section">
        <p className="journey__eyebrow">{page.journeySectionTitle}</p>
        <div className="journey__timeline">
          {page.journeySteps.map((step) => (
            <JourneyStep
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              caption={step.caption}
              sceneImage={step.sceneImage}
              ingredientImage={step.ingredientImage}
              isLast={false}
            />
          ))}
        </div>
      </section>

      {/* 3. Mixing Step */}
      <section className="special-steps" id="special-steps-section">
        <SpecialStep
          stepNumber={lastJourneyNum + 1}
          title={page.mixingStep.title}
          description={page.mixingStep.description}
          image={page.mixingStep.image}
          variant="mixing"
        />

        <div className="special-steps__connector" />

        {/* 4. Drying Step */}
        <SpecialStep
          stepNumber={lastJourneyNum + 2}
          title={page.dryingStep.title}
          description={page.dryingStep.description}
          image={page.dryingStep.image}
          variant="packaging"
        />
      </section>

      {/* 5. Closing Text */}
      <section className="closing" id="closing-section">
        <div className="closing__icon">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path
              d="M16 4C16 4 8 8 8 16C8 20 10 24 16 28C22 24 24 20 24 16C24 8 16 4 16 4Z"
              fill="none"
              stroke="var(--page-accent)"
              strokeWidth="1.5"
            />
            <path d="M16 10V24" stroke="var(--page-accent)" strokeWidth="1.2" />
            <path d="M16 14L12 11" stroke="var(--page-accent)" strokeWidth="1" />
            <path d="M16 18L20 15" stroke="var(--page-accent)" strokeWidth="1" />
          </svg>
        </div>
        <h2 className="closing__headline">{page.closingText.headline}</h2>
        <p className="closing__body">{page.closingText.body}</p>
      </section>

      {/* 6. Artisans */}
      <ArtisansSection
        headline={page.artisans.headline}
        subheadline={page.artisans.subheadline}
        groupImage={page.artisans.groupImage}
      />
    </main>
  );
}
