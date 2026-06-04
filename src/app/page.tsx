import Link from "next/link";
import { processPages } from "@/lib/processes";
import { getAbsoluteUrl } from "@/lib/site";

export default function HomePage() {
  return (
    <main className="page-shell">
      <div className="frame">
        <section className="hero">
          <p className="eyebrow">Satmi incense making</p>
          <h1>Six process pages, ready for deployment.</h1>
          <p>
            This scaffold gives you one URL per process stage so you can deploy the site,
            print QR codes, and fill in the actual animation or redirect content later.
          </p>
        </section>

        <section className="grid">
          <div className="panel process-list">
            <p className="eyebrow">Process routes</p>
            <div className="process-links">
              {processPages.map((page) => (
                <Link className="process-link" href={page.path} key={page.step}>
                  <span>Stage {page.step}</span>
                  <strong>{page.title}</strong>
                  <span>{page.path}</span>
                </Link>
              ))}
            </div>
          </div>

          <aside className="panel info-card">
            <p className="eyebrow">Deployment</p>
            <div className="stack">
              <div>
                <p className="muted">Set this before building so the full URLs resolve correctly.</p>
                <div className="url-box">NEXT_PUBLIC_SITE_URL=https://your-domain.example</div>
              </div>
              <div>
                <p className="muted">Example absolute URL</p>
                <div className="url-box">{getAbsoluteUrl("/process/1/")}</div>
              </div>
              <div>
                <p className="muted">QR code target</p>
                <div className="url-box">Use the deployed process URL for the packaging QR code.</div>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}