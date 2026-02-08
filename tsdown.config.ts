import { defineConfig } from 'tsdown';
import fs from "fs";

export default defineConfig({
    entry: ['./src/index.ts', './src/components/**/*.tsx', './src/tailored-m3.css'],
    format: 'esm',
    outDir: 'dist',
    dts: true,
    clean: true,
    treeshake: true,
    minify: true,
    banner: (ctx) => {
        const sourcePath = ctx.fileName
            .replace('dist/', 'src/')
            .replace('.mjs', '.tsx');

        if (fs.existsSync(sourcePath)) {
            const content = fs.readFileSync(sourcePath, 'utf-8');

            if (content.includes('"use client"') || content.includes("'use client'")) {
                return {
                    js: "'use client';"
                }
            }
        }
    }
})