import { FC } from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

interface YouTubeProps {
  id: string;
  title: string;
  muted?: boolean;
  autoplay?: boolean;
}

export const YouTube: FC<YouTubeProps> = ({ id, title, muted = true, autoplay = true }) => {
  const autoPlayParam = autoplay ? 'autoplay=1' : 'autoplay=0';
  const params = [
    autoPlayParam,
    'controls=1',
    'loop=1',
    'modestbranding=1',
    'playsinline=1',
    'showinfo=0',
    'rel=0',
  ].join('&');
  return <LiteYouTubeEmbed id={id} title={title} muted={muted} params={params} />;
};
