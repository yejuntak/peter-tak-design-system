import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, extname } from "node:path";
const types = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".svg": "image/svg+xml",
  ".json": "application/json",
};
createServer(async (request, response) => {
  try {
    const url = new URL(request.url, "http://localhost");

    const prefix = "/peter-tak-design-system/";
    if (!url.pathname.startsWith(prefix)) {
      response.writeHead(404).end();
      return;
    }
    const root = resolve("site");
    const file = resolve(
      root,
      decodeURIComponent(url.pathname.slice(prefix.length)) || "index.html",
    );
    if (!file.startsWith(root + "/") && file !== root) {
      response.writeHead(403).end();
      return;
    }
    const actual = (await stat(file)).isDirectory()
      ? resolve(file, "index.html")
      : file;
    response.writeHead(200, {
      "Content-Type": types[extname(actual)] || "application/octet-stream",
    });
    response.end(await readFile(actual));
  } catch {
    response.writeHead(404).end();
  }
}).listen(4173, "127.0.0.1", () =>
  console.log("Serving the built React component reference"),
);
