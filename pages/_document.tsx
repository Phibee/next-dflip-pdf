import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default function Document() {
      return (
            <Html lang="en">
                  <Head>
                        <link
                              href="/assets/css/dflip.css"
                              rel="stylesheet"
                              type="text/css"
                        />

                        <link
                              href="/assets/css/themify-icons.css"
                              rel="stylesheet"
                              type="text/css"
                        />
                        <script
                              src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js"
                              type="text/javascript"
                        ></script>
                  </Head>
                  <body>
                        <Main />
                        <NextScript />
                        <script
                              src="/assets/js/dflip.min.js"
                              type="text/javascript"
                        ></script>
                  </body>
            </Html>
      );
}
