import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const posts = await prisma.post.findMany();
    return NextResponse(
      JSON.stringify(posts, {
        status: 200,
      })
    );
  } catch (error) {
    return NextResponse(
      JSON.stringify(
        {
          message: "something went wrong",
        },
        { status: 500 }
      )
    );
  }
};
