import { useEffect, useRef } from "react";

const TARGET_GAIN = 0.22;

const createWarmNoise = (context: AudioContext) => {
  const bufferSize = context.sampleRate * 2;
  const noiseBuffer = context.createBuffer(1, bufferSize, context.sampleRate);
  const output = noiseBuffer.getChannelData(0);
  let lastOut = 0;

  for (let i = 0; i < bufferSize; i += 1) {
    const white = Math.random() * 2 - 1;
    output[i] = (lastOut + 0.02 * white) / 1.02;
    lastOut = output[i];
    output[i] *= 0.6;
  }

  const source = context.createBufferSource();
  source.buffer = noiseBuffer;
  source.loop = true;
  return source;
};

/**
 * Custom hook to manage ambient background audio.
 * Uses Web Audio to generate a lightweight hum so no large assets are fetched.
 */
export function useAmbientAudio(soundOn: boolean) {
  const initializedRef = useRef(false);
  const contextRef = useRef<AudioContext | null>(null);
  const gainRef = useRef<GainNode | null>(null);
  const noiseRef = useRef<AudioBufferSourceNode | null>(null);

  useEffect(() => {
    if (initializedRef.current) return;

    const handleUserInteraction = () => {
      if (initializedRef.current) return;
      initializedRef.current = true;

      const context = new AudioContext();
      const masterGain = context.createGain();
      masterGain.gain.value = 0;
      masterGain.connect(context.destination);

      const filter = context.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.value = 900;
      filter.Q.value = 0.8;
      filter.connect(masterGain);

      const noise = createWarmNoise(context);
      noise.connect(filter);
      noise.start();

      contextRef.current = context;
      gainRef.current = masterGain;
      noiseRef.current = noise;
    };

    document.addEventListener("click", handleUserInteraction, { once: true });
    document.addEventListener("keydown", handleUserInteraction, { once: true });

    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
    };
  }, []);

  useEffect(() => {
    const context = contextRef.current;
    const masterGain = gainRef.current;
    if (!context || !masterGain) return;

    const rampDuration = soundOn ? 1.8 : 1.2;
    const target = soundOn ? TARGET_GAIN : 0;

    const resume = async () => {
      if (context.state === "suspended") {
        try {
          await context.resume();
        } catch (err) {
          console.warn("Audio context resume failed", err);
        }
      }
    };

    resume().finally(() => {
      masterGain.gain.cancelScheduledValues(context.currentTime);
      masterGain.gain.linearRampToValueAtTime(target, context.currentTime + rampDuration);
    });
  }, [soundOn]);

  useEffect(() => {
    return () => {
      try {
        noiseRef.current?.stop();
      } catch (_err) {
        // ignore stop errors during teardown
      }
      contextRef.current?.close?.();
      noiseRef.current = null;
      gainRef.current = null;
      contextRef.current = null;
    };
  }, []);
}
