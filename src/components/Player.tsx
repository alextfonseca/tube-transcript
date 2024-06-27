import ReactPlayer from 'react-player'

interface IPlayerProps {
  videoUrl: string
}

export function Player({ videoUrl }: IPlayerProps) {
  if (!videoUrl) {
    return <div className="h-[200px] w-full rounded bg-zinc-800" />
  }

  return (
    <ReactPlayer
      width="100%"
      height="200px"
      url={videoUrl}
      controls={true}
      light={false}
      pip={true}
    />
  )
}
