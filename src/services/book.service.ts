import prisma from "../config/prisma";
export const createBookService = async (data: any) => {
    const book = await prisma.book.create({
        data: {
            title: data.title,
            author: data.author,
            isbn: data.isbn,
            copies: data.copies,
        },
    });

    return book;
};

export const updateBookService = async (data: any) => {
    const book = await prisma.book.update({
        where: { id: data.id },
        data: {
            title: data.title,
            author: data.author,
            isbn: data.isbn,
            copies: data.copies,
        },
    });

    return book;
};

export const deleteBookService = async (data: any) => {
    const book = await prisma.book.delete({ where: { id: data.id } });

    return book;
};

export const getBooksService = async (data: any) => {
    const books = await prisma.book.findMany();

    return books;
};

export const getBookByIdService = async (data: any) => {
    const book = await prisma.book.findFirst({ where: { id: data.id } });

    return book;
};
