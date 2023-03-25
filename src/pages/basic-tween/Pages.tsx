import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import GsapObject from '../../components/basic-tween/GsapObject';
import BasicTweening from '../../components/basic-tween/BasicTweening';
import FromFromTo from '../../components/basic-tween/FromFromTo';
import DelayAndLoop from '../../components/basic-tween/DelayAndLoop';
import Acceleration from '../../components/basic-tween/Acceleration';
import Staggers from '../../components/basic-tween/Staggers';
import TweenControl from '../../components/basic-tween/TweenControl';
import BugInFromTween from '../../components/basic-tween/BugInFromTween';

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
			case '7':
				return <TweenControl />;
			case '8':
				return <BugInFromTween />;
		}
	}, [location.pathname]);
	return <>{renderComponent()}</>;
};
export default Pages;
