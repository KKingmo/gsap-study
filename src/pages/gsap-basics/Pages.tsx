import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import GsapObject from '../../components/gsap-basics/GsapObject';
import BasicTweening from '../../components/gsap-basics/BasicTweening';
import FromFromTo from '../../components/gsap-basics/FromFromTo';
import DelayAndLoop from '../../components/gsap-basics/DelayAndLoop';

const Pages = () => {
	const location = useLocation();

	const renderComponent = useCallback(() => {
		const renderCase = location.pathname.split('/').at(-1);
		switch (renderCase) {
			case '1':
				return <GsapObject />;
			case '2':
				return <BasicTweening />;
			case '3':
				return <FromFromTo />;
			case '4':
				return <DelayAndLoop />;
		}
	}, [location.pathname]);
	return <>{renderComponent()}</>;
};
export default Pages;
