import  styled from 'styled-components'


export const StyledBG = styled.body`
  background-image: ${props => `url(${props.hdurl})`};
  background-color: gold;
  background-position: center;
  background-repeat: repeat;
  background-size: cover;
  width:100%
  filter: blur(8px);
`;
export const StyledContainer = styled.div`
  width: 70%;
  height: 100%;
  margin: 0 auto;
  background-color: blue;
  color:white;
  padding: 20px;
  position: relative;
  z-index: 1;
`;

export const StyledCards = styled.div`

h1 {
    position: relative;
    top: 100px;
    color:white;
    z-index: 2;
}

`;

export const StyledImg = styled.img`
max-width: 100%
`;

export const StyledBtn = styled.button`
padding: 20px;
width: 10%;
background-color: red;
color: white;
font-weight: 900;

`;

