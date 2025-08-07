import React, { useEffect, useRef } from 'react';

const BackgroundMusic: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      console.log('Audio element not found!');
      return;
    }

    console.log('Setting up background music...');

    // Set up the audio
    audio.loop = true;
    audio.volume = 0.5; // Increased volume
    audio.preload = 'auto';

    // Check if audio can play
    const canPlay = audio.canPlayType('audio/mpeg');
    console.log('Can play MP3:', canPlay);

    // Handle audio load
    const handleCanPlay = () => {
      console.log('Audio loaded and ready to play');
    };

    // Handle audio errors
    const handleError = (e: Event) => {
      console.error('Audio error:', e);
    };

    // Handle audio play
    const handlePlay = () => {
      console.log('🎵 Music is now playing!');
    };

    // Add event listeners
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('error', handleError);
    audio.addEventListener('play', handlePlay);

    // Click handler to start music
    const handleClick = () => {
      console.log('User clicked, attempting to play music...');
      audio.play().then(() => {
        console.log('✅ Music started successfully!');
      }).catch((error) => {
        console.error('❌ Error playing music:', error);
      });
      document.removeEventListener('click', handleClick);
    };

    // Add click listener
    document.addEventListener('click', handleClick);

    // Try to play immediately
    console.log('Attempting auto-play...');
    audio.play().then(() => {
      console.log('✅ Auto-play successful!');
    }).catch((error) => {
      console.log('⚠️ Auto-play failed, waiting for user interaction:', error);
    });

    return () => {
      console.log('Cleaning up audio...');
      document.removeEventListener('click', handleClick);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('play', handlePlay);
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
      controls={false}
    />
  );
};

export default BackgroundMusic; 