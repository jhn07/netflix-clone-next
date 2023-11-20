import MovieVideo from "@/components/MovieVideo";
import RecentlyAdded from "@/components/RecentlyAdded";

export const fetchCache = "default-no-store"

export default async function HomePage() {
  return (
    <div className="p-5 lg:p-0">
      <MovieVideo />
      <h1 className="text-3xl font-bold">Recently Added</h1>
      <RecentlyAdded />
    </div>
  )
}
