import React, {useState} from 'react'
import { StyledCards, StyledContainer, StyledBG, StyledImg, StyledBtn } from './styles/StyledCards'


// Props are prpoerties you can pass from ourtside


const NasaCard = (props) =>{

    //destructuring - is taking the object key values and displaying them out as props
    const { title, copyright, date, imageUrl, description} = props//Prperties to be used through out app
    return(
        <StyledBG>
        <StyledContainer>
            
        <StyledCards className="nasa-card">
            <h1>{title}</h1>
            <StyledImg className="potdImg" src={imageUrl} alt={title} />
            <p>{copyright}</p>
                    <p>{date}</p>
            <p>{description}</p>
        </StyledCards>
                {/* <button onClick={() => setDate("2012-12-25")}>today</button> */}
                {/* <StyledBtn onClick={() => setDataState("2020-04-12")}>TODAY</StyledBtn> */}

        </StyledContainer>
        </StyledBG >
    )
}


export default NasaCard