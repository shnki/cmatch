interface ChampionshipData {
  data: {
    championship_title: string;
    championshipsMatches: ChampionshipMatch[];
  };
}
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

export default function LeagueBoard({
  data: { championship_title, championshipsMatches },
}: ChampionshipData) {
  return (
    <a href={"#" + championship_title} dir="rtl">
      {championship_title}
    </a>
  );
}
