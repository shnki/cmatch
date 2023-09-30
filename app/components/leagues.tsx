import { ChampionshipData } from "../types";

export default function LeagueBoard(props: { data: ChampionshipData }) {
  const { championship_title } = props.data;
  return (
    <a href={"#" + championship_title} dir="rtl">
      {championship_title}
    </a>
  );
}
