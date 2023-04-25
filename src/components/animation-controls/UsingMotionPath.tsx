import { Box, Button, Divider, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import PageLayout from '../../layout/PageLayout';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import CodeBlock from '../common/CodeBlock';

const CODESTRING = [
	`animation.pause()  // 애니메이션 일시정지 메서드 
console.log(animation.paused()); // 애니메이션 일시정지 get/set 메서드 

animation.progress(0.5).pause() //set  progress -> method chain  
console.log(animation.progress()) // get

animation.time(3); //sets time to 3 seconds
animation.duration(1) // sets duration to 5 seconds
animation.timeScale(2) //makes animation play 2x as fast
animation.reversed(true) //set the reversed state`,
];

gsap.registerPlugin(MotionPathPlugin);

const UsingMotionPath = () => {
	const mapRef = useRef<HTMLDivElement>(null);
	const [tigerTween, setTigerTween] = useState<gsap.core.Tween | null>();
	const [isPaused, setIsPaused] = useState<boolean>(false);

	useEffect(() => {
		const ctx = gsap.context(() => {
			const tween = gsap.to('#tiger', {
				motionPath: { path: '#route', align: '#tiger' },
				onComplete: () => {
					setIsPaused(true);
				},
				duration: 5,
			});
			setTigerTween(tween);
		}, mapRef);

		return () => ctx.revert();
	}, []);
	console.log(tigerTween?.paused());
	return (
		<PageLayout>
			<Typography variant='h1'>Motion Path</Typography>
			<Typography variant='body2'>
				{
					'Getter-Setter 메서드를 사용하면 애니메이션에서 값을 가져오거나 값을 설정할 수 있습니다.\n- pause() / paused()\n- reversed()\n- timeScale()\n- time()\n- progress()\n\n애니메이션의 재생헤드가 3초의 시간으로 점프하도록 하려면 아래의 코드를 이용할 수 있습니다.\nmyAnimation.time(3)\n시간을 표시하려면 다음과 같이 사용할 수 있습니다.\ntime.innerHTML = myAnimation.time()'
				}
			</Typography>
			<CodeBlock language={'tsx'} codeString={CODESTRING[0]} />
			<Box ref={mapRef}>
				<svg
					width='800'
					height='456'
					viewBox='0 0 800 456'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<g id='svg'>
						<rect width='800' height='456' fill='#F7F7F7' />
						<g id='company'>
							<rect
								width='60'
								height='67'
								transform='translate(588 359)'
								fill='#F6F6F6'
							/>
							<path
								id='COMPANY'
								d='M594.504 417.375H596.039C595.775 415.488 594.328 414.398 592.453 414.398C590.232 414.398 588.568 416.016 588.574 418.758C588.568 421.494 590.215 423.117 592.453 423.117C594.463 423.117 595.805 421.816 596.039 420.188H594.504C594.299 421.184 593.484 421.746 592.477 421.746C591.094 421.746 590.104 420.709 590.109 418.758C590.104 416.836 591.088 415.77 592.477 415.77C593.508 415.77 594.322 416.355 594.504 417.375ZM604.922 418.758C604.928 416.016 603.252 414.398 601.031 414.398C598.799 414.398 597.135 416.016 597.141 418.758C597.135 421.494 598.799 423.117 601.031 423.117C603.252 423.117 604.928 421.5 604.922 418.758ZM598.676 418.758C598.67 416.818 599.648 415.77 601.031 415.77C602.42 415.77 603.393 416.818 603.387 418.758C603.393 420.697 602.42 421.746 601.031 421.746C599.648 421.746 598.67 420.697 598.676 418.758ZM606.281 414.516V423H607.758V417.141H607.828L610.184 422.977H611.273L613.629 417.164H613.711V423H615.176V414.516H613.301L610.781 420.68H610.676L608.156 414.516H606.281ZM616.746 423H618.27V420.129H619.91C621.867 420.129 622.916 418.951 622.922 417.328C622.916 415.699 621.879 414.516 619.934 414.516H616.746V423ZM618.27 418.875V415.793H619.699C620.848 415.793 621.363 416.42 621.363 417.328C621.363 418.225 620.848 418.869 619.699 418.875H618.27ZM624.281 423L624.984 420.902H628.178L628.887 423H630.516L627.516 414.516H625.641L622.652 423H624.281ZM625.395 419.672L626.543 416.25H626.613L627.768 419.672H625.395ZM638.496 414.516H636.984V420.316H636.902L632.906 414.516H631.523V423H633.047V417.199H633.117L637.137 423H638.496V414.516ZM639.48 414.516L642.574 419.824V423H644.098V419.824L647.18 414.516H645.457L643.371 418.266H643.289L641.203 414.516H639.48Z'
								fill='black'
							/>
							<path
								id='Vector 12'
								d='M593 401.5H640'
								stroke='#FF932F'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								id='Vector 13'
								d='M600.5 405.5H633.5'
								stroke='#FF932F'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								id='Vector 14'
								d='M605.5 401.5V366.5L616.5 359L628 366.5V401.5'
								stroke='#FF932F'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								id='Vector 15'
								d='M616.5 359V401.5'
								stroke='#FF932F'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								id='Vector 16'
								d='M616.5 365.5L628 372.5'
								stroke='#FF932F'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								id='Vector 17'
								d='M616.5 371.5L628 378.5'
								stroke='#FF932F'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								id='Vector 18'
								d='M616.5 377.5L628 384.5'
								stroke='#FF932F'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								id='Vector 19'
								d='M616.5 383.5L628 390.5'
								stroke='#FF932F'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								id='Vector 20'
								d='M616.5 389.5L628 396.5'
								stroke='#FF932F'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								id='Vector 21'
								d='M616.5 395.5L626.5 401.5'
								stroke='#FF932F'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</g>
						<g id='mountain'>
							<rect
								width='77'
								height='47'
								transform='translate(677 81)'
								fill='#F6F6F6'
							/>
							<path
								id='MOUNTAIN'
								d='M683.785 116.516V125H685.262V119.141H685.332L687.688 124.977H688.777L691.133 119.164H691.215V125H692.68V116.516H690.805L688.285 122.68H688.18L685.66 116.516H683.785ZM701.82 120.758C701.826 118.016 700.15 116.398 697.93 116.398C695.697 116.398 694.033 118.016 694.039 120.758C694.033 123.494 695.697 125.117 697.93 125.117C700.15 125.117 701.826 123.5 701.82 120.758ZM695.574 120.758C695.568 118.818 696.547 117.77 697.93 117.77C699.318 117.77 700.291 118.818 700.285 120.758C700.291 122.697 699.318 123.746 697.93 123.746C696.547 123.746 695.568 122.697 695.574 120.758ZM708.535 116.516V121.93C708.535 123.002 707.797 123.764 706.625 123.77C705.453 123.764 704.709 123.002 704.703 121.93V116.516H703.18V122.059C703.186 123.881 704.545 125.129 706.625 125.129C708.693 125.129 710.064 123.881 710.07 122.059V116.516H708.535ZM718.613 116.516H717.102V122.316H717.02L713.023 116.516H711.641V125H713.164V119.199H713.234L717.254 125H718.613V116.516ZM719.809 117.793H722.434V125H723.957V117.793H726.57V116.516H719.809V117.793ZM727.812 125L728.516 122.902H731.709L732.418 125H734.047L731.047 116.516H729.172L726.184 125H727.812ZM728.926 121.672L730.074 118.25H730.145L731.299 121.672H728.926ZM736.578 116.516H735.055V125H736.578V116.516ZM745.133 116.516H743.621V122.316H743.539L739.543 116.516H738.16V125H739.684V119.199H739.754L743.773 125H745.133V116.516Z'
								fill='black'
							/>
							<path
								id='Vector 22'
								d='M693 107L715.5 81L739 107'
								stroke='#009B51'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								id='Vector 23'
								d='M707 91.5L711.5 94.5L715.5 91L720 94.5L725 91.5'
								stroke='#009B51'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								id='Vector 24'
								d='M677 101.5L692 84L700 93'
								stroke='#009B51'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								id='Vector 25'
								d='M687 90.5L689.5 93L692 90.5L695 93L697.5 90.5'
								stroke='#009B51'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								id='Vector 24_2'
								d='M754 101.5L739 84L731 93'
								stroke='#009B51'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								id='Vector 25_2'
								d='M744 90.5L741.5 93L739 90.5L736 93L733.5 90.5'
								stroke='#009B51'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</g>
						<g id='home'>
							<rect
								width='63'
								height='51'
								transform='translate(38 30)'
								fill='#F6F6F6'
							/>
							<path
								id='HOME'
								d='M52.7852 78H54.3086V74.3906H58.2578V78H59.793V69.5156H58.2578V73.1133H54.3086V69.5156H52.7852V78ZM68.9336 73.7578C68.9395 71.0156 67.2637 69.3984 65.043 69.3984C62.8105 69.3984 61.1465 71.0156 61.1523 73.7578C61.1465 76.4941 62.8105 78.1172 65.043 78.1172C67.2637 78.1172 68.9395 76.5 68.9336 73.7578ZM62.6875 73.7578C62.6816 71.8184 63.6602 70.7695 65.043 70.7695C66.4316 70.7695 67.4043 71.8184 67.3984 73.7578C67.4043 75.6973 66.4316 76.7461 65.043 76.7461C63.6602 76.7461 62.6816 75.6973 62.6875 73.7578ZM70.293 69.5156V78H71.7695V72.1406H71.8398L74.1953 77.9766H75.2852L77.6406 72.1641H77.7227V78H79.1875V69.5156H77.3125L74.793 75.6797H74.6875L72.168 69.5156H70.293ZM80.7578 78H86.3008V76.7109H82.2812V74.3906H85.9844V73.1133H82.2812V70.793H86.2773V69.5156H80.7578V78Z'
								fill='black'
							/>
							<path
								id='Vector 40'
								d='M45 57.5V40L61 30L77.5 40V57.5'
								stroke='#666666'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								id='Vector 41'
								d='M61.5 30H79L95 39.5V58'
								stroke='#666666'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								id='Vector 12_2'
								d='M38 58H101'
								stroke='#666666'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								id='Vector 13_2'
								d='M48 62L92 62'
								stroke='#666666'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								id='Vector 42'
								d='M77 40H95'
								stroke='#666666'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								id='Vector 20_2'
								d='M71 30L88 40'
								stroke='#666666'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								id='Vector 46'
								d='M94 42L78 51'
								stroke='#666666'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								id='Vector 48'
								d='M95 47L78 57'
								stroke='#666666'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								id='Vector 49'
								d='M95 52L85 58'
								stroke='#666666'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								id='Vector 45'
								d='M89 40L78 46'
								stroke='#666666'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</g>
						<g id='river'>
							<rect
								width='54.5'
								height='63'
								transform='translate(164 257)'
								fill='#F6F6F6'
							/>
							<path
								id='RIVER'
								d='M172.785 317H174.309V313.895H175.902L177.566 317H179.266L177.432 313.637C178.428 313.232 178.955 312.377 178.961 311.223C178.955 309.605 177.918 308.516 175.973 308.516H172.785V317ZM174.309 312.617V309.793H175.738C176.887 309.793 177.402 310.32 177.402 311.223C177.402 312.131 176.887 312.623 175.738 312.617H174.309ZM181.797 308.516H180.273V317H181.797V308.516ZM184.504 308.516H182.828L185.816 317H187.691L190.691 308.516H189.016L186.801 315.207H186.707L184.504 308.516ZM191.699 317H197.242V315.711H193.223V313.391H196.926V312.113H193.223V309.793H197.219V308.516H191.699V317ZM198.684 317H200.207V313.895H201.801L203.465 317H205.164L203.33 313.637C204.326 313.232 204.854 312.377 204.859 311.223C204.854 309.605 203.816 308.516 201.871 308.516H198.684V317ZM200.207 312.617V309.793H201.637C202.785 309.793 203.301 310.32 203.301 311.223C203.301 312.131 202.785 312.623 201.637 312.617H200.207Z'
								fill='black'
							/>
							<path
								id='Vector 28'
								d='M187.5 272.5L189.295 269.808C190.014 268.729 191.345 268.235 192.594 268.582L199.106 270.391C199.367 270.463 199.638 270.5 199.909 270.5H204.914C205.616 270.5 206.295 270.746 206.834 271.195L208.513 272.594C208.834 272.862 209.206 273.06 209.609 273.171C212.136 273.871 216.659 275 218.5 275'
								stroke='#1AACFF'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								id='Vector 27'
								d='M183.5 272.5C192.167 271.667 208.5 275.3 204.5 296.5'
								stroke='#1AACFF'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								id='Vector 26'
								d='M164 274C166.333 272.5 171.7 269.7 174.5 270.5C178 271.5 180 272.5 182 272.5C184 272.5 192 274 191 279C190 284 184.5 289 164 297.5'
								stroke='#1AACFF'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								id='Vector 29'
								d='M174.5 270.5C174.167 266 175.9 257 185.5 257C195.1 257 197 266 196.5 269.5'
								stroke='#1AACFF'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								id='Vector 30'
								d='M198 294C198.5 293.833 199.5 293.3 199.5 292.5C199.667 293 200.2 294 201 294'
								stroke='#1AACFF'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								id='Vector 31'
								d='M198 289C198.5 288.833 199.5 288.3 199.5 287.5C199.667 288 200.2 289 201 289'
								stroke='#1AACFF'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								id='Vector 32'
								d='M195 289C195.5 288.833 196.5 288.3 196.5 287.5C196.667 288 197.2 289 198 289'
								stroke='#1AACFF'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								id='Vector 33'
								d='M188 289C188.5 288.833 189.5 288.3 189.5 287.5C189.667 288 190.2 289 191 289'
								stroke='#1AACFF'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								id='Vector 34'
								d='M197 284C197.5 283.833 198.5 283.3 198.5 282.5C198.667 283 199.2 284 200 284'
								stroke='#1AACFF'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								id='Vector 35'
								d='M194 279C194.5 278.833 195.5 278.3 195.5 277.5C195.667 278 196.2 279 197 279'
								stroke='#1AACFF'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								id='Vector 36'
								d='M188 294C188.5 293.833 189.5 293.3 189.5 292.5C189.667 293 190.2 294 191 294'
								stroke='#1AACFF'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								id='Vector 37'
								d='M185 294C185.5 293.833 186.5 293.3 186.5 292.5C186.667 293 187.2 294 188 294'
								stroke='#1AACFF'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								id='Vector 38'
								d='M182 294C182.5 293.833 183.5 293.3 183.5 292.5C183.667 293 184.2 294 185 294'
								stroke='#1AACFF'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								id='Vector 39'
								d='M179 294C179.5 293.833 180.5 293.3 180.5 292.5C180.667 293 181.2 294 182 294'
								stroke='#1AACFF'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</g>
						<path
							id='route'
							d='M111 87.8806C111.944 100.152 120.884 112.508 128.261 121.763C137.25 133.04 151.404 139.087 165.084 142.306C199.559 150.417 233.728 143.379 266.646 131.949C274.287 129.296 281.565 125.518 289.021 122.402C298.102 118.608 307.387 115.151 316.34 111.066C335.971 102.108 354.848 91.582 374.473 82.681C387.909 76.5873 403.11 74.1696 417.775 74.0719C435.707 73.9523 452.744 73.4285 470.026 78.6748C495.92 86.5353 516.112 103.747 540.561 114.305C561.169 123.204 585.184 121.813 605.897 130.926C614.534 134.726 622.875 141.387 625.374 150.829C627.209 157.762 627.231 167.678 622.22 173.46C604.287 194.153 577.155 201.053 551.344 206.746C534.78 210.4 518.171 216.182 501.224 217.699C490.917 218.622 480.787 220.719 470.495 221.748C458.705 222.927 446.854 223.362 435.078 224.604C412.854 226.948 390.063 227.208 368.081 231.338C348.047 235.101 328.04 239.216 308.413 244.72C299.726 247.156 290.593 249.322 282.799 254.054C276.905 257.632 268.319 264.985 266.348 272.082C264.566 278.495 267.793 287.07 271.718 292.028C277.562 299.41 287.288 304.987 296.224 307.925C310.17 312.51 325.847 312.656 340.378 312.656C362.495 312.656 384.142 309.21 406.182 308.223C423.214 307.46 442.145 307.106 458.348 313.252C468.401 317.065 475.84 324.433 482.13 333.113C489.671 343.519 496.344 354.593 507.19 362.094C516.218 368.337 526.223 371.209 536.683 374.198C547.108 377.176 560.127 377.651 570.352 373.431C577.364 370.537 589.64 369.885 594.305 364.055'
							stroke='black'
							strokeWidth='3'
							strokeLinecap='round'
						/>
						<g id='tiger'>
							<g id='face'>
								<mask id='path-46-inside-1_1_96' fill='white'>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M67.2152 79.9375C67.2152 83.7566 69.1726 87.1185 72.1389 89.0748C72.1988 89.1142 72.2126 89.1966 72.1685 89.2532C68.2612 94.2604 66 100.193 66 106.552C66 124.473 83.9552 139 106.104 139C128.253 139 146.208 124.473 146.208 106.552C146.208 100.147 143.915 94.1762 139.956 89.1466C139.912 89.0907 139.925 89.0091 139.984 88.969C142.862 86.9987 144.75 83.6886 144.75 79.9375C144.75 73.8969 139.853 69 133.812 69C128.765 69 124.516 72.4191 123.255 77.0676C123.236 77.1376 123.161 77.1768 123.093 77.1511C117.935 75.1963 112.177 74.1041 106.104 74.1041C99.9448 74.1041 94.1097 75.2276 88.8949 77.2351C88.8265 77.2614 88.7507 77.2217 88.7321 77.1509C87.4998 72.46 83.2303 69 78.1527 69C72.1121 69 67.2152 73.8969 67.2152 79.9375Z'
									/>
								</mask>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M67.2152 79.9375C67.2152 83.7566 69.1726 87.1185 72.1389 89.0748C72.1988 89.1142 72.2126 89.1966 72.1685 89.2532C68.2612 94.2604 66 100.193 66 106.552C66 124.473 83.9552 139 106.104 139C128.253 139 146.208 124.473 146.208 106.552C146.208 100.147 143.915 94.1762 139.956 89.1466C139.912 89.0907 139.925 89.0091 139.984 88.969C142.862 86.9987 144.75 83.6886 144.75 79.9375C144.75 73.8969 139.853 69 133.812 69C128.765 69 124.516 72.4191 123.255 77.0676C123.236 77.1376 123.161 77.1768 123.093 77.1511C117.935 75.1963 112.177 74.1041 106.104 74.1041C99.9448 74.1041 94.1097 75.2276 88.8949 77.2351C88.8265 77.2614 88.7507 77.2217 88.7321 77.1509C87.4998 72.46 83.2303 69 78.1527 69C72.1121 69 67.2152 73.8969 67.2152 79.9375Z'
									fill='#D68141'
								/>
								<path
									d='M123.255 77.0676L122.082 76.7495L123.255 77.0676ZM123.093 77.1511L122.663 78.2875L123.093 77.1511ZM88.8949 77.2351L88.4583 76.101L88.8949 77.2351ZM88.7321 77.1509L87.5567 77.4597L88.7321 77.1509ZM139.956 89.1466L140.911 88.395L139.956 89.1466ZM139.984 88.969L140.67 89.9717L139.984 88.969ZM72.1389 89.0748L72.808 88.0602L72.1389 89.0748ZM72.1685 89.2532L73.1266 90.0008L72.1685 89.2532ZM72.808 88.0602C70.1682 86.3193 68.4305 83.331 68.4305 79.9375H66C66 84.1821 68.1771 87.9177 71.4698 90.0893L72.808 88.0602ZM67.2153 106.552C67.2153 100.492 69.3678 94.8177 73.1266 90.0008L71.2104 88.5056C67.1545 93.7032 64.7847 99.8937 64.7847 106.552H67.2153ZM106.104 137.785C84.3733 137.785 67.2153 123.574 67.2153 106.552H64.7847C64.7847 125.372 83.5372 140.215 106.104 140.215V137.785ZM144.993 106.552C144.993 123.574 127.835 137.785 106.104 137.785V140.215C128.671 140.215 147.424 125.372 147.424 106.552H144.993ZM139.001 89.8982C142.81 94.7371 144.993 100.449 144.993 106.552H147.424C147.424 99.8462 145.02 93.6152 140.911 88.395L139.001 89.8982ZM143.535 79.9375C143.535 83.2707 141.858 86.2127 139.297 87.9662L140.67 89.9717C143.865 87.7846 145.965 84.1065 145.965 79.9375H143.535ZM133.812 70.2153C139.182 70.2153 143.535 74.5681 143.535 79.9375H145.965C145.965 73.2257 140.524 67.7847 133.812 67.7847V70.2153ZM124.428 77.3857C125.549 73.2532 129.328 70.2153 133.812 70.2153V67.7847C128.202 67.7847 123.483 71.585 122.082 76.7495L124.428 77.3857ZM106.104 75.3194C112.032 75.3194 117.643 76.3855 122.663 78.2875L123.524 76.0146C118.226 74.0071 112.322 72.8889 106.104 72.8889V75.3194ZM89.3315 78.3692C94.4052 76.4161 100.092 75.3194 106.104 75.3194V72.8889C99.7974 72.8889 93.8142 74.0392 88.4583 76.101L89.3315 78.3692ZM78.1527 70.2153C82.6645 70.2153 86.4613 73.2896 87.5567 77.4597L89.9075 76.8421C88.5384 71.6304 83.7962 67.7847 78.1527 67.7847V70.2153ZM68.4305 79.9375C68.4305 74.5681 72.7833 70.2153 78.1527 70.2153V67.7847C71.4409 67.7847 66 73.2257 66 79.9375H68.4305ZM122.082 76.7495C122.248 76.1395 122.908 75.7813 123.524 76.0146L122.663 78.2875C123.414 78.5723 124.225 78.1358 124.428 77.3857L122.082 76.7495ZM88.4583 76.101C89.0786 75.8622 89.7455 76.2256 89.9075 76.8421L87.5567 77.4597C87.7558 78.2178 88.5745 78.6606 89.3315 78.3692L88.4583 76.101ZM140.911 88.395C141.305 88.8955 141.187 89.6177 140.67 89.9717L139.297 87.9662C138.663 88.4005 138.519 89.2859 139.001 89.8982L140.911 88.395ZM71.4698 90.0893C70.9421 89.7412 70.8149 89.0124 71.2104 88.5056L73.1266 90.0008C73.6103 89.3809 73.4555 88.4873 72.808 88.0602L71.4698 90.0893Z'
									fill='black'
									mask='url(#path-46-inside-1_1_96)'
								/>
							</g>
							<g id='pattern'>
								<mask
									id='mask0_1_96'
									maskUnits='userSpaceOnUse'
									x='66'
									y='74'
									width='81'
									height='65'>
									<ellipse
										id='Ellipse 1'
										cx='106.104'
										cy='106.552'
										rx='40.1042'
										ry='32.4479'
										fill='black'
									/>
								</mask>
								<g mask='url(#mask0_1_96)'>
									<ellipse
										id='Ellipse 17'
										cx='104.889'
										cy='75.8055'
										rx='2.91667'
										ry='11.9097'
										fill='black'
									/>
									<ellipse
										id='Ellipse 22'
										cx='144.231'
										cy='93.7141'
										rx='3.25223'
										ry='11.9097'
										transform='rotate(63.7372 144.231 93.7141)'
										fill='black'
									/>
									<ellipse
										id='Ellipse 23'
										cx='3.25223'
										cy='11.9097'
										rx='3.25223'
										ry='11.9097'
										transform='matrix(-0.44249 0.896774 0.896774 0.44249 56.9252 85.5277)'
										fill='black'
									/>
									<ellipse
										id='Ellipse 18'
										cx='113.664'
										cy='74.0796'
										rx='2.29531'
										ry='11.9097'
										transform='rotate(10.361 113.664 74.0796)'
										fill='black'
									/>
									<ellipse
										id='Ellipse 20'
										cx='147.49'
										cy='113.964'
										rx='1.90829'
										ry='11.9097'
										transform='rotate(105.926 147.49 113.964)'
										fill='black'
									/>
									<ellipse
										id='Ellipse 24'
										cx='1.90829'
										cy='11.9097'
										rx='1.90829'
										ry='11.9097'
										transform='matrix(0.274388 0.961619 0.961619 -0.274388 50.9306 115.397)'
										fill='black'
									/>
									<ellipse
										id='Ellipse 21'
										cx='144.497'
										cy='120.552'
										rx='1.90829'
										ry='11.9097'
										transform='rotate(113.995 144.497 120.552)'
										fill='black'
									/>
									<ellipse
										id='Ellipse 25'
										cx='1.90829'
										cy='11.9097'
										rx='1.90829'
										ry='11.9097'
										transform='matrix(0.406655 0.913582 0.913582 -0.406655 54.2436 123.651)'
										fill='black'
									/>
									<ellipse
										id='Ellipse 19'
										cx='97.0507'
										cy='74.0586'
										rx='2.29531'
										ry='11.9097'
										transform='rotate(-7.49118 97.0507 74.0586)'
										fill='black'
									/>
									<ellipse
										id='Ellipse 27'
										cx='2.29531'
										cy='11.9097'
										rx='2.29531'
										ry='11.9097'
										transform='matrix(0.983694 -0.17985 -0.17985 -0.983694 108.444 157.18)'
										fill='black'
									/>
									<ellipse
										id='Ellipse 28'
										cx='2.29531'
										cy='11.9097'
										rx='2.29531'
										ry='11.9097'
										transform='matrix(0.991465 0.130374 0.130374 -0.991465 96.1389 156.54)'
										fill='black'
									/>
								</g>
							</g>
							<g id='glabella'>
								<path
									id='&#8;glabella_right'
									d='M106.104 96.9514C105.659 98.4097 105.156 101.74 106.712 103.392'
									stroke='black'
									strokeWidth='0.972222'
									strokeLinecap='round'
								/>
								<path
									id='&#8;glabella_left'
									d='M101.729 98.4097C102.134 99.3009 102.701 101.618 101.729 103.757'
									stroke='black'
									strokeWidth='0.972222'
									strokeLinecap='round'
								/>
							</g>
							<g id='eyes'>
								<circle
									id='left_eye'
									cx='95.5312'
									cy='104.122'
									r='1.82292'
									fill='black'
								/>
								<circle
									id='right_eye'
									cx='113.031'
									cy='104.122'
									r='1.82292'
									fill='black'
								/>
							</g>
							<g id='mouse'>
								<path
									id='mouse_bg'
									d='M118.744 117.458C118.637 119.116 117.199 121.156 114.633 122.808C112.094 124.443 108.54 125.632 104.403 125.632C100.254 125.632 96.6487 124.577 94.0276 123.01C91.3912 121.434 89.8173 119.386 89.5727 117.429C89.3613 115.738 89.343 114.475 89.6099 113.514C89.8666 112.59 90.3932 111.922 91.3645 111.42C92.3661 110.901 93.8437 110.559 95.9901 110.351C98.1281 110.145 100.881 110.076 104.403 110.076C108.098 110.076 110.871 110.244 112.946 110.571C115.027 110.9 116.364 111.383 117.224 111.983C118.061 112.567 118.472 113.281 118.665 114.159C118.864 115.068 118.829 116.147 118.744 117.458Z'
									fill='#D6B67B'
									stroke='black'
									strokeWidth='0.972222'
								/>
								<g id='beard'>
									<circle
										id='Ellipse 8'
										cx='96.0174'
										cy='114.087'
										r='0.607639'
										fill='black'
									/>
									<circle
										id='Ellipse 9'
										cx='92.3716'
										cy='113.844'
										r='0.607639'
										fill='black'
									/>
									<circle
										id='Ellipse 10'
										cx='94.0729'
										cy='116.517'
										r='0.607639'
										fill='black'
									/>
									<circle
										id='Ellipse 11'
										cx='112.545'
										cy='113.844'
										r='0.607639'
										fill='black'
									/>
									<circle
										id='Ellipse 12'
										cx='115.948'
										cy='113.844'
										r='0.607639'
										fill='black'
									/>
									<circle
										id='Ellipse 13'
										cx='114.003'
										cy='116.76'
										r='0.607639'
										fill='black'
									/>
								</g>
							</g>
							<g id='nose'>
								<path
									id='Vector 4'
									d='M98.934 118.097L104.16 115.788L109.628 118.097'
									stroke='black'
									strokeWidth='0.972222'
									strokeLinecap='round'
								/>
								<path
									id='Vector 3'
									d='M104.16 112.385V115.788'
									stroke='black'
									strokeWidth='0.972222'
									strokeLinecap='round'
								/>
								<path
									id='Ellipse 14'
									d='M109.264 109.955C109.264 111.364 106.979 112.507 104.16 112.507C101.341 112.507 99.0556 111.364 99.0556 109.955C99.0556 108.545 99.5196 107.403 104.16 107.403C108.336 107.403 109.264 108.545 109.264 109.955Z'
									fill='black'
								/>
							</g>
							<path
								id='right_ear_inner'
								fillRule='evenodd'
								clipRule='evenodd'
								d='M84.2123 79.9762C81.1799 81.6031 78.4367 83.5548 76.0586 85.7699C74.0005 84.8688 72.5625 82.8141 72.5625 80.4236C72.5625 77.2019 75.1742 74.5903 78.3958 74.5903C81.4669 74.5903 83.9837 76.9636 84.2123 79.9762Z'
								fill='#2B1B10'
							/>
							<path
								id='left_ear_inner'
								fillRule='evenodd'
								clipRule='evenodd'
								d='M127.764 79.6093C130.854 81.2426 133.649 83.2116 136.07 85.4524C138.04 84.5161 139.403 82.5074 139.403 80.1805C139.403 76.9588 136.791 74.3472 133.57 74.3472C130.541 74.3472 128.051 76.6557 127.764 79.6093Z'
								fill='#2B1B10'
							/>
							<g id='sweat'>
								<path
									id='Vector 7'
									d='M123.55 96.9514C123.226 98.5717 123.088 101.812 125.13 101.812C125.818 102.015 127.147 101.667 126.952 98.6527'
									stroke='white'
									strokeOpacity='0.6'
									strokeWidth='0.729167'
									strokeLinecap='round'
								/>
								<path
									id='Vector 8'
									d='M127.263 105.944C126.938 107.565 126.801 110.806 128.842 110.806C129.531 111.008 130.86 110.66 130.665 107.646'
									stroke='white'
									strokeOpacity='0.6'
									strokeWidth='0.729167'
									strokeLinecap='round'
								/>
							</g>
						</g>
					</g>
				</svg>
				<Box
					className='indicator'
					sx={{
						display: 'flex',
						gap: '1rem',
						alignItems: 'center',
						marginTop: '1rem',
						justifyContent: 'center',
					}}>
					<Button
						type='button'
						id='button'
						variant='contained'
						onClick={() => {
							if (!tigerTween) return;
							setIsPaused((prev) => {
								tigerTween.paused(!prev);
								return !prev;
							});

							if (tigerTween.progress() === 1) {
								tigerTween.restart();
							}
						}}>
						{isPaused ? 'play' : 'pause'}
					</Button>
					<input
						type='range'
						id='progressSlider'
						min='0'
						max='1'
						value='0'
						step='0.001'
					/>
					<Box id='progress'>0.00</Box>
				</Box>
			</Box>

			<Box sx={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
				<Button variant='contained' onClick={() => tigerTween?.time(3)}>
					{'animation.time(3)'}
				</Button>
				<Button variant='contained' onClick={() => tigerTween?.timeScale(3)}>
					{'animation.timeScale(2)'}
				</Button>
			</Box>
			<Divider flexItem />
		</PageLayout>
	);
};

export default UsingMotionPath;
