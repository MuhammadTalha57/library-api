import express from "express";
import {
    createBook,
    getBooks,
    getBookById,
    updateBook,
    deleteBook,
} from "../controllers/book.controller";
import { authenticate } from "../middlewares/auth.middleware";
import { authorize } from "../middlewares/role.middleware";

const router = express.Router();

router.get("/", getBooks);

router.get("/:id", getBookById);

router.post("/create", authenticate, authorize(["ADMIN"]), createBook);

router.post("/update", authenticate, authorize(["ADMIN"]), updateBook);

router.post("/delete", authenticate, authorize(["ADMIN"]), deleteBook);

export default router;
