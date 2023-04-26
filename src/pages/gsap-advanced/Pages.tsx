import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import UsingMotionPath from '../../components/gsap-advanced/UsingMotionPath';

const Pages = () => {
	const location = useLocation();

	const renderComponent = useCallback(() => {
		const renderCase = location.pathname.split('/').at(-1);
		switch (renderCase) {
			case '1':
				return <UsingMotionPath />;
		}
	}, [location.pathname]);
	return <>{renderComponent()}</>;
};
export default Pages;
