import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { EVENT_NAME, SITE_URL, siteUrl } from "@/config/event";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const title = "European Advanced Aesthetics Summit 2026 | Lisboa";
const description =
  "European Advanced Aesthetics Summit 2026. Um encontro dedicado à estética avançada, inovação, saúde, carreira e conexões internacionais. 15 de novembro de 2026, Lisboa.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: SITE_URL,
    siteName: EVENT_NAME,
    title,
    description,
    images: [{ url: siteUrl("og.jpg"), width: 1200, height: 630, alt: EVENT_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [siteUrl("og.jpg")],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#080808",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-PT" className={montserrat.variable} suppressHydrationWarning>
      <head>
        {/* Ativa as animações de entrada só quando há JS (sem JS, tudo fica visível). */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
