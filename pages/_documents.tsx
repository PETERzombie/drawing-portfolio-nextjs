import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Remove external font links since we are now self-hosting */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
