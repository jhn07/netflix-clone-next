"use client";

import { Heart, PlayCircle } from "lucide-react"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import PlayVideoModal from "./PlayVideoModal"
import { useState } from "react"
import { addToWatchList, deleteFromWatchList } from "@/app/action";
import { usePathname } from "next/navigation";

interface iAppProps {
  title: string
  overview: string
  movieId: number
  wachtList: boolean
  wachtListId: string
  youtubeUrl: string
  year: number
  age: number
  time: number
}

export default function MovieCard({
  title,
  overview,
  movieId,
  wachtList,
  wachtListId,
  youtubeUrl,
  year,
  age,
  time
}: iAppProps) {

  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <button onClick={() => setOpen(true)} className="-mt-14">
        <PlayCircle className="h-16 w-16 md:h-20 md:w-20" />
      </button>
      <div className="absolute right-11 top-5 z-10 md:right-5">
        <FormAddedIcon
          wachtList={wachtList}
          movieId={movieId}
          pathname={pathname}
          watchlistid={wachtListId}
        />
      </div>
      <div className="absolute p-5 bottom-0 left-0">
        <h1 className="text-lg font-bold line-clamp-1">{title}</h1>
        <div className="flex gap-x-2 items-center">
          <p className="font-normal text-sm">{year}</p>
          <p className="font-normal text-sm border py-0.5 px-1 border-gray-200 rounded">
            {age}+
          </p>
          <p className="font-normal text-sm">{time}h</p>
        </div>
        <p className="font-light text-sm text-gray-200 line-clamp-1">
          {overview}
        </p>
      </div>
      <PlayVideoModal
        key={movieId}
        state={open}
        changeState={setOpen}
        title={title}
        overview={overview}
        youtubeUrl={youtubeUrl}
        age={age}
        duration={time}
        release={year}
      />
    </>
  )
}

function FormAddedIcon({ wachtList, movieId, pathname, watchlistid }: { wachtList: boolean, movieId: number, pathname: string, watchlistid: string }) {

  return (
    <form action={wachtList ? deleteFromWatchList : addToWatchList}>
      <input type="hidden" name="movieId" value={movieId} />
      <input type="hidden" name="pathname" value={pathname} />
      <input type="hidden" name="watchlistid" value={watchlistid} />
      <Button variant="outline" size="icon" className="bg-black/80">
        <Heart className={cn(
          "w-4 h-4",
          wachtList && "w-4 h-4 text-red-500"
        )} />
      </Button>
    </form>
  )
}
