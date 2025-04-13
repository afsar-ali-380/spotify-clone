import { useContext } from "react";
import { assets, songsData } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const Player = () => {
  const {
    seekbg,
    seekbar,
    play,
    pause,
    playerStatus,
    track,
    time,
    previous,
    next,
    seekSong,
  } = useContext(PlayerContext);

  return (
    <>
      <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
        <div className="hidden lg:flex items-center gap-4">
          <img className="w-12" src={track.image} alt="song-image" />
          <div>
            <p>{track.name}</p>
            <p>{track.desc.slice(0, 12)}</p>
          </div>
        </div>
        <div className="flex flex-col  items-center gap-1 m-auto">
          <div className="flex gap-4">
            <img
              className="w-4 cursor-pointer"
              src={assets.shuffle_icon}
              alt="shuffle-icon"
            />
            <img
              className="w-4 cursor-pointer"
              src={assets.prev_icon}
              alt="shuffle-icon"
              onClick={previous}
            />
            {playerStatus ? (
              <img
                className="w-4 cursor-pointer"
                src={assets.pause_icon}
                alt="shuffle-icon"
                onClick={pause}
              />
            ) : (
              <img
                className="w-4 cursor-pointer"
                src={assets.play_icon}
                alt="shuffle-icon"
                onClick={play}
              />
            )}

            <img
              className="w-4 cursor-pointer"
              src={assets.next_icon}
              alt="shuffle-icon"
              onClick={next}
            />
            <img
              className="w-4 cursor-pointer"
              src={assets.loop_icon}
              alt="shuffle-icon"
            />
          </div>
          <div className="flex items-center gap-5">
            <p>{`${time.currentTime.minute}:${time.currentTime.second}`}</p>
            <div
              ref={seekbg}
              className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full  cursor-pointer"
              onClick={(e) => seekSong(e)}
            >
              <hr
                ref={seekbar}
                className="h-1 border-none w-0 bg-green-800 rounded-full"
              />
            </div>
            <p>{`${time.totalTime.minute}:${time.totalTime.second}`}</p>
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-2 opacity-75">
          <img className="w-4" src={assets.play_icon} alt="play-icon" />
          <img className="w-4" src={assets.mic_icon} alt="mic-icon" />
          <img className="w-4" src={assets.queue_icon} alt="queue-icon" />
          <img className="w-4" src={assets.speaker_icon} alt="speaker-icon" />
          <img className="w-4" src={assets.volume_icon} alt="volume-icon" />
          <div className="w-20 bg-slate-50 h-1 rounded"></div>
          <img className="w-4" src={assets.mini_player_icon} alt="mini-icon" />
          <img className="w-4" src={assets.zoom_icon} alt="zoom-icon" />
        </div>
      </div>
    </>
  );
};

export default Player;
