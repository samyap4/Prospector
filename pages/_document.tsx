import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Generate your next outreach email in seconds."
          />
          <meta property="og:site_name" content="https://prospector-peach.vercel.app/" />
          <meta
            property="og:description"
            content="Generate your next outreach email in seconds."
          />
          <meta property="og:title" content="Outreach Email Generator" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Outreach Email Generator" />
          <meta
            name="twitter:description"
            content="Generate your next outreach email in seconds."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
