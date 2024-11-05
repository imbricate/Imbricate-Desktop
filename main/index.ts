import { DatabaseView } from "./view/database";
import { app } from "electron";

app.on("ready", () => {
    console.log("App is ready");
    DatabaseView.showView();
});
