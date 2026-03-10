import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes";
import bookRoutes from "./routes/book.routes";
import borrowRoutes from "./routes/borrow.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);

app.use("/books", bookRoutes, borrowRoutes);

app.get("/", (req, res) => {
    res.send("Library API Running");
});

export default app;
