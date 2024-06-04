import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate,useParams} from "react-router-dom";
import { useSnackbar } from "notistack";

const EditRecord = () => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [releaseYear, setreleaseYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {enqueueSnackbar} = useSnackbar();
  const {id} = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/records/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setArtist(response.data.artist);
        setreleaseYear(response.data.releaseYear);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
 
  const handleEditRecord = (e) => {
    const data = {
      title,
      artist,
      releaseYear,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/records/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Record updated successfully', {variant: 'success'});
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        enqueueSnackbar('Failed to update record', {variant: 'error'});
        setLoading(false);
      });
  };
  return (
    <div className="font-sans font-light p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Edit Record</h1>
      {loading ? <Spinner /> : ""}
      <div className=" felx flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            className="border-2 border-gray-500 px-4 py-2 w-full"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Artist</label>
          <input
            className="border-2 border-gray-500 px-4 py-2 w-full"
            type="text"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Release Date</label>
          <input
            className="border-2 border-gray-500 px-4 py-2 w-full"
            type="text"
            value={releaseYear}
            onChange={(e) => setreleaseYear(e.target.value)}
          />
        </div>
        <button className="bg-yellow-300 hover:bg-sky-400 text-black py-1 px-4 rounded-lg w-full" onClick={handleEditRecord}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditRecord;
