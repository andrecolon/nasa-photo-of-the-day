import React, {useState, useEffect} from 'react';
import NasaCard from './components/NasaCard';
import { StyledCards }  from './components/styles/StyledCards'
import axios from 'axios'

//import Hook
//import Axios from './components/hook/fetchData'




function Home() {
    const [dataState, setDataState] = useState('');

    useEffect(() => {
        const fetchNasaPotd = () =>
            axios.get(`https://api.nasa.gov/planetary/apod?api_key=hRhUbTc3zZX0dBodair3uuRFyisuXZr8GwTgKQi2&date=2020-04-15`)
            .then(response =>{
               // console.log(response.data);
                setDataState(response.data);
        
                })
            .catch(err  => {
                    console.log(err, "this is the error")
                });
                
    fetchNasaPotd();

    }, [])
//console.log(date)

return (
    
    <StyledCards className="nasa-obj">
<NasaCard
            title={dataState.title}
            copyright={dataState.copyright}
                date={dataState.date}
            imageUrl={dataState.url}
            description={dataState.explanation}
            
/>


    </StyledCards>
    
)
}



export default Home
