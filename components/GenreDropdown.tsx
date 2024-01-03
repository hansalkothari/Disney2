import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import { Genres } from "@/typings";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const GenreDropdown = async() => {
    const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
    const options: RequestInit = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTQ5ZGRhOGY4NDY3MmMyYTk5OWRmZjg3NTc0OWM0YiIsInN1YiI6IjYxMDk0YWMyNzcxOWQ3MDA1ZDllOTk1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bQIfjdqxupAjAc55pUV4SyU2TNWXnKbT9aMRa7bB_p0`,
      },
      next: {
        revalidate: 60 * 60 * 24, // 24 hours, one request every 24 hours.
      },
    };
    
    const response = await fetch(url.toString(), options);
    const data = (await response.json()) as Genres;
    console.log(data.genres)
    
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className="text-white flex justify-center items-center">
          Genre <ChevronDown className="ml-1" />
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuLabel>Select a Genre</DropdownMenuLabel>
          <DropdownMenuSeparator />

          {data.genres.map((genre) => (
            <DropdownMenuItem className="cursor-pointer" key={genre.id}>
              <Link href={`/genre/${genre.id}?genre=${genre.name}`}>
                {genre.name}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
}

export default GenreDropdown