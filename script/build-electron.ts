import { Platform, build } from "electron-builder";
import { readFile } from "fs/promises";
import { join } from "path";

const rootPath = join(__dirname, "..");

(async () => {

    const realPackageJsonRaw = await readFile(join(rootPath, "package.json"), "utf-8");
    const realPackageJson = JSON.parse(realPackageJsonRaw);

    build({
        projectDir: join(rootPath, "build"),
        targets: Platform.MAC.createTarget(),
        config: {
            appId: "io.imbricate.desktop",
            electronCompile: false,
            productName: "Imbricate",
            electronVersion: realPackageJson.devDependencies.electron,
        },
    });
})();
