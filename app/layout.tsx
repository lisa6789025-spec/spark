import "./globals.css";
import NavAuth from "./components/NavAuth";

export const metadata = {
  title: "Spark — the next line, found",
  description: "Paste the conversation you're already having. Get one good line back.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,500;0,600;1,500&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <header className="site-nav">
          <nav className="nav-inner wrap">
            <a href="/" className="brand" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3.5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1"/></svg>Spark</a>
            <div className="nav-links">
              <a href="/#how">How it works</a>
              <a href="/#features">Why</a>
              <a href="/#pricing">Pricing</a>
            </div>
            <NavAuth />
          </nav>
        </header>

        <div className="wrap">
          {children}
        </div>

        <footer className="site-footer">
          <div className="wrap footer-inner">
            <span className="footer-brand" style={{ display: "inline-flex", alignItems: "center", gap: 7 }}><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3.5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1"/></svg>Spark</span>
            <span className="footer-tag">written between the lines, sent as your own</span>
            <div className="footer-links">
              <a href="/#how">How it works</a>
              <a href="/#pricing">Pricing</a>
              <a href="/dashboard?mode=login">Log in</a>
              <a href="/dashboard?mode=signup">Create account</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
