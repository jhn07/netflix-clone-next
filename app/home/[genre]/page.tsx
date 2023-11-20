import { authOptions } from "@/app/utils/auth";
import prisma from "@/app/utils/db";
import MovieCard from "@/components/MovieCard";
import { getServerSession } from "next-auth";
import Image from "next/image";


export const fetchCache = "default-no-store"

async function getData(category: string, userId: string) {

  const commonSelection = {
    age: true,
    duration: true,
    id: true,
    title: true,
    release: true,
    imageString: true,
    overview: true,
    youtubeString: true,
    WatchLists: {
      where: {
        userId: userId
      },
    },
  }

  switch (category) {
    case "show": {
      const data = await prisma.movie.findMany({
        where: { category: "show" },
        select: commonSelection
      })
      return data
    }
    case "movies": {
      const data = await prisma.movie.findMany({
        where: { category: "movie" },
        select: commonSelection
      })
      return data
    }
    case "recently": {
      const data = await prisma.movie.findMany({
        where: { category: "recent" },
        select: commonSelection
      })
      return data
    }
    default: {
      throw new Error()
    }
  }
}


export default async function CategoryPage({ params }: { params: { genre: string } }) {
  const session = await getServerSession(authOptions)
  const data = await getData(params.genre, session?.user?.email as string)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 sm:px-0 mt-10 gap-6">
      {data.map((movie) => (
        <div key={movie.id} className="relative h-60">
          <Image
            src={movie.imageString}
            alt="Movie"
            width={500}
            height={400}
            className="absolute w-full h-full rounded-sm object-cover"
          />
          <div className="h-60 relative z-10 w-full transform transition duration-150 opacity-0 hover:scale-105 hover:opacity-100 md:hover:scale-125">
            <div className="w-full h-full z-10 flex items-center justify-center border rounded-lg bg-gradient-to-b from-transparent via-black/50 to-black">
              <Image
                src={movie.imageString}
                alt="Movie"
                width={800}
                height={800}
                className="absolute w-full h-full -z-10 rounded-lg object-cover"
              />
              <MovieCard
                key={movie.id}
                age={movie.age}
                movieId={movie.id}
                title={movie.title}
                overview={movie.overview}
                time={movie.duration}
                youtubeUrl={movie.youtubeString}
                year={movie.release}
                wachtList={movie.WatchLists.length > 0 ? true : false}
                wachtListId={movie.WatchLists[0]?.id}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
