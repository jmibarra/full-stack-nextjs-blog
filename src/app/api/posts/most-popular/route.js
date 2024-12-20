import prisma from "@/utils/connect";
import { NextResponse } from "next/server";
/**
 * @description GET most popular posts
 * @param {NextApiRequest} req
 * @returns {NextResponse} A response with the most popular posts and their count, or an error if something went wrong
 */
export const GET = async (req) => {

    const POST_PER_PAGE = 5;

    const query = {
        take: POST_PER_PAGE,
        orderBy: {
            views: "desc",
        },
        include: { user: true, cat: true },
    };

    try {
        const [posts, count] = await prisma.$transaction([
            prisma.post.findMany(query),
            prisma.post.count({ where: query.where }),

        ]);
        return new NextResponse(JSON.stringify({ posts, count }, { status: 200 }));
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
        );
    }
};