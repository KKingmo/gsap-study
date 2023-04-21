import { Box, Button, Divider, Typography } from '@mui/material';
import { useCallback, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
import CodeBlock from '../common/CodeBlock';
import PageLayout from '../../layout/PageLayout';

const CODESTRING = [
	`let count = 0;

gsap.registerPlugin(Flip);

const wrapColor = gsap.utils.wrap(['blue', 'red', 'purple', 'orange']);

type Item = { id: number; color: string; status: string };

const createItem = () => {
  return { id: ++count, color: wrapColor(count), status: 'entered' };
};

const ExitAnimationsAdvanced = () => {
  const el = useRef<HTMLDivElement | null>(null);
  const q = gsap.utils.selector(el);

  const removeItems = useCallback(
    (exitingItems: Item[]) => {
      if (!exitingItems.length) return;

      setLayout((prev) => ({
        state: Flip.getState(q('.box, .button')),
        items: prev.items.filter((item) => !exitingItems.includes(item)),
      }));
    },
    [q],
  );

  const [layout, setLayout] = useState<{ items: Item[]; state?: Flip.FlipState }>(() => ({
    items: [createItem(), createItem(), createItem(), createItem()].reverse(),
  }));
  const [ctx] = useState(() => gsap.context(() => {}));

  useEffect(() => {
    return () => ctx.revert();
  }, [ctx]);

  useEffect(() => {
    // get the items that are exiting in this batch
    const exiting = layout.items.filter((item) => item.status === 'exiting');
    ctx.add(() => {
      // Flip.from returns a timeline
      if (!layout.state) return;
      const timeline = Flip.from(layout.state, {
        absolute: true,
        ease: 'power1.inOut',
        targets: q('.box, .button'),
        scale: true,
        simple: true,
        onEnter: (elements) => {
          return gsap.fromTo(
            elements,
            {
              opacity: 0,
              scale: 0,
            },
            {
              opacity: 1,
              scale: 1,
              delay: 0.2,
              duration: 0.3,
            },
          );
        },
        onLeave: (elements) => {
          return gsap.to(elements, {
            opacity: 0,
            scale: 0,
          });
        },
      });

      // remove the exiting items from the DOM after the animation is done
      timeline.add(() => removeItems(exiting));
    });
  }, [ctx, layout, q, removeItems]);

  const addItem = () => {
    setLayout({
      state: Flip.getState(q('.box, .button')),
      items: [createItem(), ...layout.items],
    });
  };

  const shuffle = () => {
    setLayout({
      state: Flip.getState(q('.box, .button')),
      items: [...gsap.utils.shuffle(layout.items)],
    });
  };

  const remove = (item: Item) => {
    // set the item as exiting which will add a CSS class for display: none;
    item.status = 'exiting';

    setLayout({
      ...layout,
      state: Flip.getState(q('.box, .button')),
    });
  };
  return (
    <PageLayout>
      <Box
        className='text-center'
        ref={el}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'start',
          padding: '1rem 0',
          width: '100%',
          height: 'auto',
          minHeight: '300px',
          '.button': {
            userSelect: 'none',
          },
          '.box': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '10px 10px 0 0',
            userSelect: 'none',
            width: '100px',
            height: '100px',
            borderRadius: '12px',
            color: '#fff',
            '&.exiting, &.exited': {
              display: 'none',
            },
          },
          '.boxes': {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          },
        }}>
        <Box sx={{ display: 'flex', gap: '1rem' }}>
          <Button variant='contained' className='button' onClick={addItem}>
            Add Box
          </Button>
          <Button variant='contained' className='button' onClick={shuffle}>
            Shuffle
          </Button>
        </Box>
        <div className='boxes'>
          {layout.items.map((item) => (
            <Box
              id={\`box-\${item.id}\`}
              key={item.id}
              className={\`box \${item.color} \${item.status}\`}
              sx={{ backgroundColor: \`\${item.color}\` }}
              onClick={() => remove(item)}>
              Click Me
            </Box>
          ))}
        </div>
      </Box>
    </PageLayout>
  );
};

export default ExitAnimationsAdvanced;`,
];
let count = 0;

gsap.registerPlugin(Flip);

const wrapColor = gsap.utils.wrap(['blue', 'red', 'purple', 'orange']);

type Item = { id: number; color: string; status: string };

const createItem = () => {
	return { id: ++count, color: wrapColor(count), status: 'entered' };
};

const ExitAnimationsAdvanced = () => {
	const el = useRef<HTMLDivElement | null>(null);
	const q = gsap.utils.selector(el);

	const removeItems = useCallback(
		(exitingItems: Item[]) => {
			if (!exitingItems.length) return;

			setLayout((prev) => ({
				state: Flip.getState(q('.box, .button')),
				items: prev.items.filter((item) => !exitingItems.includes(item)),
			}));
		},
		[q],
	);

	const [layout, setLayout] = useState<{ items: Item[]; state?: Flip.FlipState }>(() => ({
		items: [createItem(), createItem(), createItem(), createItem()].reverse(),
	}));
	const [ctx] = useState(() => gsap.context(() => {}));

	useEffect(() => {
		return () => ctx.revert();
	}, [ctx]);

	useEffect(() => {
		// get the items that are exiting in this batch
		const exiting = layout.items.filter((item) => item.status === 'exiting');
		ctx.add(() => {
			// Flip.from returns a timeline
			if (!layout.state) return;
			const timeline = Flip.from(layout.state, {
				absolute: true,
				ease: 'power1.inOut',
				targets: q('.box, .button'),
				scale: true,
				simple: true,
				onEnter: (elements) => {
					return gsap.fromTo(
						elements,
						{
							opacity: 0,
							scale: 0,
						},
						{
							opacity: 1,
							scale: 1,
							delay: 0.2,
							duration: 0.3,
						},
					);
				},
				onLeave: (elements) => {
					return gsap.to(elements, {
						opacity: 0,
						scale: 0,
					});
				},
			});

			// remove the exiting items from the DOM after the animation is done
			timeline.add(() => removeItems(exiting));
		});
	}, [ctx, layout, q, removeItems]);

	const addItem = () => {
		setLayout({
			state: Flip.getState(q('.box, .button')),
			items: [createItem(), ...layout.items],
		});
	};

	const shuffle = () => {
		setLayout({
			state: Flip.getState(q('.box, .button')),
			items: [...gsap.utils.shuffle(layout.items)],
		});
	};

	const remove = (item: Item) => {
		// set the item as exiting which will add a CSS class for display: none;
		item.status = 'exiting';

		setLayout({
			...layout,
			state: Flip.getState(q('.box, .button')),
		});
	};
	return (
		<PageLayout>
			<Typography variant='h1'>Exit animations Advanced</Typography>
			<Typography variant='body2'>
				{
					'이전 파트에서 구현한 Exit animations 컴포넌트를 보완한 구현을 해보겠습니다.\n이전 파트에서 혹자는 레이아웃이 바뀌는 것을 눈치챘을 수도 있습니다.\n이는 종료 애니메이션에서 흔히 볼 수 있는 현상입니다.\n플립 플러그인을 사용하면 이 문제를 부드럽게 해결할 수 있습니다.'
				}
			</Typography>
			<Typography variant='body2'>
				{
					'이번 파트에서는 Flip의 onEnter와 onLeave를 활용해 애니메이션을 정의합니다.\nonLeave를 트리거하려면 애니메이션을 빼고자 하는 요소에 display: none을 설정해야 합니다.'
				}
			</Typography>

			<Box
				className='text-center'
				ref={el}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'start',
					padding: '1rem 0',
					width: '100%',
					height: 'auto',
					minHeight: '300px',
					'.button': {
						userSelect: 'none',
					},
					'.box': {
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						margin: '10px 10px 0 0',
						userSelect: 'none',
						width: '100px',
						height: '100px',
						borderRadius: '12px',
						color: '#fff',
						'&.exiting, &.exited': {
							display: 'none',
						},
					},
					'.boxes': {
						display: 'flex',
						flexDirection: 'row',
						flexWrap: 'wrap',
					},
				}}>
				<Box sx={{ display: 'flex', gap: '1rem' }}>
					<Button variant='contained' className='button' onClick={addItem}>
						Add Box
					</Button>
					<Button variant='contained' className='button' onClick={shuffle}>
						Shuffle
					</Button>
				</Box>
				<div className='boxes'>
					{layout.items.map((item) => (
						<Box
							id={`box-${item.id}`}
							key={item.id}
							className={`box ${item.color} ${item.status}`}
							sx={{ backgroundColor: `${item.color}` }}
							onClick={() => remove(item)}>
							Click Me
						</Box>
					))}
				</div>
			</Box>
			<CodeBlock language='tsx' codeString={CODESTRING[0]} title={'구현 코드'} />
		</PageLayout>
	);
};

export default ExitAnimationsAdvanced;
