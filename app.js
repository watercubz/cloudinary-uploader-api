import express from "express";

import { connect } from "./database/db.js";
import router from "./routes/index.routes.js";
import ProductsRoutes from "./routes/products.routes.js";
import { valideMiddleware } from "./middlewares/cors.js";

const app = express();
connect();

app.use(express.json());
app.use(router);

app.use(ProductsRoutes);
app.use(valideMiddleware());

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, (req, res) => {
  console.log(`server is running on port http://localhost:${PORT}`);
});
