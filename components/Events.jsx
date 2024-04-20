
"use client";
import React, { useState } from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import EventsModal from "./modal/EventsModal";
import { FaCircle } from "react-icons/fa6";
const Events = ({ name, startHour, endHour, day, skills, currentDay, currentHour}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleEventClick = () => {
    setIsOpen(true);
  };

  return (
    <div
      className={
        day === currentDay
          ? "flex border border-green-400 rounded-lg p-1 cursor-pointer mx-1"
          : "flex border rounded-lg p-1 cursor-pointer mx-1"
      }
      onClick={handleEventClick}
    >
      <div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
        <div className="flex mt-2">
          {skills.map((skill) => (
            <div key={skill} className=" text-black text-xs ">
              <p
                className={
                  skill === "A1-1"
                    ? "bg-green-300 rounded-xl p-1"
                    : "" || skill === "A2-2"
                    ? "bg-green-400 rounded-xl p-1"
                    : "" || skill === "A1-2"
                    ? "bg-green-400 rounded-xl p-1"
                    : "" || skill === "B1-1"
                    ? "bg-orange-300 rounded-xl p-1"
                    : "" || skill === "B2"
                    ? "bg-orange-400 rounded-xl p-1"
                    : ""
                }
              >
                {skill}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="ml-3 text-sm">
        <h2>{name}</h2>
        <div className="flex ">
          <FaCircle
            className={
              day === currentDay
                ? "text-green-500 w-2.5 mt-1"
                : "text-gray-200 w-2.5 mt-1"
            }
          />
          <div className="grid grid-col">
          <p className="ml-1">
            {currentHour === startHour && day === currentDay ? 'сега: ' : '' 
            || day === currentDay 
              ? "днес: "
              : "" || day === currentDay + 1
              ? "утре: "
              : "" }
            {startHour}:00 - {endHour}:00
          </p>
          <p>
            {day === currentDay && currentHour !== startHour  ? `(след ${startHour - currentHour} часа)`: '' }
         
          </p>
          </div>
          
        </div>
      </div>
      {handleEventClick && (
        <EventsModal
          isOpen={isOpen}
          startHour={startHour}
          endHour={endHour}
          setIsOpen={setIsOpen}
          name={name}
       
        />
      )}
    </div>
  );
};

export default Events;
