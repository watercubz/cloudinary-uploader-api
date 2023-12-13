import { Router } from "express";
import fileUpload from "express-fileupload";
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products.controllers.js";

const router = Router();

router.get("/products", getProducts);
router.get("/product/:id", getProduct);

router.post(
  "/product",
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads",
  }),
  createProduct
);

router.put("/product/:id", updateProduct);

router.delete("/product/:id", deleteProduct);
export default router;
