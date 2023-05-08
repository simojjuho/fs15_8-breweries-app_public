import { createTheme } from '@mui/material/styles'

const globalTheme = createTheme({
    spacing: 3,

    palette: {
        primary: {
            main: '#34312D',
            light: '#837C72',
            dark:   '#211F1C'
        },
        secondary: {
            main: '#D9c5b2',
            light: '#EBE0D6',
            dark: '#b58e69'
        },
        warning: {
            main: '#f2d0a4',
            light: '#f7e3c9',
            dark: '#e09129'
        },
        error: {
            main: '#c03221',
            light: '#e46f62',
            dark: '#8c2318'
        },
        success: {
            main: '#3f826D',
            light: '#68B69D',
            dark: '#2e6051'
        }
    }
})

export default globalTheme