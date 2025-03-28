import { Box, Divider, Typography } from '@mui/material';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import CodeBlock from '../common/CodeBlock';
import PageLayout from '../../layout/PageLayout';
import AnimatedBox from '../common/AnimatedBox';
import CollapsibleBox from '../common/CollapsibleBox';
import InfoPaper from '../common/InfoPaper';

const CODESTRING = [
	`/**
 * Creates a tween going TO the given values.
 *
 * gsap.to(".class", {x: 100});
 *
 * @param {TweenTarget} targets
 * @param {TweenVars} vars
 * @returns {Tween} Tween instance
 * @memberof gsap
 * @link https://greensock.com/docs/v3/GSAP/gsap.to()
 */
function to(targets: TweenTarget, vars: TweenVars): core.Tween;`,
	`/**
 * Gets or sets GSAP's global defaults. These will be inherited by every tween.
 * 
 * gsap.defaults({ease: "none", duration: 1});
 *
 * @param {TweenVars} [defaults]
 * @returns {TweenVars} Defaults object
 * @memberof gsap
 * @link https://greensock.com/docs/v3/GSAP/gsap.defaults()
 */
function defaults(defaults?: TweenVars): TweenVars;
`,
	`type TweenTarget = string | object | null; `,
	`interface CallbackVars {
  callbackScope?: object;
  onComplete?: Callback;
  onCompleteParams?: any[];
  onRepeat?: Callback;
  onRepeatParams?: any[];
  onReverseComplete?: Callback;
  onReverseCompleteParams?: any[];
  onStart?: Callback;
  onStartParams?: any[];
  onUpdate?: Callback;
  onUpdateParams?: any[];
}

interface AnimationVars extends CallbackVars {
  [key: string]: any;
  data?: any;    
  id?: string | number;
  inherit?: boolean;
  paused?: boolean;
  repeat?: number;
  repeatDelay?: number;
  repeatRefresh?: boolean;
  reversed?: boolean;
  yoyo?: boolean;
}  

interface TweenVars extends AnimationVars {
  delay?: TweenValue;
  duration?: TweenValue;
  ease?: string | EaseFunction;
  endArray?: any[];
  immediateRender?: boolean;    
  lazy?: boolean;
  keyframes?: TweenVars[] | object;
  onInterrupt?: Callback;
  onInterruptParams?: any[];
  overwrite?: "auto" | boolean;
  runBackwards?: boolean;
  stagger?: NumberValue | StaggerVars;
  startAt?: TweenVars;
  yoyoEase?: boolean | string | EaseFunction;
}

type TweenValue = NumberValue | StringValue;

// GSAP specific
interface CSSProperties {
  [key: string]: any;
  alpha: TweenValue;
  autoAlpha: TweenValue;
  rotate: TweenValue;
  rotateX: TweenValue;
  rotateY: TweenValue;
  rotateZ: TweenValue;
  rotation: TweenValue;
  rotationX: TweenValue;
  rotationY: TweenValue;
  rotationZ: TweenValue;
  scale: TweenValue;
  scaleX: TweenValue;
  scaleY: TweenValue;
  skew: TweenValue;
  skewX: TweenValue;
  skewY: TweenValue;
  smoothOrigin: BooleanValue;
  svgOrigin: TweenValue;
  translateX: TweenValue;
  translateY: TweenValue;
  translateZ: TweenValue;
  x: TweenValue;
  xPercent: TweenValue;
  y: TweenValue;
  yPercent: TweenValue;
  z: TweenValue;
}

interface CSSProperties {
  alignContent: TweenValue;
  alignItems: TweenValue;
  alignSelf: TweenValue;
  alignmentBaseline: TweenValue;
  animation: TweenValue;
  animationDelay: TweenValue;
  animationDirection: TweenValue;
  animationDuration: TweenValue;
  animationFillMode: TweenValue;
  animationIterationCount: TweenValue;
  animationName: TweenValue;
  animationPlayState: TweenValue;
  animationTimingFunction: TweenValue;
  backfaceVisibility: TweenValue;
  background: TweenValue;
  backgroundAttachment: TweenValue;
  backgroundClip: TweenValue;
  backgroundColor: TweenValue;
  backgroundImage: TweenValue;
  backgroundOrigin: TweenValue;
  backgroundPosition: TweenValue;
  backgroundPositionX: TweenValue;
  backgroundPositionY: TweenValue;
  backgroundRepeat: TweenValue;
  backgroundSize: TweenValue;
  baselineShift: TweenValue;
  border: TweenValue;
  borderBottom: TweenValue;
  borderBottomColor: TweenValue;
  borderBottomLeftRadius: TweenValue;
  borderBottomRightRadius: TweenValue;
  borderBottomStyle: TweenValue;
  borderBottomWidth: TweenValue;
  borderCollapse: TweenValue;
  borderColor: TweenValue;
  borderImage: TweenValue;
  borderImageOutset: TweenValue;
  borderImageRepeat: TweenValue;
  borderImageSlice: TweenValue;
  borderImageSource: TweenValue;
  borderImageWidth: TweenValue;
  borderLeft: TweenValue;
  borderLeftColor: TweenValue;
  borderLeftStyle: TweenValue;
  borderLeftWidth: TweenValue;
  borderRadius: TweenValue;
  borderRight: TweenValue;
  borderRightColor: TweenValue;
  borderRightStyle: TweenValue;
  borderRightWidth: TweenValue;
  borderSpacing: TweenValue;
  borderStyle: TweenValue;
  borderTop: TweenValue;
  borderTopColor: TweenValue;
  borderTopLeftRadius: TweenValue;
  borderTopRightRadius: TweenValue;
  borderTopStyle: TweenValue;
  borderTopWidth: TweenValue;
  borderWidth: TweenValue;
  bottom: TweenValue;
  boxShadow: TweenValue;
  boxSizing: TweenValue;
  breakAfter: TweenValue;
  breakBefore: TweenValue;
  breakInside: TweenValue;
  captionSide: TweenValue;
  caretColor: TweenValue;
  clear: TweenValue;
  clip: TweenValue;
  clipPath: TweenValue;
  clipRule: TweenValue;
  color: TweenValue;
  colorInterpolationFilters: TweenValue;
  columnCount: TweenValue;
  columnFill: TweenValue;
  columnGap: TweenValue;
  columnRule: TweenValue;
  columnRuleColor: TweenValue;
  columnRuleStyle: TweenValue;
  columnRuleWidth: TweenValue;
  columnSpan: TweenValue;
  columnWidth: TweenValue;
  columns: TweenValue;
  content: TweenValue;
  counterIncrement: TweenValue;
  counterReset: TweenValue;
  cssFloat: TweenValue;
  cssText: TweenValue;
  cursor: TweenValue;
  direction: TweenValue;
  display: TweenValue;
  dominantBaseline: TweenValue;
  emptyCells: TweenValue;
  enableBackground: TweenValue;
  fill: TweenValue;
  fillOpacity: TweenValue;
  fillRule: TweenValue;
  filter: TweenValue;
  flex: TweenValue;
  flexBasis: TweenValue;
  flexDirection: TweenValue;
  flexFlow: TweenValue;
  flexGrow: TweenValue;
  flexShrink: TweenValue;
  flexWrap: TweenValue;
  floodColor: TweenValue;
  floodOpacity: TweenValue;
  font: TweenValue;
  fontFamily: TweenValue;
  fontFeatureSettings: TweenValue;
  fontKerning: TweenValue;
  fontSize: TweenValue;
  fontSizeAdjust: TweenValue;
  fontStretch: TweenValue;
  fontStyle: TweenValue;
  fontSynthesis: TweenValue;
  fontVariant: TweenValue;
  fontVariantCaps: TweenValue;
  fontVariantEastAsian: TweenValue;
  fontVariantLigatures: TweenValue;
  fontVariantNumeric: TweenValue;
  fontVariantPosition: TweenValue;
  fontWeight: TweenValue;
  gap: TweenValue;
  glyphOrientationHorizontal: TweenValue;
  glyphOrientationVertical: TweenValue;
  grid: TweenValue;
  gridArea: TweenValue;
  gridAutoColumns: TweenValue;
  gridAutoFlow: TweenValue;
  gridAutoRows: TweenValue;
  gridColumn: TweenValue;
  gridColumnEnd: TweenValue;
  gridColumnGap: TweenValue;
  gridColumnStart: TweenValue;
  gridGap: TweenValue;
  gridRow: TweenValue;
  gridRowEnd: TweenValue;
  gridRowGap: TweenValue;
  gridRowStart: TweenValue;
  gridTemplate: TweenValue;
  gridTemplateAreas: TweenValue;
  gridTemplateColumns: TweenValue;
  gridTemplateRows: TweenValue;
  height: TweenValue;
  hyphens: TweenValue;
  imageOrientation: TweenValue;
  imageRendering: TweenValue;
  imeMode: TweenValue;
  justifyContent: TweenValue;
  justifyItems: TweenValue;
  justifySelf: TweenValue;
  kerning: TweenValue;
  layoutGrid: TweenValue;
  layoutGridChar: TweenValue;
  layoutGridLine: TweenValue;
  layoutGridMode: TweenValue;
  layoutGridType: TweenValue;
  left: TweenValue;
  letterSpacing: TweenValue;
  lightingColor: TweenValue;
  lineBreak: TweenValue;
  lineHeight: TweenValue;
  listStyle: TweenValue;
  listStyleImage: TweenValue;
  listStylePosition: TweenValue;
  listStyleType: TweenValue;
  margin: TweenValue;
  marginBottom: TweenValue;
  marginLeft: TweenValue;
  marginRight: TweenValue;
  marginTop: TweenValue;
  marker: TweenValue;
  markerEnd: TweenValue;
  markerMid: TweenValue;
  markerStart: TweenValue;
  mask: TweenValue;
  maskComposite: TweenValue;
  maskImage: TweenValue;
  maskPosition: TweenValue;
  maskRepeat: TweenValue;
  maskSize: TweenValue;
  maskType: TweenValue;
  maxHeight: TweenValue;
  maxWidth: TweenValue;
  minHeight: TweenValue;
  minWidth: TweenValue;
  msContentZoomChaining: TweenValue;
  msContentZoomLimit: TweenValue;
  msContentZoomLimitMax: any;
  msContentZoomLimitMin: any;
  msContentZoomSnap: TweenValue;
  msContentZoomSnapPoints: TweenValue;
  msContentZoomSnapType: TweenValue;
  msContentZooming: TweenValue;
  msFlowFrom: TweenValue;
  msFlowInto: TweenValue;
  msFontFeatureSettings: TweenValue;
  msGridColumn: any;
  msGridColumnAlign: TweenValue;
  msGridColumnSpan: any;
  msGridColumns: TweenValue;
  msGridRow: any;
  msGridRowAlign: TweenValue;
  msGridRowSpan: any;
  msGridRows: TweenValue;
  msHighContrastAdjust: TweenValue;
  msHyphenateLimitChars: TweenValue;
  msHyphenateLimitLines: any;
  msHyphenateLimitZone: any;
  msHyphens: TweenValue;
  msImeAlign: TweenValue;
  msOverflowStyle: TweenValue;
  msScrollChaining: TweenValue;
  msScrollLimit: TweenValue;
  msScrollLimitXMax: any;
  msScrollLimitXMin: any;
  msScrollLimitYMax: any;
  msScrollLimitYMin: any;
  msScrollRails: TweenValue;
  msScrollSnapPointsX: TweenValue;
  msScrollSnapPointsY: TweenValue;
  msScrollSnapType: TweenValue;
  msScrollSnapX: TweenValue;
  msScrollSnapY: TweenValue;
  msScrollTranslation: TweenValue;
  msTextCombineHorizontal: TweenValue;
  msTextSizeAdjust: any;
  msTouchAction: TweenValue;
  msTouchSelect: TweenValue;
  msUserSelect: TweenValue;
  msWrapFlow: TweenValue;
  msWrapMargin: any;
  msWrapThrough: TweenValue;
  objectFit: TweenValue;
  objectPosition: TweenValue;
  opacity: TweenValue;
  order: TweenValue;
  orphans: TweenValue;
  outline: TweenValue;
  outlineColor: TweenValue;
  outlineOffset: TweenValue;
  outlineStyle: TweenValue;
  outlineWidth: TweenValue;
  overflow: TweenValue;
  overflowAnchor: TweenValue;
  overflowWrap: TweenValue;
  overflowX: TweenValue;
  overflowY: TweenValue;
  padding: TweenValue;
  paddingBottom: TweenValue;
  paddingLeft: TweenValue;
  paddingRight: TweenValue;
  paddingTop: TweenValue;
  pageBreakAfter: TweenValue;
  pageBreakBefore: TweenValue;
  pageBreakInside: TweenValue;
  penAction: TweenValue;
  perspective: TweenValue;
  perspectiveOrigin: TweenValue;
  placeContent: TweenValue;
  placeItems: TweenValue;
  placeSelf: TweenValue;
  pointerEvents: TweenValue;
  position: TweenValue;
  quotes: TweenValue;
  resize: TweenValue;
  right: TweenValue;
  rotate: TweenValue;
  rowGap: TweenValue;
  rubyAlign: TweenValue;
  rubyOverhang: TweenValue;
  rubyPosition: TweenValue;
  scale: TweenValue;
  scrollBehavior: TweenValue;
  stopColor: TweenValue;
  stopOpacity: TweenValue;
  stroke: TweenValue;
  strokeDasharray: TweenValue;
  strokeDashoffset: TweenValue;
  strokeLinecap: TweenValue;
  strokeLinejoin: TweenValue;
  strokeMiterlimit: TweenValue;
  strokeOpacity: TweenValue;
  strokeWidth: TweenValue;
  tabSize: TweenValue;
  tableLayout: TweenValue;
  textAlign: TweenValue;
  textAlignLast: TweenValue;
  textAnchor: TweenValue;
  textCombineUpright: TweenValue;
  textDecoration: TweenValue;
  textDecorationColor: TweenValue;
  textDecorationLine: TweenValue;
  textDecorationStyle: TweenValue;
  textEmphasis: TweenValue;
  textEmphasisColor: TweenValue;
  textEmphasisPosition: TweenValue;
  textEmphasisStyle: TweenValue;
  textIndent: TweenValue;
  textJustify: TweenValue;
  textKashida: TweenValue;
  textKashidaSpace: TweenValue;
  textOrientation: TweenValue;
  textOverflow: TweenValue;
  textShadow: TweenValue;
  textTransform: TweenValue;
  textUnderlinePosition: TweenValue;
  top: TweenValue;
  touchAction: TweenValue;
  transform: TweenValue;
  transformBox: TweenValue;
  transformOrigin: TweenValue;
  transformStyle: TweenValue;
  transition: TweenValue;
  transitionDelay: TweenValue;
  transitionDuration: TweenValue;
  transitionProperty: TweenValue;
  transitionTimingFunction: TweenValue;
  translate: TweenValue;
  unicodeBidi: TweenValue;
  userSelect: TweenValue;
  verticalAlign: TweenValue;
  visibility: TweenValue;
  /** @deprecated */
  webkitAlignContent: TweenValue;
  /** @deprecated */
  webkitAlignItems: TweenValue;
  /** @deprecated */
  webkitAlignSelf: TweenValue;
  /** @deprecated */
  webkitAnimation: TweenValue;
  /** @deprecated */
  webkitAnimationDelay: TweenValue;
  /** @deprecated */
  webkitAnimationDirection: TweenValue;
  /** @deprecated */
  webkitAnimationDuration: TweenValue;
  /** @deprecated */
  webkitAnimationFillMode: TweenValue;
  /** @deprecated */
  webkitAnimationIterationCount: TweenValue;
  /** @deprecated */
  webkitAnimationName: TweenValue;
  /** @deprecated */
  webkitAnimationPlayState: TweenValue;
  /** @deprecated */
  webkitAnimationTimingFunction: TweenValue;
  /** @deprecated */
  webkitAppearance: TweenValue;
  /** @deprecated */
  webkitBackfaceVisibility: TweenValue;
  /** @deprecated */
  webkitBackgroundClip: TweenValue;
  /** @deprecated */
  webkitBackgroundOrigin: TweenValue;
  /** @deprecated */
  webkitBackgroundSize: TweenValue;
  /** @deprecated */
  webkitBorderBottomLeftRadius: TweenValue;
  /** @deprecated */
  webkitBorderBottomRightRadius: TweenValue;
  webkitBorderImage: TweenValue;
  /** @deprecated */
  webkitBorderRadius: TweenValue;
  /** @deprecated */
  webkitBorderTopLeftRadius: TweenValue;
  /** @deprecated */
  webkitBorderTopRightRadius: TweenValue;
  /** @deprecated */
  webkitBoxAlign: TweenValue;
  webkitBoxDirection: TweenValue;
  /** @deprecated */
  webkitBoxFlex: TweenValue;
  /** @deprecated */
  webkitBoxOrdinalGroup: TweenValue;
  webkitBoxOrient: TweenValue;
  /** @deprecated */
  webkitBoxPack: TweenValue;
  /** @deprecated */
  webkitBoxShadow: TweenValue;
  /** @deprecated */
  webkitBoxSizing: TweenValue;
  webkitColumnBreakAfter: TweenValue;
  webkitColumnBreakBefore: TweenValue;
  webkitColumnBreakInside: TweenValue;
  webkitColumnCount: any;
  webkitColumnGap: any;
  webkitColumnRule: TweenValue;
  webkitColumnRuleColor: any;
  webkitColumnRuleStyle: TweenValue;
  webkitColumnRuleWidth: any;
  webkitColumnSpan: TweenValue;
  webkitColumnWidth: any;
  webkitColumns: TweenValue;
  /** @deprecated */
  webkitFilter: TweenValue;
  /** @deprecated */
  webkitFlex: TweenValue;
  /** @deprecated */
  webkitFlexBasis: TweenValue;
  /** @deprecated */
  webkitFlexDirection: TweenValue;
  /** @deprecated */
  webkitFlexFlow: TweenValue;
  /** @deprecated */
  webkitFlexGrow: TweenValue;
  /** @deprecated */
  webkitFlexShrink: TweenValue;
  /** @deprecated */
  webkitFlexWrap: TweenValue;
  /** @deprecated */
  webkitJustifyContent: TweenValue;
  webkitLineClamp: TweenValue;
  /** @deprecated */
  webkitMask: TweenValue;
  /** @deprecated */
  webkitMaskBoxImage: TweenValue;
  /** @deprecated */
  webkitMaskBoxImageOutset: TweenValue;
  /** @deprecated */
  webkitMaskBoxImageRepeat: TweenValue;
  /** @deprecated */
  webkitMaskBoxImageSlice: TweenValue;
  /** @deprecated */
  webkitMaskBoxImageSource: TweenValue;
  /** @deprecated */
  webkitMaskBoxImageWidth: TweenValue;
  /** @deprecated */
  webkitMaskClip: TweenValue;
  /** @deprecated */
  webkitMaskComposite: TweenValue;
  /** @deprecated */
  webkitMaskImage: TweenValue;
  /** @deprecated */
  webkitMaskOrigin: TweenValue;
  /** @deprecated */
  webkitMaskPosition: TweenValue;
  /** @deprecated */
  webkitMaskRepeat: TweenValue;
  /** @deprecated */
  webkitMaskSize: TweenValue;
  /** @deprecated */
  webkitOrder: TweenValue;
  /** @deprecated */
  webkitPerspective: TweenValue;
  /** @deprecated */
  webkitPerspectiveOrigin: TweenValue;
  webkitTapHighlightColor: TweenValue;
  /** @deprecated */
  webkitTextFillColor: TweenValue;
  /** @deprecated */
  webkitTextSizeAdjust: TweenValue;
  /** @deprecated */
  webkitTextStroke: TweenValue;
  /** @deprecated */
  webkitTextStrokeColor: TweenValue;
  /** @deprecated */
  webkitTextStrokeWidth: TweenValue;
  /** @deprecated */
  webkitTransform: TweenValue;
  /** @deprecated */
  webkitTransformOrigin: TweenValue;
  /** @deprecated */
  webkitTransformStyle: TweenValue;
  /** @deprecated */
  webkitTransition: TweenValue;
  /** @deprecated */
  webkitTransitionDelay: TweenValue;
  /** @deprecated */
  webkitTransitionDuration: TweenValue;
  /** @deprecated */
  webkitTransitionProperty: TweenValue;
  /** @deprecated */
  webkitTransitionTimingFunction: TweenValue;
  webkitUserModify: TweenValue;
  webkitUserSelect: TweenValue;
  webkitWritingMode: TweenValue;
  whiteSpace: TweenValue;
  widows: TweenValue;
  width: TweenValue;
  willChange: TweenValue;
  wordBreak: TweenValue;
  wordSpacing: TweenValue;
  wordWrap: TweenValue;
  writingMode: TweenValue;
  zIndex: TweenValue;
  zoom: TweenValue;
}

/**
 * Make all properties in T optional
 */
type Partial<T> = {
    [P in keyof T]?: T[P];
};

interface CSSVars extends Partial<CSSProperties> { }

/**
 * CSS 프로퍼티
 */

interface TweenVars extends CSSVars {
  css?: CSSVars;
}
`,
	`
  x:100 -> transform: translateX(100px)
  y:100 -> transform: translateY(100px)
  rotation: 360 -> transform: rotate(360deg)
  rotationX: 360 -> transform: rotateX(360deg)
  rotationY: 360 -> transform: rotateY(360deg)
  skewX: 45 -> transform: skewX(45deg)
  skewY: 45 -> transform: skewY(45deg)
  scale: 2 -> transform: scale(2, 2)
  scaleX: 2 -> transform: scaleX(2)
  scaleY: 2 -> transform: scaleY(2)
  xPercent: -50 -> transform: translateX(-50%)
  yPercent: -50 -> transform: translateY(-50%)
  x: "50%" -> transform: translateX(50%)

`,
];

