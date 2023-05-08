import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Link } from '@mui/material'

import { Brewery } from '../Types/Brewery'
import { getOne } from '../services'
import StyledPageContainer from '../components/styledComponents/StyledPageContainer'

const SingleBreweryPage = () => {
    const { id } = useParams()
    const [brewery, setBrewery] = useState<Brewery | undefined>()

    useEffect(() => {
        if (id) {
            getOne(id).then(data => {
                setBrewery(data)
            })
        }
    }, [id])
    const navigate = useNavigate()


  return (
    <StyledPageContainer sx={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    }}>
        <Box>
            <h2>{brewery?.name}</h2>
            <p>
                Type of brewery: {brewery?.brewery_type}< br />
                Address: {brewery?.address_1}, {brewery?.postal_code}, 
                {brewery?.city} / {brewery?.state}<br />
                Country of brewery: {brewery?.country}<br />
                Phone number: {brewery?.phone}<br />
                Find them on <Link href={`https://www.google.com/maps/search/?api=1&query=${brewery?.name}+${brewery?.city}`}>map.</Link><br />
                Url: <Link href={brewery?.website_url}>press</Link>    
            </p>
        </Box>
        <iframe
            className='mapsFrame'
            title='mapsEmbed'
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBPg4nSA2QW6hVAevXXhmwXfE8BIi_BQOM
                &q=${brewery?.name}+${brewery?.state}`}>

        </iframe>
    </StyledPageContainer>
  )
}

export default SingleBreweryPage