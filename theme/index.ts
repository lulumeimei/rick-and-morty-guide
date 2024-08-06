import { createTheme } from '@mui/material/styles';
import { red, blue, grey } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
    palette: {
        mode: 'light', // Force light mode
        primary: {
            main: blue[500],
        },
        secondary: {
            main: grey[700],
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#f5f5f5',
            paper: '#ffffff',
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        h1: {
            fontSize: '2rem',
            fontWeight: 600,
        },
        h2: {
            fontSize: '1.75rem',
            fontWeight: 500,
        },
        body1: {
            fontSize: '1rem',
        },
        button: {
            textTransform: 'none',
        },
    },
    spacing: 8,
    shape: {
        borderRadius: 8,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                },
            },
        },

    },
});

export default theme;
