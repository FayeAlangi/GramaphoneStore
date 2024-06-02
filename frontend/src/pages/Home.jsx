import React from "react";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import RecordTable from "../components/home/RecordTable";
import RecordCard from "../components/home/RecordCard";

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
            <button className="bg-sky-300 hover:bg-sky-400 text-black py-1 px-4 rounded-lg"
            onClick={() => setShowType('table')}>
                Table
            </button>
            <button className="bg-sky-300 hover:bg-sky-400 text-black py-1 px-4 rounded-lg"
            onClick={() => setShowType('card')}>
                Card
            </button>

        </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Records in Gramaphone Store</h1>
        <Link to="/records/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
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
