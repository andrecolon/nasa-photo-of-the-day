import React from 'react'
import { StyledCards } from 'styled-components'

// Props are prpoerties you can pass from ourtside



const NasaCard = (props) =>{
    //destructuring - is taking the object key values and displaying them out as props
    const { title, copyright, date, imageUrl, description} = props//Prperties to be used through out app
    return(
        <div className="nasa-card">
            <h1>{title}</h1>
            <img src="imageUrl}" alt="{title}" />
            <p>{copyright}</p>
            <p>{date}</p>
            <p>{description}</p>
        </div>
    )
}

export default NasaCard