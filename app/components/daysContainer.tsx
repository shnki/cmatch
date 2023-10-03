"use client";
import React from "react";
import { daysRangeArray } from "../utls/dateUtils";

interface Props {
  chooseDay: (day: number) => void;
  currentDay: number;
}

export const DaysContainer = ({ chooseDay, currentDay }: Props) => {
  const dateArray = daysRangeArray();
  return (
    <div className="flex flex-row-reverse gap-1 ">
      {dateArray.map((day, index: number) => (
        <div
          className={`${
            currentDay === index ? "bg-black text-white" : "bg-white"
          }  text-black flex flex-col justify-center items-center grow basis-1 cursor-pointer hover:text-white hover:bg-black`}
          key={index}
          onClick={() => chooseDay(index)}
        >
          <h1 className="text-[0.6rem] sm:text-sm text-center">
            {day.dayOfWeek}
          </h1>
          <h1 className="text-[0.6rem] sm:text-sm text-center">{day.number}</h1>
          <h1 className="text-[0.6rem] sm:text-sm text-center">{day.month}</h1>
        </div>
      ))}
    </div>
  );
};
