"use client";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";
import MatchBoard from "./matchBoard";
import { ChampionshipMatch } from "../types";

export default function ChampionshipBoard(props: { data: any }) {
  const { championship_title, championshipsMatches } = props.data;
  const [dropDown, setdropDown] = useState(false);
  return (
    <div className="py-5">
      <div
        className="flex flex-row-reverse justify-center items-center sticky top-0 z-50 bg-white cursor-pointer"
        onClick={() => setdropDown(!dropDown)}
      >
        <h1
          id={championship_title}
          className="bg-white text-black px-5 flex-1"
          dir="rtl"
        >
          {championship_title}
        </h1>
        {dropDown ? (
          <FiChevronLeft color="black" />
        ) : (
          <FiChevronDown color="black" />
        )}
      </div>
      <div className={`${dropDown ? "hidden" : ""}`}>
        {championshipsMatches.map(
          (championShipMatch: ChampionshipMatch, index: number) => (
            <MatchBoard key={index} data={championShipMatch} />
          )
        )}
      </div>
    </div>
  );
}
