import prisma from "@/app/utils/db"
import Image from "next/image"
import MovieCard from "./MovieCard"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/utils/auth"

async function getData(userId: string) {
  const data = await prisma.movie.findMany({
    select: {
      id: true,
      overview: true,
      title: true,
      WatchLists: {
        where: {
          userId: userId
        }
      },
      imageString: true,
      youtubeString: true,
      age: true,
      release: true,
      duration: true
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 4,
  })

  return data
}

export default async function RecentlyAdded() {
  const session = await getServerSession(authOptions)
  const data = await getData(session?.user?.email as string)

  return (
    <div className="grid grid-cols-1 mt-8 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data.map((movie) => (
        <div key={movie.id} className="relative h-48">
          <Image
            src={movie.imageString}
            alt="Movie"
            className="absolute w-full h-full rounded-sm object-cover"
            width={500}
            height={400}
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
                movieId={movie.id}
                title={movie.title}
                overview={movie.overview}
                wachtListId={movie.WatchLists[0]?.id}
                youtubeUrl={movie.youtubeString}
                wachtList={movie.WatchLists.length > 0 ? true : false}
                age={movie.age}
                time={movie.duration}
                year={movie.release}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
