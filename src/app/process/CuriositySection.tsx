"use client";

import { useEffect, useRef } from "react";

type CuriositySectionProps = {
  fragrance: string;
  sanskritName: string;
  answer: string;
  heroBanner: string;
  heroIllustration?: string;
  heroIllustrationDesktop?: string;
  heroGradient: string;
  heroOverlay: string;
};

export default function CuriositySection({
  fragrance,
  sanskritName,
  answer,
  heroBanner,
  heroIllustration,
  heroIllustrationDesktop,
  heroGradient,
  heroOverlay,
}: CuriositySectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("curiosity-hero--visible");
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const bgStyle: React.CSSProperties = heroBanner
    ? { backgroundImage: `url(${heroBanner})` }
    : { background: heroGradient };

  return (
    <section
      className="curiosity-hero"
      ref={sectionRef}
      id="curiosity-section"
      style={bgStyle}
    >
      {/* Gradient overlay */}
      <div className="curiosity-hero__overlay" style={{ background: heroOverlay }} />

      {/* Mobile illustration */}
      {heroIllustration && (
        <div 
          className="curiosity-hero__illustration curiosity-hero__illustration--mobile" 
          style={{ backgroundImage: `url('${heroIllustration}')` }} 
        />
      )}

      {/* Desktop illustration */}
      {heroIllustrationDesktop && (
        <div 
          className="curiosity-hero__illustration curiosity-hero__illustration--desktop" 
          style={{ backgroundImage: `url('${heroIllustrationDesktop}')` }} 
        />
      )}

      <div className="curiosity-hero__content">
        {/* Sanskrit name */}
        <p className="curiosity-hero__sanskrit">{sanskritName}</p>

        {/* Fragrance name */}
        <h1 className="curiosity-hero__fragrance">{fragrance}</h1>

        {/* Question */}
        <p className="curiosity-hero__question">What&apos;s the story behind this stick?</p>

        {/* Answer */}
        <div className="curiosity-hero__answer-static">
          <div className="curiosity-hero__answer-line" />
          <p>{answer}</p>
        </div>
      </div>
    </section>
  );
}
