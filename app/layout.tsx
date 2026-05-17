import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Changelog Stakeholder Auto-Notifier",
  description: "Auto-notify stakeholders of relevant changes. Parse changelogs and automatically notify stakeholders based on their interests."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6fca95f9-18c3-4284-8f19-64c9d38d34f1"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
