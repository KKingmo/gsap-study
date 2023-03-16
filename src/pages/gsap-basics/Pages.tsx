import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import GsapObject from '../../components/gsap-basics/GsapObject';

const Pages = () => {
	const location = useLocation();

	const renderComponent = useCallback(() => {
		const renderCase = location.pathname.split('/').at(-1);
		switch (renderCase) {
			case '1':
				return <GsapObject />;
			case '2':
				return <div />;
			case '3':
				return <div />;
		}
	}, [location.pathname]);
	return <>{renderComponent()}</>;
};
export default Pages;
