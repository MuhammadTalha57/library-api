import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes";
import bookRoutes from "./routes/book.routes";
import borrowRoutes from "./routes/borrow.routes";
import rateLimit from "express-rate-limit";

const app = express();

app.use(cors());
app.use(express.json());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 Minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: "Too many requests, please try again later.",
    standardHeaders: true,
});
app.use(limiter);

app.use("/auth", authRoutes);

app.use("/books", bookRoutes, borrowRoutes);

app.get("/", (req, res) => {
    res.send("Library API Running");
});

export default app;
