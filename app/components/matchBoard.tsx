import Image from "next/image";

interface ChampionshipMatch {
  data: {
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
  };
}

export default function MatchBoard({
  data: {
    championship_title,
    team_a,
    team_b,
    team_A_image,
    team_B_image,
    round,
    score,
    matches,
    channel,
    status,
  },
}: ChampionshipMatch) {
  return (
    <div className="flex flex-col justify-center items-center border-2 w-full px-5 ">
      <h1 className="md:text-md lg:text-lg text-center">{status}</h1>

      <div className="flex flex-row justify-between w-full">
        <h1 dir="rtl" className="md:text-md lg:text-lg">
          {channel}
        </h1>
        <h1 className="md:text-md lg:text-lg">{round}</h1>
      </div>

      <div className="flex flex-row justify-center items-center gap-4 py-5">
        <div className="block">
          <Image src={team_A_image} width={50} height={50} alt={team_a} />
        </div>
        <h1 className="text-center">{score}</h1>
        <div className="flex flex-row justify-center items-center gap-4">
          <Image src={team_B_image} width={50} height={50} alt={team_b} />
        </div>
      </div>
      <div className="flex justify-around w-full">
        <h1>{team_a}</h1>
        <h1>{team_b}</h1>
      </div>

      <h1>{matches}</h1>
    </div>
  );
}
