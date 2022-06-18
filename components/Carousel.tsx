import React, { useRef, useState, useEffect, useCallback } from 'react';
import debounce from 'lodash.debounce';
import smoothscroll from 'smoothscroll-polyfill';
import { createContext, useCallbackRef, useComposedRefs } from '../utils';
import { styled, darkTheme } from '../stitches.config';
import { Icons } from '../icons';

const { ArrowRight, ArrowLeft } = Icons;

interface CarouselProps {
  children?: React.ReactNode;
}

interface CarouselSlideListProps {
  children?: React.ReactNode;
}

interface CarouselSlideProps {
  children?: React.ReactNode;
}

const [CarouselProvider, useCarouselContext] = createContext<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _: any;
  slideListRef: React.RefObject<HTMLDivElement>;
  onNextClick(): void;
  onPrevClick(): void;
  nextDisabled: boolean;
  prevDisabled: boolean;
}>('Carousel');

export const Carousel: React.FC<CarouselProps> = (props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { children, ...carouselProps } = props;
  const slideListRef = useRef<HTMLDivElement>(null);
  const [_, force] = useState({});
  const [nextDisabled, setNextDisabled] = useState(false);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const navigationUpdateDelay = useRef(100);
  useEffect(() => smoothscroll.polyfill(), []);

  const getSlideInDirection = useCallbackRef((direction: 1 | -1) => {
    const slides = ref.current
      ? ref.current.querySelectorAll<HTMLElement>(
          '[data-slide-intersection-ratio]',
        )
      : undefined;
    if (slides) {
      const slidesArray = Array.from(slides.values());

      if (direction === 1) {
        slidesArray.reverse();
      }

      return slidesArray.find(
        (slide) => slide.dataset.slideIntersectionRatio !== '0',
      );
    }
  });

  const handleNextClick = useCallback(() => {
    const nextSlide = getSlideInDirection(1);

    if (nextSlide && slideListRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = slideListRef.current;
      const itemWidth = nextSlide.clientWidth;
      const itemsToScroll =
        itemWidth * 2.5 < document.documentElement.offsetWidth ? 2 : 1;
      const nextPos =
        Math.floor(scrollLeft / itemWidth) * itemWidth +
        itemWidth * itemsToScroll;
      slideListRef.current.scrollTo({ left: nextPos, behavior: 'smooth' });

      // Disable previous & next buttons immediately
      setPrevDisabled(nextPos <= 0);
      setNextDisabled(scrollWidth - nextPos - clientWidth <= 0);
      // Wait for scroll animation to finish before the buttons *might* show up again
      navigationUpdateDelay.current = 500;
    }
  }, [getSlideInDirection, setPrevDisabled]);

  const handlePrevClick = useCallback(() => {
    const prevSlide = getSlideInDirection(-1);
    if (prevSlide && slideListRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = slideListRef.current;
      const itemWidth = prevSlide.clientWidth;
      const itemsToScroll =
        itemWidth * 2.5 < document.documentElement.offsetWidth ? 2 : 1;
      const nextPos =
        Math.ceil(scrollLeft / itemWidth) * itemWidth -
        itemWidth * itemsToScroll;
      slideListRef.current.scrollTo({ left: nextPos, behavior: 'smooth' });

      // Disable previous & next buttons immediately
      setPrevDisabled(nextPos <= 0);
      setNextDisabled(scrollWidth - nextPos - clientWidth <= 0);
      // Wait for scroll animation to finish before the buttons *might* show up again
      navigationUpdateDelay.current = 500;
    }
  }, [getSlideInDirection, setPrevDisabled]);

  useEffect(() => {
    // Keep checking for whether we need to disable the navigation buttons, debounced
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      requestAnimationFrame(() => {
        if (slideListRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = slideListRef.current;
          setPrevDisabled(scrollLeft <= 0);
          setNextDisabled(scrollWidth - scrollLeft - clientWidth <= 0);
          navigationUpdateDelay.current = 100;
        }
      });
    }, navigationUpdateDelay.current);
  });

  useEffect(() => {
    const slidesList = slideListRef.current;
    if (slidesList) {
      const handleScrollStartAndEnd = debounce(() => force({}), 100, {
        leading: true,
        trailing: true,
      });
      slidesList.addEventListener('scroll', handleScrollStartAndEnd);
      window.addEventListener('resize', handleScrollStartAndEnd);
      force({});
      return () => {
        slidesList.removeEventListener('scroll', handleScrollStartAndEnd);
        window.removeEventListener('resize', handleScrollStartAndEnd);
      };
    }
  }, [slideListRef]);

  return (
    <CarouselProvider
      _={_}
      nextDisabled={nextDisabled}
      prevDisabled={prevDisabled}
      slideListRef={slideListRef}
      onNextClick={handleNextClick}
      onPrevClick={handlePrevClick}
    >
      <div {...carouselProps} ref={ref}>
        {children}
      </div>
    </CarouselProvider>
  );
};

const SlideList = styled('div', {
  display: 'grid',
  gridAutoFlow: 'column',
  gridAutoColumns: 'min-content',
  overflowX: 'auto',
  overflowY: 'hidden',
  WebkitOverflowScrolling: 'touch',

  // Gap between slides
  $$gap: '50px',

  // calculate the left padding to apply to the scrolling list
  // so that the carousel starts aligned with the container component
  // the "1145" and "$5" values comes from the <Container /> component
  '$$scroll-padding': 'max($$gap, calc(100% - 1150px) / 2 )',
  paddingLeft: '$$scroll-padding',

  // hide scrollbar
  MsOverflowStyle: 'none',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },

  // Can't have nice grid gap because Safari butchers scroll padding with it
  '& > *': {
    paddingRight: '$$gap',
  },
});

