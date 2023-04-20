import { Box, Button, Divider, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import CodeBlock from '../common/CodeBlock';
import PageLayout from '../../layout/PageLayout';
import AnimatedBox from '../common/AnimatedBox';
import { Flip } from 'gsap/Flip';

const CODESTRING = [
	`const app = useRef<HTMLDivElement>(null);
const [active, setActive] = useState<boolean>(true);
const [ctx] = useState<gsap.Context>(gsap.context(() => {}, app));

useEffect(() => {
  ctx.add('remove', () => {
    if (ctx.selector) {
      gsap.to(ctx.selector('.box'), {
        opacity: 0,
        onComplete: () => setActive(false),
      });
    }
  });
  return () => ctx.revert();
}, [ctx]);

return (
  <Box ref={app} sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    <Button variant='contained' onClick={() => active && ctx.remove()}>
      {active ? 'Remove Box' : 'Done'}
    </Button>
    {active ? (
      <AnimatedBox className='box' size={'md'}>
        Box
      </AnimatedBox>
    ) : null}
  </Box>
)`,
	`interface Item {
  id: number;
  color: string;
}

const ExitAnimationsArr = () => {
  const [items, setItems] = useState<Item[]>(() => [
    { id: 0, color: 'blue' },
    { id: 1, color: 'red' },
    { id: 2, color: 'purple' },
  ]);
  const [ctx] = useState<gsap.Context>(() => gsap.context(() => {}));

  const removeItem = (value: Item) => {
    setItems((prev) => prev.filter((item) => item !== value));
  };

  useEffect(() => {
    ctx.add('remove', (item: Item, target: HTMLElement | EventTarget) => {
      gsap.to(target, {
        opacity: 0,
        onComplete: () => removeItem(item),
      });
    });
    return () => ctx.revert();
  }, [ctx]);

  return (
    <Box className='app boxes' sx={{ display: 'flex', gap: '2rem' }}>
      {items.map((item) => (
        <AnimatedBox
          className={\`box \${item.color}\`}
          key={item.id}
          size={'md'}
          onClick={(e) => ctx.remove(item, e.currentTarget)}>
          Click Me
        </AnimatedBox>
      ))}
    </Box>
  );
};
`,
];

interface Item {
	id: number;
	color: string;
}

const ExitAnimationsArr = () => {
	const [items, setItems] = useState<Item[]>(() => [
		{ id: 0, color: 'blue' },
		{ id: 1, color: 'red' },
		{ id: 2, color: 'purple' },
	]);
	const [ctx] = useState<gsap.Context>(() => gsap.context(() => {}));

	const removeItem = (value: Item) => {
		setItems((prev) => prev.filter((item) => item !== value));
	};

	useEffect(() => {
		ctx.add('remove', (item: Item, target: HTMLElement | EventTarget) => {
			gsap.to(target, {
				opacity: 0,
				onComplete: () => removeItem(item),
			});
		});
		return () => ctx.revert();
	}, [ctx]);

	return (
		<Box className='app boxes' sx={{ display: 'flex', gap: '2rem' }}>
			{items.map((item) => (
				<AnimatedBox
					className={`box ${item.color}`}
					key={item.id}
					size={'md'}
					onClick={(e) => ctx.remove(item, e.currentTarget)}>
					Click Me
				</AnimatedBox>
			))}
		</Box>
	);
};

const ExitAnimations = () => {
	const app = useRef<HTMLDivElement>(null);
	const [active, setActive] = useState<boolean>(true);
	const [ctx] = useState<gsap.Context>(gsap.context(() => {}, app));

	useEffect(() => {
		ctx.add('remove', () => {
			if (ctx.selector) {
				gsap.to(ctx.selector('.box'), {
					opacity: 0,
					onComplete: () => setActive(false),
				});
			}
		});
		return () => ctx.revert();
	}, [ctx]);

	return (
		<PageLayout>
			<Typography variant='h1'>Exit animations</Typography>
			<Typography variant='body2'>
				{
					'DOM을 빠져나가는 엘리먼트에 애니메이션을 적용하려면 React가 엘리먼트를 제거하는 시점을 지연시켜야 합니다.\n애니메이션이 완료된 후 컴포넌트의 상태를 변경하여 이를 수행할 수 있습니다.'
				}
			</Typography>

			<Box ref={app} sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
				<Button variant='contained' onClick={() => active && ctx.remove()}>
					{active ? 'Remove Box' : 'Done'}
				</Button>
				{active ? (
					<AnimatedBox className='box' size={'md'}>
						Box
					</AnimatedBox>
				) : null}
			</Box>
			<CodeBlock language='tsx' codeString={CODESTRING[0]} title={'구현 코드'} />
			<Divider flexItem />

			<Typography variant='body2'>
				{'배열에서 요소를 렌더링할 때도 동일한 접근 방식을 사용할 수 있습니다.'}
			</Typography>
			<ExitAnimationsArr />
			<CodeBlock language='tsx' codeString={CODESTRING[1]} title={'구현 코드'} />
		</PageLayout>
	);
};

export default ExitAnimations;
