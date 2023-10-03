import Image from "next/image";
import { ChampionshipMatch } from "../types";

export default function MatchBoard(props: { data: ChampionshipMatch }) {
  const {
    team_a,
    team_b,
    team_A_image,
    team_B_image,
    round,
    score,
    matches,
    channel,
    status,
    detailsUrl,
  } = props.data;
  return (
    <div className="flex flex-col justify-center items-center border-2 w-full px-5 py-2">
      <h1
        className={`${
          status !== "انتهت" && status !== "لم تبدأ" && status !== "مؤجلة"
            ? "animate-blink"
            : ""
        } md:text-md lg:text-lg text-center p-1`}
      >
        {status}
      </h1>

      <div className="flex flex-row justify-between w-full">
        <h1 dir="rtl" className="md:text-md lg:text-lg">
          {channel}
        </h1>
        <h1 className="md:text-md lg:text-lg">{round}</h1>
      </div>

      <div className="flex flex-row justify-center items-center py-5 w-full">
        <div className="flex flex-col justify-center items-center gap-4 grow basis-1">
          <Image src={team_A_image} width={50} height={50} alt={team_a} />
          <h1 className="text-center">{team_a}</h1>
        </div>
        <h1 className="text-center grow basis-1">{score}</h1>
        <div className="flex flex-col justify-center items-center gap-4 grow basis-1">
          <Image src={team_B_image} width={50} height={50} alt={team_b} />
          <h1 className="text-center">{team_b}</h1>
        </div>
      </div>
      <div className="flex justify-around w-full"></div>

      <h1>{matches}</h1>
    </div>
  );
}
