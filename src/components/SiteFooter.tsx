import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line bg-ink text-paper">
      <div className="container-edit py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl">Storycast</p>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-paper/65">
              Studio de production audio et audio filmée basé à Paris.
              L&rsquo;audio, c&rsquo;est du sérieux… mais jamais ennuyeux.
            </p>
          </div>

          <div>
            <p className="text-[13px] font-medium text-paper/50">
              Navigation
            </p>
            <ul className="mt-4 space-y-3 text-[15px] text-paper/80">
              <li>
                <Link href="/" className="hover:text-paper transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/notre-offre"
                  className="hover:text-paper transition-colors"
                >
                  Notre offre
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-paper transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[13px] font-medium text-paper/50">
              Écouter
            </p>
            <ul className="mt-4 space-y-3 text-[15px] text-paper/80">
              <li>
                <a
                  href="http://www.timelinepodcast.fr"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-paper transition-colors"
                >
                  timelinepodcast.fr
                </a>
              </li>
              <li>
                <a
                  href="https://podcasts.apple.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-paper transition-colors"
                >
                  Apple Podcasts
                </a>
              </li>
              <li>
                <a
                  href="https://open.spotify.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-paper transition-colors"
                >
                  Spotify
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-paper/15 pt-6 text-[13px] text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Storycast — Paris</p>
          <Link
            href="/mentions-legales"
            className="hover:text-paper/80 transition-colors"
          >
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
}
