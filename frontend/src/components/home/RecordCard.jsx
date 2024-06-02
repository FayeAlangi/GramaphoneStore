import React from "react";
import RecordSingleCard from "./RecordSingleCard";

const RecordCard = ({ records }) => {
  return (
    <div className="grid sm:grid-cols-2  lg-grid-cols-3 xl-grid-cols-4">
      {records.map((record) => (
        <RecordSingleCard key={record._id} record={record} />
      ))}
    </div>
  );
};

export default RecordCard;
