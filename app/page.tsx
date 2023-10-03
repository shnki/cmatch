import Header from "./components/head";

import moment from "moment";
import { daysRangeArray } from "./utls/dateUtils";
import ChampionShipsLayout from "./components/ChampionShipsLayout";

export default async function Home() {
  const fetchApiData = async (
    date: string = moment(new Date()).format("DD/MM/YYYY")
  ) => {
    const apiUrl: string = process.env.API_URL + `?date=${date}`!;
    const res = await fetch(apiUrl, { cache: "no-store" });
    return await res.json();
  };

  const fetchSevenDaysData = async () => {
    const res = [];
    for (let i = 0; i < daysRangeArray().length; i++) {
      res.push(await fetchApiData(daysRangeArray()[i].format));
    }
    return res;
  };
  const sevenDaysData = await fetchSevenDaysData();

  return (
    <main className="flex flex-col items-center justify-between p-5 md:p-10 gap-5">
      <Header />
      <ChampionShipsLayout sevenDaysData={sevenDaysData} />
    </main>
  );
}
