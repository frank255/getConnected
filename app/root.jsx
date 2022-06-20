import styles from "./styles/app.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const meta = () => ({
  charset: "utf-8",
  title: "getConnected",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="max-w-[2000px] 
       mx-auto
       text-neutral-900
       dark:text-neutral-200
        bg-transparent
       dark:bg-neutral-800">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
