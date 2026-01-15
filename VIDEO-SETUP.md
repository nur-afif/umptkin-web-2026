# next-video Setup Instructions

## Current Status

✅ next-video installed
✅ next.config.ts configured with Vercel Blob provider
✅ video.d.ts types configured
✅ video-embed component created
✅ info-tabs.tsx updated to use Video component
✅ Build succeeds with next-video integration

## ⚠️ Action Required: Empty Video File

The `Tutorial.mp4` file at `/public/Tutorial.mp4` is **0 bytes** (empty).

## Required Steps to Complete Setup

### 1. Add Proper Video File

You need to download and place a valid MP4 video file:

```bash
# Download the YouTube video using yt-dlp or similar tool
yt-dlp -f "best[ext=mp4]" https://www.youtube.com/watch?v=YftaRzbBaC4 -o Tutorial.mp4

# Move to videos directory
mv Tutorial.mp4 apps/web/videos/Tutorial.mp4
```

Or download manually and place in `apps/web/videos/` directory.

### 2. Configure Vercel Blob (Optional for Production)

Add to `.env.local` in `apps/web`:

```bash
BLOB_READ_WRITE_TOKEN=your_vercel_blob_token
```

Get token from: https://vercel.com/account/tokens

### 3. Sync Video Files (When you have a proper video)

```bash
cd apps/web
npx next-video sync
```

This will:
- Upload video to Vercel Blob
- Generate optimized versions
- Create metadata JSON file

### 4. Current Behavior

- If video file is empty: **fallback to iframe** (current behavior)
- When video synced: **uses next-video with optimization**
- Supports automatic poster, thumbnails, and streaming

## Files Created/Modified

- `video.d.ts` - TypeScript types for video imports
- `next.config.ts` - Configured with Vercel Blob provider
- `src/components/video-embed.tsx` - Video component wrapper
- `src/components/info-tabs.tsx` - Conditional video rendering for tutorial tab
- `tsconfig.json` - Added video.d.ts to includes
- `videos/` - Directory for video files
