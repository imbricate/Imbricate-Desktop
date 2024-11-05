import { BrowserWindow } from "electron"

export class DatabaseView {

    private static windowStack: Map<string, BrowserWindow> = new Map<string, BrowserWindow>()

    public static showView(): void {
        const window = new BrowserWindow({
            width: 800,
            height: 600,
            webPreferences: {
                preload: "http://localhost:3000/preload.js"
            }
        })
    }
}
