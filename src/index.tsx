import './styles/global.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import lightTheme from './theme/lightTheme';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
	<ThemeProvider theme={lightTheme}>
		<CssBaseline />
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ThemeProvider>,
);
