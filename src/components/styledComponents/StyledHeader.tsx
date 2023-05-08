import { AppBar, AppBarProps, styled } from '@mui/material'

const StyledHeader = styled(AppBar)<AppBarProps> (({theme}) => ({
    backgroundColor: theme.palette.secondary.dark,

    boxShadow: '0 0 5px',
    height: '5em',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

}))

export default StyledHeader