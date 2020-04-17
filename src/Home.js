import React, {useState, useEffect} from 'react';
import NasaCard from './components/NasaCard'
import axios from 'axios'

//import Hook
//import Axios from './components/hook/fetchData'


function Home() {
    const [dataState, setDataState] = useState({});

    useEffect(() => {
        const fetchNasaPotd = () =>
            axios.get(`https://api.nasa.gov/planetary/apod?api_key=hRhUbTc3zZX0dBodair3uuRFyisuXZr8GwTgKQi2&date=2006-12-18&date=2008-10-31`)
            .then(response =>{
                console.log(response.data);
                setDataState(response.data);
        
                })
                .catch(err  => {
                    console.log(err, "this is the error")
                });
                
    fetchNasaPotd();

},[])


return (
    <div className="nasa-obj">
<NasaCard
            title={dataState.title}
            copyright={dataState.copyright}
            date={dataState.date}
            imageUrl={dataState.url}
            description={dataState.explanation}
/>
    </div>
)
}



export default Home
