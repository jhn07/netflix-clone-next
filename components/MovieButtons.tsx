"use client";

import { InfoIcon, PlayCircle } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import PlayVideoModal from "./PlayVideoModal";


interface iAppProps {
  overview: string
  youtubeUrl: string
  title: string
  id: number
  age: number
  releaseDate: number
  duration: number
}

export default function MovieButtons({ age, duration, overview, id, releaseDate, title, youtubeUrl }: iAppProps) {

  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)} className="font-medium text-lg">
        <PlayCircle className="mr-2 h-6 w-6" /> Play
      </Button>
      <Button onClick={() => setOpen(true)} className="font-medium text-lg bg-white/40 hover:bg-white/30 text-white">
        <InfoIcon className="mr-2 h-6 w-6" /> Learn More
      </Button>

      <PlayVideoModal
        key={id}
        state={open}
        changeState={setOpen}
        age={age}
        duration={duration}
        overview={overview}
        release={releaseDate}
        title={title}
        youtubeUrl={youtubeUrl}
      />
    </>
  )
}
