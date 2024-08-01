import { asset, Head } from "$fresh/runtime.ts";
import { defineApp } from "$fresh/server.ts";
import { Context } from "deco/deco.ts";
import Theme from "deco-sites/casaevideo/sections/Theme/Theme.tsx";
import Account from '../context.tsx'
const sw = () =>
  addEventListener("load", () =>
    navigator && navigator.serviceWorker &&
    navigator.serviceWorker.register("/sw.js"));


export default defineApp(async (_req, ctx) => {
  const revision = await Context.active().release?.revision();
  return (
    <>
      {/* Include default fonts and css vars */}
      <Theme />

      {/* Include Icons and manifest */}
      <Head>
        {/* Enable View Transitions API */}
        <meta name="view-transition" content="same-origin" />

        {/* Tailwind v3 CSS file */}
        <link
          href={asset(`/styles.css?revision=${revision}`)}
          rel="stylesheet"
        />
        <style>
            {await fetch("http://denopkg.com/wellingtonjr3873/casaevideo-deco@4/static/tailwind.css").then((response) => response.text())};
        </style>

        {/* Web Manifest */}
        <link rel="manifest" href={asset("/site.webmanifest")} />
      </Head>

      {/* Rest of Preact tree */}
      <Account.Provider value={{
        name: 'lebiscuit'
       }}>
           <ctx.Component />
      </Account.Provider>

      {/* Include service worker */}
      <script
        type="module"
        dangerouslySetInnerHTML={{ __html: `(${sw})();` }}
      />
    </>
  );
});
