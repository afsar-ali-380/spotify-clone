import Navbar from "./Navbar";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";
import { songsData } from "../assets/assets";
import { albumsData } from "../assets/assets";

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item) => (
            <AlbumItem key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today's big hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((item) => (
            <SongItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
