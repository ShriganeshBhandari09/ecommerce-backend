import express from "express";
import type { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.send("This is my ecommerce server");
});

app.listen(PORT || 3000, () => {
  console.log(`This is my server running on port ${PORT}`);
});
