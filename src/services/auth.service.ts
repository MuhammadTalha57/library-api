import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt";
import { Role } from "../generated/prisma/enums";
import prisma from "../config/prisma";

export const registerUserService = async (data: any) => {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await prisma.user.create({
        data: {
            name: data.name,
            email: data.email,
            password: hashedPassword,
            role: Role.MEMBER,
        },
    });

    return user;
};

export const authenticateUserService = async (data: any) => {
    const user = await prisma.user.findFirst({ where: { email: data.email } });

    if (!user || !(await bcrypt.compare(data.password, user.password))) {
        return null;
    }

    return generateToken(user);
    return user;
};
