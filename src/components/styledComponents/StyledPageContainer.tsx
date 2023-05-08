import { Container, ContainerProps, styled } from "@mui/material"


const StyledPageContainer = styled(Container)<ContainerProps> (({theme}) => ({
    margin: '3em auto',
    padding: '3em',
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
    gap: '2em',
    borderRadius: '25px',
    backgroundColor: theme.palette.secondary.light

}))

export default StyledPageContainer