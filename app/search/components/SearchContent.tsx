"use client"

import MediaItem from "@/components/MediaItem"
import { Song } from "@/types"
import LikeButton from "@/components/LikeButton"
import useOnPlay from "@/hooks/useOnPlay"

interface SearchContentProps {
    songs: Song[]
}

const SearchContent: React.FC<SearchContentProps> = ({
    songs
}) => {
    const onPlay = useOnPlay(songs)

    if (songs.length === 0) {
        return (
            <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-600">
                No songs found
            </div>
        )
    }
  return (
    <div className="flex flex-col gap-y-2 w-full px-6">
        {songs.map(song => (
            <div
                key={song.id}
                className="flex items-center gap-x-4 w-full"
            >
                <MediaItem
                    onClick={(id: string) => onPlay(id)}
                    data={song}
                />
                <LikeButton songId={song.id} />
            </div>
        ))}
    </div>
  )
}

export default SearchContent
