import { BrowserWindow } from "electron";
import { join } from "path";
import { isDevelopment } from "../util/environment";

export enum VIEW_SOURCE {

    DATABASE = "DATABASE",
}

const sourceDevelopment: Record<VIEW_SOURCE, string> = {
    [VIEW_SOURCE.DATABASE]: "http://localhost:5711",
};

const rootPath = join(__dirname, "..");

const sourceProduction: Record<VIEW_SOURCE, string> = {
    [VIEW_SOURCE.DATABASE]: join(rootPath, "_renderer", "database", "index.html"),
};

export const loadSource = (window: BrowserWindow, source: VIEW_SOURCE): void => {

    if (isDevelopment) {
        window.loadURL(sourceDevelopment[source]);
    } else {
        window.loadFile(sourceProduction[source]);
    }
};
