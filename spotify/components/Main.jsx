import React from "react";
import ItemList from "./ItemList";
import { artistArray } from "../src/assets/database/artists";
import { songsArray } from "../src/assets/database/songs";
import Header from "./Header";

const Main = ({ type }) => {
  return (
    <>
      <Header/>
      <div className="main">
        {type === "artists" || type === undefined ? (
          <ItemList
            title="Artistas"
            items={10}
            itemsArray={artistArray}
            path="/artists"
            idPath="/artist"
          />
        ) : (
          <></>
        )}
        {type === "songs" || type === undefined ? (
          <ItemList
            title="Músicas"
            items={20}
            itemsArray={songsArray}
            path="/songs"
            idPath="/song"
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Main;
