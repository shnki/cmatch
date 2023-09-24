interface ChampionshipData {
  data: {
    championship_title: string;
    championshipsMatches: ChampionshipMatch[];
  };
}
export default function LeagueBoard({
  data: { championship_title, championshipsMatches },
}: ChampionshipData) {
  return <h1 dir="rtl">{championship_title}</h1>;
}
