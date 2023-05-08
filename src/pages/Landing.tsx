import React from 'react'
import StyledPageContainer from '../components/styledComponents/StyledPageContainer'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'


const Landing = () => {
    const navigate = useNavigate()
    const clickHandler = () => navigate('/breweries')

  return (
    <StyledPageContainer>
        <div id="landingBackground">
            <div id="backdrop">
                <Button onClick={clickHandler}>Navigate to breweries page!</Button>
            </div>        
        </div>
    </StyledPageContainer>
  )
}

export default Landing