"use server";

import { revalidatePath } from "next/cache";
import prisma from "./utils/db";
import { getServerSession } from "next-auth";
import { authOptions } from "./utils/auth";


export async function addToWatchList(formData: FormData) {
  const session = await getServerSession(authOptions)
  const movieId = formData.get("movieId")
  const pathname = formData.get("pathname") as string


  const data = await prisma.watchList.create({
    data: {
      userId: session?.user?.email as string,
      movieId: Number(movieId)
    }
  })

  revalidatePath(pathname)
}


export async function deleteFromWatchList(formData: FormData) {
  const watchlistid = formData.get("watchlistid") as string
  const pathname = formData.get("pathname") as string

  const data = await prisma.watchList.delete({
    where: {
      id: watchlistid
    }
  })

  revalidatePath(pathname)
}