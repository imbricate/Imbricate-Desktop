import { Platform, build } from "electron-builder";
import { join } from "path";

const rootPath = join(__dirname, "..");

build({
    projectDir: join(rootPath, "build"),
    targets: Platform.MAC.createTarget(),
    config: {
        appId: "io.imbricate.desktop",
        electronCompile: false,
        productName: "Imbricate",
    },
});
