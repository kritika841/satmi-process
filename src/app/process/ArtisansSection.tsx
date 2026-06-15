"use client";

import { useEffect, useRef } from "react";

type ArtisansSectionProps = {
  headline: string;
  subheadline: string;
  groupImage: string;
};

export default function ArtisansSection({ headline, subheadline, groupImage }: ArtisansSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("artisans--visible");
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="artisans" ref={sectionRef} id="artisans-section">
      <p className="artisans__eyebrow">{subheadline}</p>
      <h2 className="artisans__headline">{headline}</h2>
      <div className="artisans__image-wrapper">
        <img
          className="artisans__group-image"
          src={groupImage}
          alt="Our artisan team"
          loading="lazy"
        />
      </div>
    </section>
  );
}
