import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import UsingMotionPath from '../../components/gsap-advanced/UsingMotionPath';
import PracticeMotionPath from '../../components/gsap-advanced/PracticeMotionPath';
import HandlingCallback from '../../components/gsap-advanced/HandlingCallback';
import Killtween from '../../components/gsap-advanced/Killtween';
import GsapUtilsWrap from '../../components/gsap-advanced/GsapUtilsWrap';
import GsapRegisterEffect from '../../components/gsap-advanced/GsapRegisterEffect';
import CssClearProps from '../../components/gsap-advanced/CssClearProps';
import ThreeDTransform from '../../components/gsap-advanced/ThreeDTransform';

const Pages = () => {
	const location = useLocation();

	const renderComponent = useCallback(() => {
		const renderCase = location.pathname.split('/').at(-1);
		switch (renderCase) {
			case '1':
				return <UsingMotionPath />;
			case '2':
				return <PracticeMotionPath />;
			case '3':
				return <HandlingCallback />;
			case '4':
				return <Killtween />;
			case '5':
				return <GsapUtilsWrap />;
			case '6':
				return <GsapRegisterEffect />;
			case '7':
				return <CssClearProps />;
			case '8':
				return <ThreeDTransform />;
		}
	}, [location.pathname]);
	return <>{renderComponent()}</>;
};
export default Pages;
