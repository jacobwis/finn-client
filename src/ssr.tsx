import * as React from "react";
import { Request, Response } from "express";
import { renderToString } from "react-dom/server";
import App from "./App";

const ENV = process.env.NODE_ENV || "development";
const IS_PROD = ENV === "production";

export default function serverRenderer() {
  return (req: Request, res: Response) => {
    const html = renderToString(<App />);

    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
      ${IS_PROD ? `<link rel="stylesheet" href="/styles.css">` : ""}
    </head>
    <body>
      <div id="root">${html}</div>
      <script src="/build.js"></script>
    </body>
    </html>    
    `);
  };
}
