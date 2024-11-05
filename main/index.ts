import { app } from "electron";
import { DatabaseView } from "./view/views/database";

app.on("ready", () => {
    console.log("App is ready");
    DatabaseView.showView();
});
