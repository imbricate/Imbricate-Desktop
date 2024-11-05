import { copyFile, mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { buildLicensePackageJson } from "./license/package";

const rootPath: string = join(__dirname, "..");

(async () => {
    try {
        await mkdir(join(rootPath, "build"), {
            recursive: true,
        });

        await copyFile(
            join(rootPath, "LICENSE"),
            join(rootPath, "build", "LICENSE"),
        );

        const packageJsonRaw = await buildLicensePackageJson(rootPath);

        await writeFile(
            join(rootPath, "build", "package.json"),
            packageJsonRaw,
        );

        await writeFile(
            join(rootPath, "build", "yarn.lock"),
            "",
        );
    } catch (error) {
        console.error("[ERROR]", error);
    }
})();
