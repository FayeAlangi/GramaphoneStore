import React from "react";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import axios from "axios";
import { Link } from "react-router-dom";
import { PiMusicNotesPlusBold} from "react-icons/pi";
import RecordTable from "../components/home/RecordTable";
import RecordCard from "../components/home/RecordCard";
import {FaRecordVinyl} from "react-icons/fa";

const Home = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/records")
      .then((response) => {
        setLoading(false);
        setRecords(response.data.data);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);
  return (
    <div className="p-8 font-sans font-light">
        <div className="flex justify-center items-center gap-x-4">
            <button className="bg-yellow-300 hover:bg-sky-400 text-black py-1 px-4 rounded-lg"
            onClick={() => setShowType('table')}>
                Table View
            </button>
            <button className="bg-yellow-300 hover:bg-sky-400 text-black py-1 px-4 rounded-lg"
            onClick={() => setShowType('card')}>
                Card View
            </button>

        </div>
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center relative"> 
        <FaRecordVinyl className="text-orange-500 text-4xl  opacity-90"/>
        <h1 className="text-3xl my-8">Gramaphone Store Records</h1></div>
        <Link to="/records/create">
          <PiMusicNotesPlusBold className="text-orange-500 hover:text-sky-400 text-4xl" />
        </Link>
        </div>
          {loading ? (
            <Spinner />
          ) : showType== 'table'?(
           <RecordTable records={records} />
          ):(<RecordCard records={records} />)}
    </div>
  )}

export default Home;
