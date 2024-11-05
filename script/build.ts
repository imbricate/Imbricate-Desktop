import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

(async () => {

    try {
        console.log("Cleaning Build Directory");
        await execAsync("rm -rf build");

        console.log("Executing License Script");
        await execAsync("yarn license");

        console.log("Building Main Process");
        await execAsync("yarn build:main");

        console.log("Building Renderer Process - Database");
        await execAsync("yarn build:renderer:database");

        console.log("Executing Produce Script");
        await execAsync("yarn produce");

        console.log("Building Electron Runnable");
        await execAsync("yarn build:electron");

        console.log("Build Complete");
    } catch (error) {
        console.error("[ERROR]", error);
    }
})();
