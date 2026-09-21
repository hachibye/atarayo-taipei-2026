import { defineConfig } from "vite";
import { cpSync, createReadStream, existsSync } from "node:fs";
import { resolve } from "node:path";

function copyRootStaticAssets(){
  return {
    name: "copy-root-static-assets",
    apply: "build",
    closeBundle(){
      const outputDir = resolve("dist");
      ["icon-192.png"]
        .forEach(file => cpSync(resolve(file), resolve(outputDir, file)));
      cpSync(resolve("images"), resolve(outputDir, "images"), { recursive: true });
    }
  };
}

function kuromojiDictionaryAssets(){
  const dictionaryDir = resolve("node_modules/kuromoji/dict");
  return {
    name: "kuromoji-dictionary-assets",
    configureServer(server){
      server.middlewares.use((request, response, next) => {
        const pathname = new URL(request.url || "/", "http://localhost").pathname;
        if (!pathname.startsWith("/dict/")) return next();
        const filename = decodeURIComponent(pathname.slice("/dict/".length));
        if (!/^[\w.-]+\.dat\.gz$/u.test(filename)) return next();
        const source = resolve(dictionaryDir, filename);
        if (!source.startsWith(`${dictionaryDir}/`) || !existsSync(source)) return next();
        response.setHeader("Content-Type", "application/gzip");
        response.setHeader("Cache-Control", "public, max-age=31536000, immutable");
        createReadStream(source).pipe(response);
      });
    },
    closeBundle(){
      cpSync(dictionaryDir, resolve("dist/dict"), { recursive: true });
    }
  };
}

export default defineConfig({
  base: "./",
  plugins: [copyRootStaticAssets(), kuromojiDictionaryAssets()],
  server: {
    host: "localhost"
  },
  preview: {
    host: "localhost"
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    assetsInlineLimit: 0
  }
});
