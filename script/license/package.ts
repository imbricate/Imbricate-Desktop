import { readFile } from "fs/promises";
import { join } from "path";

export const buildLicensePackageJson = async (rootPath: string) => {

    const realPackageJsonRaw = await readFile(join(rootPath, "package.json"), "utf-8");
    const realPackageJson = JSON.parse(realPackageJsonRaw);

    const licensePackageJson = {

        name: realPackageJson.name,
        version: realPackageJson.version,
        description: realPackageJson.description,
        author: realPackageJson.author,
        license: realPackageJson.license,
        homepage: realPackageJson.homepage,
        devDependencies: {
            electron: realPackageJson.devDependencies.electron,
        },
    };

    return JSON.stringify(licensePackageJson, null, 4);
};
