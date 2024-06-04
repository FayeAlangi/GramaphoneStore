import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineDelete } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { VscCalendar } from "react-icons/vsc";

import RecordModal from "./RecordModal";

const RecordSingleCard = ({ record }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div
      key={record._id}
      className=" flex flex-col  items-center border-2 border-gray-500 bg-gray-100 rounded-lg px-6 py-6 m-4 relative hover:shadow-xl"
    >
      <div className="flex justify-start  gap-x-2">
        <IoMusicalNotesOutline className="text-2xl text-black-300" />
        <h2 className="my-1">{`Title : ${record.title}`}</h2>
      </div>
      <div className="flex justify-start gap-x-2">
        <BiUserCircle className="text-2xl text-black-300" />
        <h2 className="my-1">{`Artist : ${record.artist}`}</h2>
      </div>
      <div className="flex justify-start  gap-x-2">
        <VscCalendar className="text-2xl text-black-300" />
        <h2 className="my-1">{`Released : ${record.releaseYear}`}</h2>
      </div>
      <div className="flex justify-between  gap-x-2 mt-4 p-4">
        <BiShow
          className="text-3xl text-green-800 hover:text-black"
          onClick={() => setShowModal(true)}
        />
        <Link to={`/records/details/${record._id}`}>
          <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
        </Link>
        <Link to={`/records/edit/${record._id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
        </Link>
        <Link to={`/records/delete/${record._id}`}>
          <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
        </Link>
      </div>
      {showModal && (
        <RecordModal record={record} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default RecordSingleCard;
