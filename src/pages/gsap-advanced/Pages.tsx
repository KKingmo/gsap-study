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
import RuntimeRendering from '../../components/gsap-advanced/RuntimeRendering';
import FunctionBased from '../../components/gsap-advanced/FunctionBased';
import AccelerationBasedStagger from '../../components/gsap-advanced/AccelerationBasedStagger';
import GsapUtilsDistribute from '../../components/gsap-advanced/GsapUtilsDistribute';
import AnimatingValueDistribution from '../../components/gsap-advanced/AnimatingValueDistribution';
import ThreeDTextEffect from '../../components/gsap-advanced/ThreeDTextEffect';
import StaggerRepeatSetting from '../../components/gsap-advanced/StaggerRepeatSetting';

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
			case '9':
				return <RuntimeRendering />;
			case '10':
				return <FunctionBased />;
			case '11':
				return <AccelerationBasedStagger />;
			case '12':
				return <GsapUtilsDistribute />;
			case '13':
				return <AnimatingValueDistribution />;
			case '14':
				return <ThreeDTextEffect />;
			case '15':
				return <StaggerRepeatSetting />;
		}
	}, [location.pathname]);
	return <>{renderComponent()}</>;
};
export default Pages;
