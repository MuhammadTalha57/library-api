import {
    borrowBookService,
    returnBookService,
} from "../services/borrow.service";
import { Request, Response } from "express";
export const borrowBook = async (req: Request, res: Response) => {
    const borrowRecord = await borrowBookService(req.body);

    if (borrowRecord) {
        res.status(201).json({
            success: true,
            data: borrowRecord,
        });
    } else {
        res.status(400).json({
            success: false,
        });
    }
};

export const returnBook = async (req: Request, res: Response) => {
    const updatedRecord = await returnBookService(req.body);

    if (updatedRecord) {
        res.status(200).json({
            success: true,
            data: updatedRecord,
        });
    } else {
        res.status(400).json({
            success: false,
        });
    }
};
