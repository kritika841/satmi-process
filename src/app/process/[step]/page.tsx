import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProcessPage, processPages } from "@/lib/processes";

type ProcessPageProps = {
  params: Promise<{
    step: string;
  }>;
};

export function generateStaticParams() {
  return processPages.map((page) => ({
    step: page.step,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ step: string }>;
}): Promise<Metadata> {
  const { step } = await params;
  const page = getProcessPage(step);

  return {
    title: page ? `${page.title} | Satmi Process` : "Satmi Process",
  };
}

export default async function ProcessPage({ params }: ProcessPageProps) {
  const { step } = await params;
  const page = getProcessPage(step);

  if (!page) {
    notFound();
  }

  return (
    <main className="page-shell">
      <section className="process-shell">
        <p className="eyebrow">Process {page.step}</p>
        <h1>{page.title}</h1>
        <p>
          Blank template for the future incense-making animation, redirect, or explainer
          content for this step.
        </p>
        <div className="empty-stage">
          <span>Reserved for the step content.</span>
        </div>
        <p className="footer-note">Route: {page.path}</p>
      </section>
    </main>
  );
}