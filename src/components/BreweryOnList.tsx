import Grid from '@mui/material/Unstable_Grid2'
import { Link as RouterLink } from 'react-router-dom'
import { Link } from '@mui/material'

import { Brewery } from '../Types/Brewery'
import StyledCard from './styledComponents/StyledCard'

interface BreweryOnListProps {
    brewery: Brewery
}

const BreweryOnList = ( { brewery }: BreweryOnListProps) => {
  return (
    <Grid xs={12} md={5} lg={3}>
      <Link component={RouterLink} to={`/breweries/${brewery.id}`} sx={{
        textDecoration: 'none'
      }}>
        <StyledCard>
          <h3>{brewery.name}</h3>
          <p>From {brewery.city} / {brewery.state}</p>
        </StyledCard>
      </Link>
    </Grid>
  )
}

export default BreweryOnList