import { BrowserWindow } from "electron";
import { VIEW_SOURCE, loadSource } from "../source";

export class DatabaseView {

    private static windowStack: Map<string, BrowserWindow> = new Map<string, BrowserWindow>();

    public static showView(): void {
        const window = this.getOrCreateWindow("database");
        loadSource(window, VIEW_SOURCE.DATABASE);
    }

    private static getOrCreateWindow(name: string): BrowserWindow {
        let window = this.windowStack.get(name);
        if (!window) {
            window = new BrowserWindow({
                width: 800,
                height: 600,
            });
            this.windowStack.set(name, window);
        }
        return window;
    }
}
