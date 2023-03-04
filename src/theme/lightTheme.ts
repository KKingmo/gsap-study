import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#1E88E5',
		},
		secondary: {
			main: '#1E88E5',
		},
		background: {
			default: '#ffffff',
		},
		text: {
			primary: '#000000',
			secondary: '#ffffff',
		},
	},
	typography: {
		fontSize: 16,
		h1: {
			fontSize: '3.75rem',
			fontWeight: 'bold',
		},
		h2: {
			fontSize: '2rem',
			fontWeight: 'bold',
		},
		subtitle1: {
			fontSize: '0.9375rem',
		},
	},
	components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundColor: 'rgba(255, 255, 255, 0.1)',
					backdropFilter: 'blur(5px)',
				},
			},
		},
	},
});

export default lightTheme;
