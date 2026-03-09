import { Request, Response } from "express";
import {
    createBookService,
    updateBookService,
    deleteBookService,
    getBooksService,
    getBookByIdService,
} from "../services/book.service";

export const createBook = async (req: Request, res: Response) => {
    const book = await createBookService(req.body);

    if (book) {
        res.status(201).json({
            success: true,
            data: book,
        });
    } else {
        res.status(400).json({
            success: false,
        });
    }
};

export const updateBook = async (req: Request, res: Response) => {
    const book = await updateBookService(req.body);

    if (book) {
        res.status(200).json({
            success: true,
            data: book,
        });
    } else {
        res.status(400).json({
            success: false,
        });
    }
};

export const deleteBook = async (req: Request, res: Response) => {
    const book = await deleteBookService(req.body);

    if (book) {
        res.status(200).json({
            success: true,
            data: book,
        });
    } else {
        res.status(400).json({
            success: false,
        });
    }
};

export const getBooks = async (req: Request, res: Response) => {
    const books = await getBooksService(req.body);

    if (books) {
        res.status(200).json({
            success: true,
            data: books,
        });
    } else {
        res.status(400).json({
            success: false,
        });
    }
};

export const getBookById = async (req: Request, res: Response) => {
    const book = await getBookByIdService({ id: req.params.id });

    if (book) {
        res.status(200).json({
            success: true,
            data: book,
        });
    } else {
        res.status(400).json({
            success: false,
        });
    }
};
