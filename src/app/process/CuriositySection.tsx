"use client";

import { useState, useEffect, useRef } from "react";

type CuriositySectionProps = {
  fragrance: string;
  sanskritName: string;
  question: string;
  answer: string;
  heroBanner: string;
  heroGradient: string;
  heroOverlay: string;
  ingredients: string[];
};

export default function CuriositySection({
  fragrance,
  sanskritName,
  question,
  answer,
  heroBanner,
  heroGradient,
  heroOverlay,
  ingredients,
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

      {/* Ingredients strip at bottom of hero */}
      <div className="curiosity-hero__ingredients">
        <span className="curiosity-hero__ing-label">Ingredients</span>
        <ul className="curiosity-hero__ing-list">
          {ingredients.map((ing) => (
            <li key={ing} className="curiosity-hero__ing-item">
              <span className="curiosity-hero__ing-dot" />
              {ing}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
