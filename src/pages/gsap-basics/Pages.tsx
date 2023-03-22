import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import GsapObject from '../../components/gsap-basics/GsapObject';
import BasicTweening from '../../components/gsap-basics/BasicTweening';
import FromFromTo from '../../components/gsap-basics/FromFromTo';
import DelayAndLoop from '../../components/gsap-basics/DelayAndLoop';
import Acceleration from '../../components/gsap-basics/Acceleration';
import Staggers from '../../components/gsap-basics/Staggers';

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
			case '5':
				return <Acceleration />;
			case '6':
				return <Staggers />;
		}
	}, [location.pathname]);
	return <>{renderComponent()}</>;
};
export default Pages;
