import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Link from 'next/link';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <nav className="navbar">
        <Link href="/">Home</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/about">About</Link>
      </nav>
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
