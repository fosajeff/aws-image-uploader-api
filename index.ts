import "dotenv/config";
import UploadController from "./src/resources/upload.controller";
import App from "./app";

const app = new App([new UploadController()], Number(process.env.PORT) || 4040);

app.listen();

app.express.get("/", (req, res) => {
  res.send({ status: true, message: "Server up" });
});
