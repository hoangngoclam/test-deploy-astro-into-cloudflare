import React from "react";
import "../styles/global.css";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <title>Astro Basics</title>
    </head>
    <body className="m-0 w-full h-full">
      {children}
    </body>
  </html>
);

export default Layout;
