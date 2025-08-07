import React, { useEffect, useRef, useState } from 'react';

const BackgroundMusic: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set up the audio for background play
    audio.loop = true;
    audio.volume = 0.3; // Start at 30% volume for background music
    audio.preload = 'auto';

    // Function to start music
    const startMusic = async () => {
      try {
        audio.muted = false;
        await audio.play();
        setIsPlaying(true);
        console.log('Background music started successfully');
      } catch (error) {
        console.log('Auto-play prevented by browser. User needs to interact first.');
        setIsPlaying(false);
      }
    };

    // Add multiple event listeners for user interaction
    const events = ['click', 'touchstart', 'keydown', 'scroll'];
    const handleUserInteraction = () => {
      if (!isPlaying) {
        startMusic();
        // Remove all event listeners after first interaction
        events.forEach(event => {
          document.removeEventListener(event, handleUserInteraction);
        });
      }
    };

    // Add event listeners for user interaction
    events.forEach(event => {
      document.addEventListener(event, handleUserInteraction, { once: true });
    });

    // Try to auto-play after a delay
    const timer = setTimeout(startMusic, 2000);

    return () => {
      clearTimeout(timer);
      events.forEach(event => {
        document.removeEventListener(event, handleUserInteraction);
      });
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, [isPlaying]);

  return (
    <audio
      ref={audioRef}
      src="/Enchanting Flute - Krishna Aur Kans - Full Video Song.mp3"
      preload="auto"
    />
  );
};

export default BackgroundMusic; 