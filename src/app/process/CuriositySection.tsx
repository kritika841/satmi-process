"use client";

import { useState, useEffect, useRef } from "react";

type CuriositySectionProps = {
  fragrance: string;
  sanskritName: string;
  question: string;
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
  question,
  answer,
  heroBanner,
  heroIllustration,
  heroIllustrationDesktop,
  heroGradient,
  heroOverlay,
}: CuriositySectionProps) {
  const [isRevealed, setIsRevealed] = useState(false);
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

        {/* Curiosity label */}
        <span className="curiosity-hero__eyebrow">Curiosity Corner</span>

        {/* Question */}
        <p className="curiosity-hero__question">{question}</p>

        {/* Reveal toggle */}
        <div className="curiosity-hero__reveal-area">
          {!isRevealed ? (
            <button
              className="curiosity-hero__btn"
              onClick={() => setIsRevealed(true)}
              id="curiosity-toggle"
            >
              <span className="curiosity-hero__btn-text">Tap to reveal the answer</span>
              <span className="curiosity-hero__btn-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </button>
          ) : (
            <div className="curiosity-hero__answer" id="curiosity-answer">
              <div className="curiosity-hero__answer-line" />
              <p>{answer}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
