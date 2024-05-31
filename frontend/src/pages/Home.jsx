import React from "react";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';

const Home = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);
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
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Records List</h1>
        <Link to="/records/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
        </div>
          {loading ? (
            <Spinner />
          ) : (
            <table className="w-full border-separate border-spacing-2">
              <thead>
                <tr>
                  <th className="border border-slate-600 rounder-md">No</th>
                  <th className="border border-slate-600 rounder-md">Title</th>
                  <th className="border border-slate-600 max-md:hidden">
                    Artist
                  </th>
                  <th className="border border-slate-600 max-md:hidden">
                    Release Date
                  </th>
                  <th className="border border-slate-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {records.map((record, index) => (
                  <tr key={record._id}>
                    <td className="border border-slate-300 rounded-md text-center">
                      {index + 1}
                    </td>
                    <td className="border border-slate-300 rounded-md text-center">
                      {record.title}
                    </td>
                    <td className="border border-slate-300 rounded-md text-center max-md:hidden">
                      {record.artist}
                    </td>
                    <td className="border border-slate-300 rounded-md text-center max-md:hidden">
                      {record.releaseDate}
                    </td>
                    <td className="border border-slate-300 rounded-md text-center">
                      <div className="flex justify-center gap-x-4">
                        <Link to={`/records/details/${record._id}`}>
                          <BsInfoCircle className="'text-2xl text-green-800" />
                        </Link>
                        <Link to={`/records/edit/${record._id}`}>
                          <AiOutlineEdit className="'text-2xl text-yellow-600" />
                        </Link>
                        <Link to={`/records/delete/${record._id}`}>
                          <MdOutlineDelete className="'text-2xl text-red-600" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
    </div>
  )}

export default Home;
