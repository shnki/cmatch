import Image from "next/image";
import Header from "./components/head";
import MatchBoard from "./components/matchBoard";
import LeagueBoard from "./components/leagues";
import ChampionshipBoard from "./components/ChampionshipBoard";
import { ChampionshipData } from "./types";

export default async function Home() {
  const apiUrl: string = process.env.API_URL!;
  const res = await fetch(apiUrl, { cache: "no-store" });
  const ChampionshipData = await res.json();
  return (
    <main className="flex flex-col items-center justify-between p-10">
      <Header />
      <div className="flex flex-row w-full">
        <div className="flex flex-col flex-grow">
          {ChampionshipData.map((ChampionshipData: ChampionshipData) => (
            <ChampionshipBoard
              key={ChampionshipData.championship_title}
              data={ChampionshipData}
            />
          ))}
        </div>
        <div className="hidden md:block px-5 py-5 gap-3.5">
          <div className="flex flex-col">
            {ChampionshipData.map((ChampionshipData: ChampionshipData) => (
              <LeagueBoard
                key={ChampionshipData.championship_title}
                data={ChampionshipData}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
