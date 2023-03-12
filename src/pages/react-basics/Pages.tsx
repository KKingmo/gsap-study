import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import AnimatingOnInteraction from '../../components/react-basics/AnimatingOnInteraction';
import TriggeringAnimationOnMount from '../../components/react-basics/TriggeringAnimationOnMount';
import TargetingElementsWithRefs from '../../components/react-basics/TargetingElementsWithRefs';
import GsapContext from '../../components/react-basics/GsapContext';
import CleaningUp from '../../components/react-basics/CleaningUp';
import ReusingComponents from '../../components/react-basics/ReusingComponents';

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
			case '4':
				return <GsapContext />;
			case '5':
				return <CleaningUp />;
			case '6':
				return <ReusingComponents />;
			default:
				return <div>404</div>;
		}
	}, [location.pathname]);
	return <>{renderComponent()}</>;
};
export default Pages;
