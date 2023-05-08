import { GridProps, styled } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

const StyledGridContainer = styled(Grid)<GridProps> (({theme}) => ({
    marginTop: '2em',
    alignSelf: 'center',
    maxWidth: '100%'
}))

export default StyledGridContainer