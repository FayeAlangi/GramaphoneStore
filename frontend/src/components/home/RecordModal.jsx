import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { BiUserCircle } from "react-icons/bi";
import { VscCalendar } from "react-icons/vsc";

const RecordModal = ({ record, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 bottom-0 right-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => {
          event.stopPropagation();
        }}
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          className="absolute top-6 right-6 text-3xl text-red-300  cursor-pointer"
          onClick={onClose}
        />
        <div className="flex justify-start items-center gap-x-2">
          <IoMusicalNotesOutline className="text-2xl text-orange-300" />
          <h2 className="my-1">{record.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-2xl text-orange-300" />
          <h2 className="my-1">{record.artist}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
        <VscCalendar className="text-2xl text-orange-300" />
        <h2 className="my-1">{`Released : ${record.releaseYear}`}</h2>
      </div>
        {/* <p className="mt-4">Anything you want to show</p>
        <p className="my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p> */}
      </div>
      RecordModal
    </div>
  );
};

export default RecordModal;
