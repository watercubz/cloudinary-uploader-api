import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("hi, use /products for view all products");
});

export default router;
