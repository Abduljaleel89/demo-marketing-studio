import { useEffect, useRef } from "react";

/**
 * Custom hook to manage ambient background audio.
 * Handles browser autoplay restrictions, fade-in/out, and
 * listens for user interaction to start playback safely.
 */
export function useAmbientAudio(soundOn: boolean) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current) return;

    const handleUserInteraction = () => {
      if (initializedRef.current) return;
      initializedRef.current = true;

      const audio = new Audio("/assets/sounds/ambient-hum.mp3");
      audio.loop = true;
      audio.volume = 0;
      audioRef.current = audio;

      // Attempt to start playback after user interaction
      audio
        .play()
        .then(() => {
          const fadeIn = setInterval(() => {
            if (audio.volume < 0.2) audio.volume += 0.02;
            else clearInterval(fadeIn);
          }, 100);
        })
        .catch((err) => {
          console.warn("Audio playback failed:", err);
        });

      // Remove event listeners once initialized
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
    };

    // Wait for a user interaction (click or key press)
    document.addEventListener("click", handleUserInteraction);
    document.addEventListener("keydown", handleUserInteraction);

    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
    };
  }, []);

  // Respond to sound toggle changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (soundOn) {
      // Resume playback with fade-in
      audio
        .play()
        .then(() => {
          const fadeIn = setInterval(() => {
            if (audio.volume < 0.2) audio.volume += 0.02;
            else clearInterval(fadeIn);
          }, 100);
        })
        .catch(() => console.warn("Interaction required for playback."));
    } else {
      // Smooth fade-out before pause
      const fadeOut = setInterval(() => {
        if (audio.volume > 0.02) audio.volume -= 0.02;
        else {
          clearInterval(fadeOut);
          audio.pause();
          audio.currentTime = 0;
        }
      }, 100);
    }
  }, [soundOn]);
}
