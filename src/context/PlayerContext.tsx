import { createContext, useEffect, useRef, useState } from "react";
import { ChildrenPropType, SongItem, TimeType } from "../types/types";
import { songsData } from "../assets/assets";

type ContextValuesType = {
  audioRef: React.RefObject<HTMLAudioElement | null>;
  seekbg: React.RefObject<HTMLDivElement | null>;
  seekbar: React.RefObject<HTMLHRElement | null>;
  track: SongItem;
  setTrack: React.Dispatch<React.SetStateAction<SongItem>>;
  playerStatus: Boolean;
  setPlayerStatus: React.Dispatch<React.SetStateAction<Boolean>>;
  time: TimeType;
  setTime: React.Dispatch<React.SetStateAction<TimeType>>;
  play: () => void;
  pause: () => void;
  playWithId: (id: string) => void;
  previous: () => void;
  next: () => void;
  seekSong: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

export const PlayerContext = createContext<ContextValuesType>(
  {} as ContextValuesType
);

const PlayerContextProvider: React.FC<ChildrenPropType> = ({ children }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const seekbg = useRef<HTMLDivElement | null>(null);
  const seekbar = useRef<HTMLHRElement | null>(null);

  const [track, setTrack] = useState<SongItem>(songsData[0]);
  const [playerStatus, setPlayerStatus] = useState<Boolean>(false);
  const [time, setTime] = useState<TimeType>({
    currentTime: { second: 0, minute: 0 },
    totalTime: { second: 0, minute: 0 },
  });

  useEffect(() => {
    const updateTime = () => {
      if (!audioRef.current || !seekbar.current) return;

      seekbar.current.style.width =
        Math.floor(
          (audioRef.current.currentTime / audioRef.current.duration) * 100
        ) + "%";

      setTime({
        currentTime: {
          second: Math.floor(audioRef.current.currentTime % 60),
          minute: Math.floor(audioRef.current.currentTime / 60),
        },
        totalTime: {
          second: Math.floor(audioRef.current.duration % 60),
          minute: Math.floor(audioRef.current.duration / 60),
        },
      });
    };

    if (audioRef.current) {
      audioRef.current.ontimeupdate = updateTime;
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.ontimeupdate = null; // Cleanup function
      }
    };
  }, [audioRef.current]); // Listen for changes in `audioRef.current`

  const play = () => {
    audioRef.current?.play();
    setPlayerStatus(true);
  };

  const pause = () => {
    audioRef.current?.pause();
    setPlayerStatus(false);
  };

  const playWithId = async (id: string) => {
    await setTrack(songsData[Number(id)]);
    await audioRef.current?.play();
    setPlayerStatus(true);
  };

  const previous = async () => {
    if (Number(track.id) > 0) {
      await setTrack(songsData[Number(track.id) - 1]);
      await audioRef.current?.play();
      setPlayerStatus(true);
    }
  };

  const next = async () => {
    if (Number(track.id) < songsData.length - 1) {
      await setTrack(songsData[Number(track.id) + 1]);
      await audioRef.current?.play();
      setPlayerStatus(true);
    }
  };
  const seekSong = async (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (audioRef.current && seekbg.current) {
      audioRef.current.currentTime =
        (e.nativeEvent.offsetX / seekbg.current.offsetWidth) *
        audioRef.current.duration;
    }
  };
  const contextValues: ContextValuesType = {
    audioRef,
    seekbg,
    seekbar,
    track,
    setTrack,
    playerStatus,
    setPlayerStatus,
    time,
    setTime,
    play,
    pause,
    playWithId,
    previous,
    next,
    seekSong,
  };

  return (
    <PlayerContext.Provider value={contextValues}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
