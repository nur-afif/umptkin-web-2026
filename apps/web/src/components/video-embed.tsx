"use client";

import Video from "next-video";

interface VideoEmbedProps {
  className?: string;
}

export default function VideoEmbed({ className }: VideoEmbedProps) {
  return (
    <div className={`relative w-full ${className || ""}`}>
      <Video
        src="/public/Tutorial.mp4"
        className="w-full h-full rounded-xl overflow-hidden"
        controls
      />
    </div>
  );
}
