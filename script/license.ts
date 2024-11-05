import { copyFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { buildLicensePackageJson } from "./license/package";

const rootPath: string = join(__dirname, "..");

(async () => {
    try {
        await copyFile(
            join(rootPath, "LICENSE"),
            join(rootPath, "build", "LICENSE"),
        );

        const packageJsonRaw = await buildLicensePackageJson(rootPath);

        await writeFile(
            join(rootPath, "build", "package.json"),
            packageJsonRaw,
        );
    } catch (error) {
        console.error("[ERROR]", error);
    }
})();
