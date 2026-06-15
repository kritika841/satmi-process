import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProcessPage, processPages } from "@/lib/processes";
import ProcessPageTemplate from "../ProcessPageTemplate";

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
    description: page
      ? `Discover ${page.title.toLowerCase()} — ${page.curiosity.question}`
      : "Satmi incense making process",
  };
}

export default async function ProcessPage({ params }: ProcessPageProps) {
  const { step } = await params;
  const page = getProcessPage(step);

  if (!page) {
    notFound();
  }

  return (
    <ProcessPageTemplate page={page} totalSteps={processPages.length} />
  );
}