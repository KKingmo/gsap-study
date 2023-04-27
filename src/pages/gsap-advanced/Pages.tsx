import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import UsingMotionPath from '../../components/gsap-advanced/UsingMotionPath';
import PracticeMotionPath from '../../components/gsap-advanced/PracticeMotionPath';

const Pages = () => {
	const location = useLocation();

	const renderComponent = useCallback(() => {
		const renderCase = location.pathname.split('/').at(-1);
		switch (renderCase) {
			case '1':
				return <UsingMotionPath />;
			case '2':
				return <PracticeMotionPath />;
		}
	}, [location.pathname]);
	return <>{renderComponent()}</>;
};
export default Pages;
