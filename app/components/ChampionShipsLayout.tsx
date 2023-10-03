"use client";
import React, { useState } from "react";
import LeagueBoard from "./leagues";
import ChampionshipBoard from "./ChampionshipBoard";
import { ChampionshipData } from "../types";
import { DaysContainer } from "./daysContainer";

type sevenDaysData = ChampionshipData[];

interface Props {
  sevenDaysData: sevenDaysData[];
}

export default function ChampionShipsLayout({ sevenDaysData }: Props) {
  const [day, setDay] = useState(3);

  const chooseDay = (day: number) => {
    setDay(day);
  };

  return (
    <div className="flex flex-row w-full">
      <section className="flex flex-col flex-grow">
        <DaysContainer chooseDay={chooseDay} currentDay={day} />

        {sevenDaysData[day].map(
          (ChampionshipData: ChampionshipData, index: number) => (
            <ChampionshipBoard key={index} data={ChampionshipData} />
          )
        )}
      </section>
      <section className="hidden md:block px-5 py-5 gap-3.5">
        <div className="flex flex-col">
          {sevenDaysData[day].map(
            (ChampionshipData: ChampionshipData, index: number) => (
              <LeagueBoard key={index} data={ChampionshipData} />
            )
          )}
        </div>
      </section>
    </div>
  );
}
