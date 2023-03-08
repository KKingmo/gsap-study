import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import AnimatingOnInteraction from '../../components/react-basics/AnimatingOnInteraction';
import TriggeringAnimationOnMount from '../../components/react-basics/TriggeringAnimationOnMount';
import TargetingElementsWithRefs from '../../components/react-basics/TargetingElementsWithRefs';

const Pages = () => {
	const location = useLocation();

	const renderComponent = useCallback(() => {
		const renderCase = location.pathname.split('/').at(-1);
		switch (renderCase) {
			case '1':
				return <AnimatingOnInteraction />;
			case '2':
				return <TriggeringAnimationOnMount />;
			case '3':
				return <TargetingElementsWithRefs />;
			default:
				return <div>404</div>;
		}
	}, [location.pathname]);
	return <>{renderComponent()}</>;
};
export default Pages;
