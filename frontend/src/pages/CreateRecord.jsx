import React,{useState} from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const CreateRecord = () => {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleSaveRecord = (e) => {
        const data = {
            title,
            artist,
            releaseDate,
        };
        setLoading(true);
        axios
            .post('http://localhost:5555/records', data)
            .then(() => {
                setLoading(false);
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
        }
  return (
    <div>CreateRecord</div>
  )
}

export default CreateRecord