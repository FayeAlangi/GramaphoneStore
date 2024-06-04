import React from 'react';
import { Link } from "react-router-dom";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';

function RecordTable({records}) {
  return (
    <table className="w-full border-separate  border-spacing-2">
              <thead className='bg-gray-100 '>
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
              <tbody className='bg-gray-50'>
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
                      {record.releaseYear}
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
  )
}

export default RecordTable;
