import dotenv from "dotenv";

dotenv.config();

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import connectDB from "./config/connactDB.js"
import authRouter from "./routes/authRoutes.js";
import productRouters from "./routes/productRoute.js";

const app = express();
const port = process.env.PORT || 5000;

connectDB();

app.use(helmet());
app.use(express.json({ limit: "10kb" }));
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

// User keliye
app.use("/api/auth", authRouter);

//Product keliye
app.use("/api/products",productRouters)

app.get("/", (req, res) => {
  res.send("SwiftShop Backend Running");
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});