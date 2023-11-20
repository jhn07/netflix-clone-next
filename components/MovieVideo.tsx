import prisma from "@/app/utils/db"
import { Database } from "lucide-react"
import { Button } from "./ui/button"
import MovieButtons from "./MovieButtons"

async function getDataMovie() {
  const data = await prisma.movie.findFirst({
    select: {
      title: true,
      overview: true,
      videoSource: true,
      imageString: true,
      release: true,
      duration: true,
      id: true,
      age: true,
      youtubeString: true,
    }
  })

  return data
}

export default async function MovieVideo() {

  const data = await getDataMovie()

  return (
    <div className="h-[55vh] lg:h-[60vh] w-full flex items-center justify-start">
      <video
        poster={data?.imageString}
        autoPlay
        muted
        src={data?.videoSource}
        className="w-full absolute top-0 left-0 h-[60vh] object-cover -z-10 brightness-[60%]"
      ></video>
      <div className="absolute w-[90%] lg:w-[40%] mx-auto">
        <h1 className="text-white text-4xl font-bold md:text-5xl lg:text-6xl">
          {data?.title}
        </h1>
        <p className="text-white text-lg mt-5 line-clamp-2">
          {data?.overview}
        </p>
        <div className="flex gap-x-3 mt-4">
          <MovieButtons
            key={data?.id}
            age={data?.age as number}
            duration={data?.duration as number}
            id={data?.id as number}
            overview={data?.overview as string}
            releaseDate={data?.release as number}
            title={data?.title as string}
            youtubeUrl={data?.youtubeString as string}
          />
        </div>
      </div>
    </div>
  )
}
