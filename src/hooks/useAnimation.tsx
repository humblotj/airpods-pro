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

  const lottieScroll = useCallback(
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
      from: any,
      to: any,
      start: number,
      end: number,
      immediateRender = true,
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

      gsap.fromTo(document.querySelectorAll(className), from, {
        ...to,
        immediateRender,
        scrollTrigger: {
          trigger: element,
          scrub: true,
          start: animationStart,
          end: animationEnd,
        },
      });
    },
    [ref, animationStartEntering],
  );

  const animateTo = useCallback(
    (
      className: string,
      to: any,
      start: number,
      end: number,
      immediateRender = true,
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

      gsap.to(document.querySelectorAll(className), {
        ...to,
        immediateRender,
        scrollTrigger: {
          trigger: element,
          scrub: true,
          start: animationStart,
          end: animationEnd,
        },
      });
    },
    [ref, animationStartEntering],
  );

  return {
    enterLeaveTrigger,
    loadAnimation,
    lottieScroll,
    animateFromTo,
    animateTo,
  };
};

export default useAnimation;
