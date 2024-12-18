import express from "express";
import path from "path";
import "dotenv/config";
import helmet from "helmet";
import compression from "compression";
import shoesRouter from "./router/shoesRouter.js";

const app = express();

app.use(helmet());
app.use("/assets", express.static(path.join(import.meta.dirname, "public")));
app.use(compression());

app.use("/shoes", shoesRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});
