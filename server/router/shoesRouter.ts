import { Router, Request, Response } from "express";
import shoesData from "../shoesData.js";

const shoesRouter = Router();

shoesRouter.get("/", (_req: Request, res: Response) => {
    res.json(shoesData);
});

shoesRouter.get("/:id", (req: Request, res: Response) => {
    const { id } = req.params;
    const foundShoe = shoesData.find((shoe) => shoe.id === Number(id));

    if (!foundShoe) {
        res.sendStatus(404);
    }

    res.json(foundShoe);
});

export default shoesRouter;
