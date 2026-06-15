"use client";

import { useEffect, useRef } from "react";

type JourneyStepProps = {
  number: number;
  title: string;
  description: string;
  caption?: string;
  sceneImage: string;
  ingredientImage: string;
  isLast: boolean;
};

export default function JourneyStep({
  number,
  title,
  description,
  caption,
  sceneImage,
  ingredientImage,
  isLast,
}: JourneyStepProps) {
  const stepRef = useRef<HTMLDivElement>(null);
  const ingredientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = stepRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("journey-step--visible");
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Separate observer for ingredient zoom — triggers when circle enters viewport
  useEffect(() => {
    const el = ingredientRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("journey-step__ingredient--zoomed");
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="journey-step"
      ref={stepRef}
      id={`journey-step-${number}`}
    >
      {/* Step number badge */}
      <div className="journey-step__badge">
        <span>{number}</span>
      </div>

      {/* Scene image with ingredient circle overlay — no arrow */}
      <div className="journey-step__image-wrapper">
        <img
          className="journey-step__scene"
          src={sceneImage}
          alt={title}
          loading="lazy"
        />

        <div className="journey-step__ingredient-area" ref={ingredientRef}>
          <div className="journey-step__ingredient">
            <img
              src={ingredientImage}
              alt={`${title} — close-up`}
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Text content */}
      <div className="journey-step__content">
        <h3 className="journey-step__title">{title}</h3>
        <p className="journey-step__desc">{description}</p>
        {caption && (
          <p className="journey-step__caption">{caption}</p>
        )}
      </div>

      {/* Connector line to next step */}
      {!isLast && <div className="journey-step__connector" />}
    </div>
  );
}
