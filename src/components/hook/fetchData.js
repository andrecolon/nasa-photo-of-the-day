import React, { useEffect } from 'react'
import axios from 'axios'

const [dataState, setDataState] = useState({});
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
randomDate(new Date(2012, 0, 1), new Date());
const randomDate = setDate;
const [date, setDate]

useEffect(() => {
    const fetchNasaPotd = () =>
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=hRhUbTc3zZX0dBodair3uuRFyisuXZr8GwTgKQi2&date=${date}')
            .then(response => {
                console.log(response.data);
                setDataState(response.data);

            })
            .catch(err => {
                console.log(err, "this is the error")
            });

    fetchNasaPotd();

}, [])