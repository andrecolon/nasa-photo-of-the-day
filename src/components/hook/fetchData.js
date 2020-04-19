import React, {useState, useEffect } from 'react'
import axios from 'axios'

const [dataState, setDataState] = useState({});

useEffect(() => {
    const fetchNasaPotd = () =>
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=hRhUbTc3zZX0dBodair3uuRFyisuXZr8GwTgKQi2${date}`)
            .then(response => {
                console.log(response.data);
                setDataState(response.data);

            })
            .catch(err => {
                console.log(err, "this is the error")
            });

    fetchNasaPotd();

}, [date])