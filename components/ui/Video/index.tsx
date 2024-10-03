interface IVideoProps {
  title?: string
  src: string
  className?: string
}

const Video = ({ title, src, className }: IVideoProps): JSX.Element => {
  return (
    <iframe
      className={`aspect-video w-full rounded-lg ${className ? className : ''}`}
      src={`https://www.youtube.com/embed/${src}`}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  )
}

export default Video
