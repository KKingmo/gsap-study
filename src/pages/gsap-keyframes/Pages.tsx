import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import SettingTimeline from '../../components/first-project/SettingTimeline';
import AnimationDetailing from '../../components/first-project/AnimationDetailing';
import Fouc from '../../components/first-project/Fouc';
import KeyframesFirst from '../../components/gsap-keyframes/KeyframesFirst';

const Pages = () => {
	const location = useLocation();

	const renderComponent = useCallback(() => {
		const renderCase = location.pathname.split('/').at(-1);
		switch (renderCase) {
			case '1':
				return <KeyframesFirst />;
			case '2':
				return <SettingTimeline />;
			case '3':
				return <AnimationDetailing />;
			case '4':
				return <Fouc />;
		}
	}, [location.pathname]);
	return <>{renderComponent()}</>;
};
export default Pages;
