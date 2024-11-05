import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const rootPath: string = join(__dirname, "..");

(async () => {
    try {

        const developmentMarkFile = await readFile(
            join(rootPath, "build", "util", "environment.js"),
            "utf-8",
        );

        const replacedDevelopmentMarkFile = developmentMarkFile.replace(
            "[DEVELOPMENT_MARK_DEVELOPMENT]",
            "[DEVELOPMENT_MARK_PRODUCTION]",
        );

        await writeFile(
            join(rootPath, "build", "util", "environment.js"),
            replacedDevelopmentMarkFile,
        );
    } catch (error) {
        console.error("[ERROR]", error);
    }
})();