export const CarouselSlideList: React.FC<CarouselSlideListProps> = (props) => {
  const context = useCarouselContext('CarouselSlideList');
  const ref = React.useRef<HTMLDivElement>(null);
  const composedRefs = useComposedRefs<HTMLDivElement>(
    ref,
    context.slideListRef,
  );
  const [dragStart, setDragStart] = React.useState<{
    scrollX: number;
    pointerX: number;
  } | null>(null);

  const handleMouseMove = useCallbackRef((event) => {
    if (ref.current && dragStart) {
      const distanceX = event.clientX - dragStart.pointerX;
      ref.current.scrollLeft = dragStart.scrollX - distanceX;
    }
  });

  const handleMouseUp = useCallbackRef(() => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
    setDragStart(null);
  });

  return (
    <SlideList
      {...props}
      ref={composedRefs}
      data-state={dragStart ? 'dragging' : undefined}
      onMouseDownCapture={(event) => {
        // Drag only if main mouse button was clicked
        if (event.button === 0) {
          document.addEventListener('mousemove', handleMouseMove);
          document.addEventListener('mouseup', handleMouseUp);
          setDragStart({
            scrollX: (event.currentTarget as HTMLElement).scrollLeft,
            pointerX: event.clientX,
          });
        }
      }}
      onPointerDown={(event) => {
        const element = event.target as HTMLElement;
        element.style.userSelect = 'none';
        element.setPointerCapture(event.pointerId);
      }}
      onPointerUp={(event) => {
        const element = event.target as HTMLElement;
        element.style.userSelect = '';
        element.releasePointerCapture(event.pointerId);
      }}
    />
  );
};

export const CarouselSlide: React.FC<CarouselSlideProps> = (props) => {
  const context = useCarouselContext('CarouselSlide');
  const ref = useRef<HTMLDivElement>(null);
  const [intersectionRatio, setIntersectionRatio] = useState(0);
  const isDraggingRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersectionRatio(entry.intersectionRatio),
      { root: context.slideListRef.current, threshold: [0, 0.5, 1] },
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [context.slideListRef]);

  return (
    <div
      {...props}
      ref={ref}
      data-slide-intersection-ratio={intersectionRatio}
      onDragStart={(event) => {
        event.preventDefault();
        isDraggingRef.current = true;
      }}
      onClick={(event) => {
        if (isDraggingRef.current) {
          event.preventDefault();
        }
      }}
    />
  );
};

const CarouselArrowButton = styled('button', {
  outline: 0,
  margin: 0,
  border: 0,
  padding: 0,
  cursor: 'pointer',

  display: 'flex',
  position: 'absolute',
  top: '50%',
  zIndex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 45,
  width: 45,
  height: 45,

  backgroundColor: '#fff',
  boxShadow: '$colors$blackA11 0px 2px 12px -5px, $colors$blackA5 0px 1px 3px',
  willChange: 'transform, box-shadow, opacity',
  transition: 'all 100ms',

  '& svg': {
    fill: '$gray12',
    width: 25,
    height: 25,

    [`.${darkTheme} &`]: {
      fill: '$gray1',
    },
  },

  '&:hover': {
    transform: 'translateY(-1px)',
    boxShadow:
      '$colors$blackA10 0px 3px 16px -5px, $colors$blackA5 0px 1px 3px',

    // Fix a bug when hovering at button edges would cause the button to jitter because of transform
    '&::before': {
      content: '',
      inset: -2,
      borderRadius: 45,
      position: 'absolute',
    },
  },
  '&:focus': {
    boxShadow: `
      $colors$blackA10 0px 3px 16px -5px,
      $colors$blackA5 0px 1px 3px,
      $colors$blue8 0 0 0 2px
    `,
    transform: 'translateY(-1px)',
  },
  '&:focus:not(:focus-visible)': {
    boxShadow:
      '$colors$blackA11 0px 2px 12px -5px, $colors$blackA5 0px 1px 3px',
  },
  '&:active:not(:focus)': {
    boxShadow:
      '$colors$blackA11 0px 2px 12px -5px, $colors$blackA5 0px 1px 3px',
  },
  '&:active': {
    transform: 'none',
    transition: 'opacity 100ms',
  },
  '&:disabled': {
    opacity: 0,
  },
  '@media (hover: none) and (pointer: coarse)': {
    display: 'none',
  },
});

export const CarouselNext: React.FC = (props) => {
  const context = useCarouselContext('CarouselNext');
  return (
    <CarouselArrowButton
      {...props}
      style={{ right: 15 }}
      onClick={() => context.onNextClick()}
      disabled={context.nextDisabled}
    >
      <ArrowRight />
    </CarouselArrowButton>
  );
};

export const CarouselPrevious: React.FC = (props) => {
  const context = useCarouselContext('CarouselPrevious');
  return (
    <CarouselArrowButton
      {...props}
      style={{ left: 15 }}
      onClick={() => context.onPrevClick()}
      disabled={context.prevDisabled}
    >
      <ArrowLeft />
    </CarouselArrowButton>
  );
};

export const GrabBox = styled('div', {
  cursor: 'grab',
  '&:active': { cursor: 'grabbing' },

  // Fill in spaces between slides
  mr: '-$$gap',
  pr: '$$gap',
});
