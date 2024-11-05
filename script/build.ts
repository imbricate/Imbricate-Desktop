import { promisify } from "util";
import { exec } from "child_process";

const execAsync = promisify(exec);

(async () => {

    try {
        console.log("Executing License Script");
        await execAsync("yarn license");

        console.log("Building Main Process");
        await execAsync("yarn build:main");

        console.log("Building Renderer Process - Database");
        await execAsync("yarn build:renderer:database");

        console.log("Executing Produce Script");
        await execAsync("yarn produce");

        console.log("Build Complete");
    } catch (error) {
        console.error("[ERROR]", error);
    }
})();
