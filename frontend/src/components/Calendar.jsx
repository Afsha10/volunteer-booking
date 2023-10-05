import React, { useState } from "react";
import { generateDate, months } from "../utils/generateDate";
import dayjs from "dayjs";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import SessionStatusBox from "./SessionStatusBox";
import DateBox from "./DateBox";

function Calendar() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectedDate, setSelectedDate] = useState(currentDate);

  //   const days = [
  //     "Saturday",
  //     "Sunday",
  //     "Monday",
  //     "Tuesday",
  //     "Wednesday",
  //     "Thursday",
  //     "Friday",
  //   ];

  return (
    <div className="flex flex-col lg:flex-row sm:mx-auto  sm:mt-5 sm:divide-x-2 sm:gap-1 h-screen items-start">
      <div className="w-96 h-96 sm:w-3/5">
        {/* displaying the month and year*/}
        <div className="flex justify-between px-6 ">
          <h1 className="font-semibold">
            {months[today.month()]}, {today.year()}
          </h1>
          <div className="flex items-center gap-5">
            {/* Button showing previous month */}
            <GrFormPrevious
              className="w-5 h-5 cursor-pointer"
              onClick={() => setToday(today.month(today.month() - 1))}
            />
            {/* button taking us to be today */}
            <h1
              className="cursor-pointer"
              onClick={() => {
                setToday(currentDate);
              }}
            >
              Today
            </h1>
            {/* Button showing previous month */}
            <GrFormNext
              className="w-5 h-5 cursor-pointer"
              onClick={() => {
                setToday(today.month(today.month() + 1));
              }}
            />
          </div>
        </div>
        {/* getting the days */}
        <div className="w-full grid grid-cols-7 text-gray-700 px-4 sm:px-8">
          {days.map((day, index) => {
            return (
              <h1
                key={index}
                className="h-14 grid place-content-center text-sm"
              >
                {day}
              </h1>
            );
          })}
        </div>
        {/* generating date in the calendar */}
        <div className="w-full grid grid-cols-7 px-8 sm:px-8">
          {generateDate(today.month(), today.year()).map(
            ({ date, currentMonth, today }, index) => {
              return (
                <DateBox
                  key={index}
                  index={index}
                  date={date}
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                  currentMonth={currentMonth}
                  today={today}
                />
              );
            }
          )}
        </div>
      </div>

      <SessionStatusBox selectedDate={selectedDate} />
    </div>
  );
}

export default Calendar;
