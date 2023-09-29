"use client";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";
import MatchBoard from "./matchBoard";

interface ChampionshipMatch {
  championship_title: string;
  team_a: string;
  team_b: string;
  team_A_image: string;
  team_B_image: string;
  round: string;
  score: string;
  matches: string;
  channel: string;
  status: string;
}

interface ChampionshipData {
  data: {
    championship_title: string;
    championshipsMatches: ChampionshipMatch[];
  };
}
export default function ChampionshipBoard(props: { data: any }) {
  const { championship_title, championshipsMatches } = props.data;
  const [dropDown, setdropDown] = useState(false);
  return (
    <div id={championship_title} key={championship_title} className="py-5">
      <div
        className="flex flex-row-reverse justify-center items-center bg-white cursor-pointer"
        onClick={() => setdropDown(!dropDown)}
      >
        <h1 className="bg-white text-black px-5 flex-1" dir="rtl">
          {championship_title}
        </h1>
        {dropDown ? (
          <FiChevronLeft color="black" />
        ) : (
          <FiChevronDown color="black" />
        )}
      </div>
      <div className={`${dropDown ? "hidden" : ""}`}>
        {championshipsMatches.map((championShipMatch: ChampionshipMatch) => (
          <MatchBoard
            key={championShipMatch.championship_title}
            data={championShipMatch}
          />
        ))}
      </div>
    </div>
  );
}
