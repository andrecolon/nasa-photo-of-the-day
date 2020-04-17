import React, { useEffect } from 'react'
import axios from 'axios'

const [dataState, setDataState] = useState('');

const FetchData = () =>
useEffect(() => {
    const fetchNasaPotd = () =>
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=hRhUbTc3zZX0dBodair3uuRFyisuXZr8GwTgKQi2&date=2018-04-20`)
            .then(response => {
                console.log(response, 'anything here?');
                setDataState(response.data);

            })
            .catch(err => {
                console.log(err, "this is the error")
            });

    fetchNasaPotd();

}, [])

export default FetchData