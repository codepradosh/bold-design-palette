import React, { useEffect, useRef } from 'react';

const BackgroundMusic: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set up the audio for background play
    audio.loop = true;
    audio.volume = 0.3; // Start at 30% volume for background music
    audio.preload = 'auto';

    // Auto-play the music (muted initially for better UX)
    const playMusic = async () => {
      try {
        audio.muted = false;
        await audio.play();
      } catch (error) {
        console.log('Auto-play prevented by browser. User needs to interact first.');
        // Add a one-time click listener to start music
        const startMusic = () => {
          audio.play();
          document.removeEventListener('click', startMusic);
        };
        document.addEventListener('click', startMusic);
      }
    };

    // Start playing after a short delay
    const timer = setTimeout(playMusic, 1000);

    return () => {
      clearTimeout(timer);
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
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