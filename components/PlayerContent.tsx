"use client"

import { Song } from "@/types"
import React from "react";

interface PlayerContentProps {
    song: Song;
    songUrl: string;
}

const PlayerContent: React.FC<PlayerContentProps> = ({
    song,
    songUrl
}) => {
  return (
    <div>PlayerContent</div>
  )
}

export default PlayerContent