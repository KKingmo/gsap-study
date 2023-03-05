import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Main from './pages';
import ReactBasics from './pages/react-basics';

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/react-basics' element={<ReactBasics />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
