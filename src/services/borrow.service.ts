import prisma from "../config/prisma";
export const borrowBookService = async (data: any) => {
    const book = await prisma.book.findFirst({ where: { id: data.bookId } });

    if (!book || book.copies <= 0) {
        return null;
    }

    const borrowRecord = await prisma.borrow.create({
        data: {
            bookId: data.bookId,
            userId: data.userId,
            borrowDate: new Date(),
        },
    });

    await prisma.book.update({
        where: { id: borrowRecord.bookId },
        data: { copies: { decrement: 1 } },
    });

    return borrowRecord;
};

export const returnBookService = async (data: any) => {
    const borrowRecord = await prisma.borrow.findFirst({
        where: { id: data.borrowId, returnDate: null },
    });

    if (!borrowRecord) {
        return null;
    }

    const updatedRecord = await prisma.borrow.update({
        where: { id: data.borrowId },
        data: { returnDate: new Date() },
    });

    await prisma.book.update({
        where: { id: borrowRecord.bookId },
        data: { copies: { increment: 1 } },
    });

    return updatedRecord;
};
