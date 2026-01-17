"use client";

import Video from "next-video";

interface VideoEmbedProps {
  className?: string;
  youtubeUrl?: string;
  localSrc?: string;
}

const DEFAULT_YOUTUBE_URL = "https://www.youtube.com/embed/YftaRzbBaC4";

export default function VideoEmbed({
  className,
  youtubeUrl = DEFAULT_YOUTUBE_URL,
  localSrc,
}: VideoEmbedProps) {
  const shouldUseYoutube = Boolean(youtubeUrl) && !localSrc;

  return (
    <div className={`relative w-full ${className || ""}`}>
      {shouldUseYoutube ? (
        <iframe
          className="absolute inset-0 h-full w-full rounded-xl border-0"
          src={youtubeUrl}
          title="Tutorial Ujian UM-PTKIN"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <Video
          src={localSrc || ""}
          className="w-full h-full rounded-xl overflow-hidden"
          controls
        />
      )}
    </div>
  );
}
