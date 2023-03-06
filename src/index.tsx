import './styles/global.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import lightTheme from './theme/lightTheme';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');

if (!rootElement) {
	throw new Error("Failed to find the 'root' element in the DOM.");
}

const root = createRoot(rootElement as HTMLElement);

root.render(
	<ThemeProvider theme={lightTheme}>
		<CssBaseline />
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ThemeProvider>,
);
