"use client";

import { useEffect, useRef } from "react";

type SpecialStepProps = {
  stepNumber: number;
  title: string;
  description: string;
  image: string;
  variant: "mixing" | "packaging";
};

export default function SpecialStep({ stepNumber, title, description, image, variant }: SpecialStepProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("special-step--visible");
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`special-step special-step--${variant}`}
      ref={ref}
      id={`${variant}-step`}
    >
      <div className="special-step__badge">
        <span>{stepNumber}</span>
      </div>

      <div className="special-step__image-wrapper">
        <img
          className="special-step__image"
          src={image}
          alt={title}
          loading="lazy"
        />
        <div className="special-step__image-overlay" />
      </div>

      <div className="special-step__content">
        <h3 className="special-step__title">{title}</h3>
        <p className="special-step__desc">{description}</p>
      </div>
    </div>
  );
}
