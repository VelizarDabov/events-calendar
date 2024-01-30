import React from "react";
import Events from "./Events";
import { events } from "./EventsData";
const WeeklyCalendar = () => {
  const daysOfWeek = [
    "Понеделник",
    "Вторник",
    "Сряда",
    "Четвъртък",
    "Петък",
    "Събота",
    "Неделя",
  ];
  const date = new Date();
  const currentDay = date.getDay() - 1;
  const currentHour = date.getHours();
  const currentDayOfMonth = date.getDate();

  const dayWidth = `${100 / 7}%`;

  return (
    <div className="mx-3">
      <table className="w-full">
        <thead>
          <tr>
            <th className="p-2">Time</th>
            {daysOfWeek.map((day, index) => {
              //days count to monday
              let daysToMonday = currentDay - 1;
              //sunday functionality because days start from 0 - 6
              daysToMonday = daysToMonday < 0 ? 6 : daysToMonday;

              const currentDayDate = new Date(
                date.getFullYear(),
                date.getMonth(),
                date.getDate() - daysToMonday + index
              ).getUTCDate();

              return (
                <th
                  key={index}
                  className={`p-2 ${
                    index === currentDay ? "underline text-yellow-500" : ""
                  }`}
                  style={{ width: dayWidth }}
                >
                  <div className="">
                    {day} -{" "}
                    {currentDayDate < 10
                      ? `0${currentDayDate}`
                      : `${currentDayDate}`}
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {[...Array(24)].map((_, hour) => {
            const hasEventsForHour = daysOfWeek.some((_, index) => {
              const event = events.find(
                (e) => e.day === index && e.hour === hour
              );
              return event !== undefined;
            });

            return hasEventsForHour ? (
              <tr key={hour}>
                <td className="p-10 h-32 border-b">{`${hour
                  .toString()
                  .padStart(2, "0")}:00`}</td>
                {daysOfWeek.map((_, index) => {
                  const event = events.find(
                    (e) => e.day === index && e.hour === hour
                  );
                  return (
                    <td key={index} className="border">
                      {event && (
                        <Events
                          name={event.teacherName}
                          startHour={event.hour}
                          endHour={event.endHour}
                          day={event.day}
                          skills={event.skills}
                          currentDay={currentDay}
                          currentHour={currentHour}
                        />
                      )}
                    </td>
                  );
                })}
              </tr>
            ) : null;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default WeeklyCalendar;
