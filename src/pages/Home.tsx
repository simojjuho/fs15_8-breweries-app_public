import { Container, Link, Box } from '@mui/material'
import { Outlet } from 'react-router'
import { Link as RouterLink } from 'react-router-dom'

import { ThemeProvider } from '@mui/material'
import globalTheme from '../themes/globalTheme'
import StyledHeader from '../components/styledComponents/StyledHeader'

const Home = () => {
  return (
    <ThemeProvider theme={globalTheme}>
      <div id='background'>
        <StyledHeader role='header' id="appHeader" >
          <h1>Breweries</h1>
          <Box component='nav'>    
            <Link component={RouterLink} to={'/'}>Home</Link>
            <Link component={RouterLink} to={'/breweries'}>Breweries</Link>
          </Box>
        </StyledHeader>
        <Outlet />
        <Container role='footer'></Container>
      </div>
    </ThemeProvider>
  )
}

export default Home