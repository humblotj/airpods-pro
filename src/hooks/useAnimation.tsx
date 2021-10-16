import { RefObject, useCallback } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import lottie, { AnimationItem } from 'lottie-web';

const useAnimation = (
  ref: RefObject<HTMLDivElement>,
  animationStartEntering = false,
) => {
  const loadAnimation = useCallback(
    (className: string, animationData: any) =>
      lottie.loadAnimation({
        container: document.querySelector(className) as Element,
        renderer: 'canvas' as any,
        animationData,
        loop: false,
        autoplay: false,
      }),
    [],
  );

  const enterLeaveTrigger = useCallback(
    (leave: string, enter?: string) => {
      const element = ref.current;
      if (!element) {
        return;
      }

      const animationStart = animationStartEntering ? 'top bottom' : 'top top';
      const animationEnd = 'bottom bottom';

      ScrollTrigger.create({
        trigger: element,
        scrub: true,
        start: animationStart,
        end: animationEnd,
        onLeave: () => {
          gsap.set(document.querySelectorAll(leave), { opacity: 0 });
        },
        onEnter: () => {
          if (enter) {
            gsap.set(document.querySelectorAll(enter), { opacity: 1 });
          }
        },
      });
    },
    [ref, animationStartEntering],
  );

  const animateLottie = useCallback(
    (
      animation: AnimationItem,
      { start, end, to }: { start: number; end: number; to: number },
    ) => {
      const element = ref.current;
      if (!element) {
        return;
      }

      const animationStart = animationStartEntering
        ? `${
            (element.offsetHeight + window.innerHeight) * (start / 100)
          } bottom`
        : `${start}% ${start}%`;
      const animationEnd = animationStartEntering
        ? `+=${
            (element.offsetHeight + window.innerHeight) * ((end - start) / 100)
          }`
        : `+=${element.offsetHeight * ((end - start) / 100)}`;

      ScrollTrigger.create({
        trigger: element,
        scrub: true,
        start: animationStart,
        end: animationEnd,
        onUpdate: (self) => {
          animation.goToAndStop(
            self.progress * (animation.totalFrames - 1) * (to / 100),
            true,
          );
        },
      });
    },
    [ref, animationStartEntering],
  );

  const animateFromTo = useCallback(
    (
      className: string,
      {
        from,
        to,
        start,
        end,
        duration,
        immediateRender = true,
        once = false,
        scrub = true,
        toggleActions = undefined,
        ...rest
      }: {
        from: gsap.TweenVars;
        to: gsap.TweenVars;
        start: number;
        end: number;
        duration?: number;
        immediateRender?: boolean;
        once?: boolean;
        scrub?: boolean;
        toggleActions?: string;
      },
    ) => {
      const element = ref ? ref.current : document.body;
      if (!element) {
        return;
      }

      const animationStart = animationStartEntering
        ? `${
            (element.offsetHeight + window.innerHeight) * (start / 100)
          } bottom`
        : `${start}% ${start}%`;
      const animationEnd = animationStartEntering
        ? `+=${
            (element.offsetHeight + window.innerHeight) *
            ((Math.max(end, start) - start) / 100)
          }`
        : `+=${element.offsetHeight * ((Math.max(end, start) - start) / 100)}`;

      const targets =
        className === '.body'
          ? document.body
          : className
          ? document.body.querySelectorAll(className)
          : element;
      const vars = {
        ...to,
        immediateRender,
        scrollTrigger: {
          trigger: element,
          scrub: scrub && !once && !duration,
          start: animationStart,
          end: animationEnd,
          once,
          toggleActions,
        },
        ...rest,
      };
      if (duration) {
        vars.duration = duration;
      }

      return gsap.fromTo(targets, from, vars);
    },
    [ref, animationStartEntering],
  );

  const animateTo = useCallback(
    (
      className: string,
      {
        to,
        start = 0,
        end = 0,
        duration,
        immediateRender = true,
        once = false,
        scrub = true,
        toggleActions = 'play none none none',
        ...rest
      }: {
        to: gsap.TweenVars;
        start?: number;
        end?: number;
        duration?: number;
        immediateRender?: boolean;
        once?: boolean;
        scrub?: boolean;
        toggleActions?: string;
      },
    ) => {
      const element = ref.current;
      if (!element) {
        return;
      }
      const animationStart = animationStartEntering
        ? `${
            (element.offsetHeight + window.innerHeight) * (start / 100)
          } bottom`
        : `${start}% ${start}%`;
      const animationEnd = animationStartEntering
        ? `+=${
            (element.offsetHeight + window.innerHeight) *
            ((Math.max(end, start) - start) / 100)
          }`
        : `+=${element.offsetHeight * ((Math.max(end, start) - start) / 100)}`;

      const targets = className
        ? document.body.querySelectorAll(className)
        : element;
      const vars = {
        ...to,
        immediateRender,
        scrollTrigger: {
          trigger: element,
          scrub: scrub && !once && !duration,
          start: animationStart,
          end: animationEnd,
          once,
          toggleActions,
        },
        ...rest,
      };

      if (duration) {
        vars.duration = duration;
      }
      return gsap.to(targets, vars);
    },
    [ref, animationStartEntering],
  );

  const animateOpacity = useCallback(
    (
      className,
      {
        start,
        end,
        to = 1,
        ...rest
      }: { start: number; end: number; to?: 1 | 0 },
    ) => {
      animateTo(className, {
        to: { opacity: to },
        start,
        end,
        immediateRender: !!to,
        ...rest,
      });
    },
    [animateTo],
  );

  return {
    enterLeaveTrigger,
    loadAnimation,
    animateLottie,
    animateFromTo,
    animateTo,
    animateOpacity,
  };
};

export default useAnimation;
