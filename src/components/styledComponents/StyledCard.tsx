import { styled } from '@mui/material/styles'
import { Card, CardProps } from '@mui/material'

const StyledCard = styled(Card)<CardProps>(({ theme }) => ({
    padding: "2em",
    height: '10vh',
    minHeight: '10px',
    textDecoration: 'none',
    backgroundColor: theme.palette.primary.light,
    backgroundBlendMode: 'multiply',
    borderRadius: '10px',
    '&:hover': {
        backgroundColor: theme.palette.warning.dark,       
        }
}));

export default StyledCard