import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thestorycast.fr"),
  title: {
    default: "Storycast — Studio de production audio et podcasts, Paris",
    template: "%s | Storycast",
  },
  description:
    "Storycast conçoit et produit vos podcasts, radios numériques et émissions audio filmées, à Paris. Prestations BtoB sur mesure et émissions Grand Public dédiées à l'Histoire, la Culture et le Patrimoine.",
  openGraph: {
    title: "Storycast — Studio de production audio et podcasts, Paris",
    description:
      "Conception, enregistrement et diffusion de podcasts et radios numériques pour les entreprises. Studio parisien, équipe pluridisciplinaire, plus de 2000 émissions produites.",
    url: "https://www.thestorycast.fr",
    siteName: "Storycast",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
