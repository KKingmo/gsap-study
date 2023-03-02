import { styled } from '@mui/material/styles';
import { gsap } from 'gsap';
import { useLayoutEffect, useRef } from 'react';

const Gsap1 = () => {
  const comp = useRef<HTMLDivElement | null>(null);
  const circle = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to('.box', { rotation: 360 });
      gsap.to(circle.current, { rotation: 360 });
    }, comp);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <Wrapper>
      <h1>첫번째, 돌리기</h1>
      <RefLink
        href="https://greensock.com/react/"
        target="_blank"
        rel="noreferrer noopener"
      >
        참고링크
      </RefLink>
      <Comp ref={comp}>
        <div className="box">selector</div>
        <div className="circle" ref={circle}>
          Ref
        </div>
      </Comp>
    </Wrapper>
  );
};
export default Gsap1;

const Wrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#f7f7f7',
}));

const RefLink = styled('a')(() => ({
  color: '#0000ff',
}));

const Comp = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  paddingTop: '2rem',
  backgroundColor: '#fff',
  '& > .box': {
    width: '100px',
    height: '100px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#28a92b',
    color: '#fff',
  },
  '& > .circle': {
    width: '100px',
    height: '100px',
    borderRadius: '99%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#8d3dae',
    color: '#fff',
  },
}));
