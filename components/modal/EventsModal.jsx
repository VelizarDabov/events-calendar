import { Dialog } from "@headlessui/react";
import React, { useState } from "react";

const EventsModal = ({ name, isOpen, startHour, endHour, setIsOpen}) => {
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <Dialog open={isOpen} onClose={handleClose} className="relative z-50 ">
      <div className="fixed inset-0 bg-black/30 " aria-hidden="true" />

      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-sm rounded bg-white p-10">
          <Dialog.Title className="flex underline mb-5 font-bold items-center justify-center text-xl">
            {name}
          </Dialog.Title>
          <Dialog.Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            delectus maiores totam natus impedit autem quod similique saepe
            nesciunt ab.
          </Dialog.Description>
          <div className="mt-5 ">
            <p className="underline">Начало: {startHour}:00</p>
            <p className="underline"> Край: {endHour}:00</p>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default EventsModal;
