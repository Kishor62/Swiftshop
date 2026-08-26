import express from "express";
import { getAllProducts ,getProductById, SearchProduct} from "../controllers/productController.js";

const productRouters=express.Router();

productRouters.get("/",getAllProducts);

productRouters.get("/:id",getProductById);

productRouters.get("/search",SearchProduct);

export default productRouters;