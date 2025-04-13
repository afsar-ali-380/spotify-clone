import { Route, Routes } from "react-router-dom";
import { albumsData } from "../assets/assets";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const Display = () => {
  const displayRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.slice(-1) : "";
  const bgColor = albumsData[Number(albumId)].bgColor;

  useEffect(() => {
    if (displayRef.current) {
      if (isAlbum) {
        displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
      } else {
        displayRef.current.style.background = "#121212";
      }
    }
  }, [bgColor, isAlbum]);

  return (
    <>
      <div
        ref={displayRef}
        className="w-[100%] m-2 px-6 pt-4 rounded  bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0"
      >
        <Routes>
          <Route path="/" element={<DisplayHome />}></Route>
          <Route path="/album/:id" element={<DisplayAlbum />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default Display;
