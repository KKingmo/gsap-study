import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import AnimatingOnInteraction from '../../components/react-basics/AnimatingOnInteraction';

const Pages = () => {
	const location = useLocation();

	const renderComponent = useCallback(() => {
		const renderCase = location.pathname.split('/').at(-1);
		switch (renderCase) {
			case '1':
				return <AnimatingOnInteraction />;
			case '2':
				return <div>2</div>;
			default:
				return <div>404</div>;
		}
	}, [location.pathname]);
	return <>{renderComponent()}</>;
};
export default Pages;
