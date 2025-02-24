import express from "express";
import path from "path";
import cors from "cors";
import "dotenv/config";
import helmet from "helmet";
import compression from "compression";
import shoesRouter from "./router/shoesRouter.js";

const app = express();

app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["GET"],
    })
);

app.use(
    helmet({
        crossOriginResourcePolicy: {
            policy: "same-site",
        },
        contentSecurityPolicy: {
            directives: {
                imgSrc: ["'self'", "http://localhost:3001"],
            },
        },
    })
);

app.use(compression());

app.get("/", (_, res) => {
    res.json({
        shoes: {
            "/": "return all shoes available",
            "/id": "return specified shoe",
        },
    });
});

app.use("/assets", express.static(path.join(import.meta.dirname, "public")));

app.use("/shoes", shoesRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});
