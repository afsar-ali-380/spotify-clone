import { useContext } from "react";
import { SongItemProps } from "../types/types";
import { PlayerContext } from "../context/PlayerContext";

const SongItem: React.FC<SongItemProps> = ({ item }) => {
  const { playWithId } = useContext(PlayerContext);

  return (
    <>
      <div
        onClick={() => playWithId(item.id)}
        className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
      >
        <img className="rounded" src={item.image} alt="album-image" />
        <p className="font-bold mt-2 mb-1">{item.name}</p>
        <p className="text-slate-200 text-sm">{item.desc}</p>
      </div>
    </>
  );
};

export default SongItem;