const BasicTweening = () => {
	const tweenRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			// target the element with a class of "green" - rotate and move TO 100px to the left over the course of 1 second.
			gsap.to('.green', {
				x: 400,
				y: 0,
				scale: 3,
				rotation: 360,
				duration: 2,
				repeat: -1,
				opacity: 0.5,
				yoyo: true,
				ease: 'power1.inOut',
				backgroundColor: 'random([#ff0000, #00ff00, #0000ff])',
				borderColor: 'random([#00ff00, #0000ff, #ff0000])',
				borderWidth: 'random([1, 5])',
				boxShadow: '0px 0px 20px rgba(255,255,255,0.5)',
			});
		}, tweenRef);

		return () => ctx.revert();
	}, []);
	return (
		<PageLayout>
			<Box
				ref={tweenRef}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignSelf: 'flex-start',
					gap: '1rem',
				}}>
				<AnimatedBox
					className='green'
					size={'sm'}
					sx={{ position: 'relative', zIndex: 9999 }}></AnimatedBox>
			</Box>

			<Typography variant='h1'>Tweening</Typography>

			<Typography variant='h2'>주어진 값으로 이동하는 트윈 생성</Typography>
			<CodeBlock language='tsx' codeString={CODESTRING[0]} />
			<Divider flexItem />

			<Typography variant='h2'>GSAP의 글로벌 기본값을 가져오거나 설정하기</Typography>
			<Typography variant='body2'>이 기본값은 모든 트윈에 상속됩니다.</Typography>
			<CodeBlock language='tsx' codeString={CODESTRING[1]} />
			<Divider flexItem />

			<Typography variant='h2'>
				gsap.to(targets: TweenTarget, vars: TweenVars)의 TweenTarget
			</Typography>
			<CollapsibleBox title={<Typography variant='body2'>TweenTarget의 타입</Typography>}>
				<CodeBlock language='tsx' codeString={CODESTRING[2]} />
			</CollapsibleBox>
			<Divider flexItem />

			<Typography variant='h2'>
				gsap.to(targets: TweenTarget, vars: TweenVars)의 TweenVars
			</Typography>
			<CollapsibleBox title={<Typography variant='body2'>TweenVars의 타입</Typography>}>
				<CodeBlock language='tsx' codeString={CODESTRING[3]} />
			</CollapsibleBox>
			<Divider flexItem />

			<Typography variant='h2'>Short codes properties</Typography>
			<CollapsibleBox title={<Typography variant='body2'>Short codes properties</Typography>}>
				<CodeBlock language='tsx' codeString={CODESTRING[4]} title='의사코드' />
			</CollapsibleBox>

			<InfoPaper>
				{
					'브라우저 성능을 최대치로 끌어올리기 위해선 CSS Transform과 Opacity의 애니메이션을 사용하세요.\nCSS Transform 과 Opacity 가 아닌 값을 변경하면 브라우저가 페이지 레이아웃을 다시 랜더링(re-rander)하여 트윈이 많을 경우 성능을 저하시킬 수 있습니다.'
				}
			</InfoPaper>
		</PageLayout>
	);
};

export default BasicTweening;
