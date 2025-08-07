import React, { useEffect, useRef } from 'react';

const BackgroundMusic: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set up the audio
    audio.loop = true;
    audio.volume = 0.3;
    audio.preload = 'auto';

    // Simple click handler to start music
    const handleClick = () => {
      audio.play().then(() => {
        console.log('Music started!');
      }).catch((error) => {
        console.log('Error playing music:', error);
      });
      document.removeEventListener('click', handleClick);
    };

    // Add click listener
    document.addEventListener('click', handleClick);

    // Try to play immediately
    audio.play().then(() => {
      console.log('Auto-play successful!');
    }).catch((error) => {
      console.log('Auto-play failed, waiting for user interaction:', error);
    });

    return () => {
      document.removeEventListener('click', handleClick);
      if (audio) {
        audio.pause();
      }
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/Enchanting Flute - Krishna Aur Kans - Full Video Song.mp3"
      preload="auto"
    />
  );
};

export default BackgroundMusic; 