import { useNavigate } from "react-router-dom";
import { AlbumItemProps } from "../types/types";

const AlbumItem: React.FC<AlbumItemProps> = ({ item }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
        onClick={() => navigate(`/album/${item.id}`)}
      >
        <img className="rounded" src={item.image} alt="album-image" />
        <p className="font-bold mt-2 mb-1">{item.name}</p>
        <p className="text-slate-200 text-sm">{item.desc}</p>
      </div>
    </>
  );
};

export default AlbumItem;
