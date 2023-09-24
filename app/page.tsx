import Image from "next/image";
import Header from "./components/head";
import MatchBoard from "./components/matchBoard";
import LeagueBoard from "./components/leagues";

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
  championship_title: string;
  championshipsMatches: ChampionshipMatch[];
}

export default async function Home() {
  const apiUrl: string = process.env.API_URL!;
  const res = await fetch(apiUrl);
  const ChampionshipData = await res.json();
  return (
    <main className="flex flex-col items-center justify-between p-10">
      <Header />
      <div className="flex flex-row w-full">
        <div className="flex flex-col flex-grow">
          {ChampionshipData.map((ChampionshipData: ChampionshipData) =>
            ChampionshipData.championshipsMatches.map(
              (championShipMatch: ChampionshipMatch) => (
                <MatchBoard data={championShipMatch} />
              )
            )
          )}
        </div>
        <div className="hidden md:block">
          {ChampionshipData.map((ChampionshipData: ChampionshipData) => (
            <LeagueBoard data={ChampionshipData} />
          ))}
        </div>
      </div>
    </main>
  );
}
