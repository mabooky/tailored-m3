import { defineConfig } from "tsdown";
import fs from "fs";

export default defineConfig({
  entry: ["src/index.ts", "src/components/**/*.tsx"],
  dts: true,
  clean: true,
  treeshake: true,
  banner: (ctx) => {
    const sourcePath = ctx.fileName
      .replace("dist/", "src/")      // dist를 src로 바꾸고
      .replace(".js", ".tsx");       // .js를 .tsx로 바꿈

    // 3. 원본 파일이 실제로 존재하면 내용을 읽어봅니다.
    if (fs.existsSync(sourcePath)) {
      const content = fs.readFileSync(sourcePath, "utf-8");
      
      // 4. 원본에 "use client"가 적혀 있었나요?
      if (content.includes('"use client"') || content.includes("'use client'")) {
        // 5. "그렇다면 결과물 맨 위에도 다시 붙여줘!"
        return {
          js: "'use client';",
        };
      }
    }
  },
});