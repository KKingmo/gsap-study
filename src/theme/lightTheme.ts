import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			light: '#757ce8',
			main: '#3f50b5',
			dark: '#002884',
			contrastText: '#fff',
		},
		secondary: {
			light: '#ff7961',
			main: '#f44336',
			dark: '#ba000d',
			contrastText: '#000',
		},
		background: {
			default: '#ffffff',
			paper: '#f7f7f7',
		},
		text: {
			primary: '#000000',
			secondary: '#252525',
			disabled: '#858585',
		},
	},
	typography: {
		fontSize: 16,
		h1: {
			fontSize: '2rem',
			fontWeight: 'bold',
		},
		h2: {
			fontSize: '1.5rem',
			fontWeight: 'bold',
		},
		h3: {
			fontSize: '1.2rem',
			fontWeight: 'bold',
		},
		subtitle1: {
			fontSize: '0.9375rem',
		},
		body2: {
			whiteSpace: 'pre-wrap',
		},
	},
});

export default lightTheme;
