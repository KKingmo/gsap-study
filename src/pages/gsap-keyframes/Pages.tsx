import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import KeyframesFirst from '../../components/gsap-keyframes/KeyframesFirst';
import KeyframesSecond from '../../components/gsap-keyframes/KeyframesSecond';

const Pages = () => {
	const location = useLocation();

	const renderComponent = useCallback(() => {
		const renderCase = location.pathname.split('/').at(-1);
		switch (renderCase) {
			case '1':
				return <KeyframesFirst />;
			case '2':
				return <KeyframesSecond />;
			case '3':
				return <div />;
			case '4':
				return <div />;
		}
	}, [location.pathname]);
	return <>{renderComponent()}</>;
};
export default Pages;
