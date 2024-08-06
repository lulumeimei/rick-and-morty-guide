import { createTheme } from '@mui/material/styles';
import { red, blue, grey } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
    palette: {
        mode: 'light', // Force light mode
        primary: {
            light: blue[300],
            main: blue[500],
            dark: blue[700],
            contrastText: '#fff',
        },
        secondary: {
            light: grey[500],
            main: grey[700],
            dark: grey[900],
            contrastText: '#fff',
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
        h3: {
            fontSize: '1.5rem',
            fontWeight: 500,
        },
        h4: {
            fontSize: '1.25rem',
            fontWeight: 500,
        },
        h5: {
            fontSize: '1rem',
            fontWeight: 500,
        },
        h6: {
            fontSize: '0.875rem',
            fontWeight: 500,
        },
        body1: {
            fontSize: '1rem',
        },
        body2: {
            fontSize: '0.875rem',
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
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: '#f5f5f5',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    padding: '8px 16px',
                },
                containedPrimary: {
                    backgroundColor: blue[500],
                    '&:hover': {
                        backgroundColor: blue[700],
                    },
                },
                containedSecondary: {
                    backgroundColor: grey[700],
                    '&:hover': {
                        backgroundColor: grey[900],
                    },
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#ffffff',
                    color: blue[500], // Ensure text color contrasts with the white background
                    elevation: 0, // Remove box shadow
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    padding: '10px',
                },
            },
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
});

export default theme;