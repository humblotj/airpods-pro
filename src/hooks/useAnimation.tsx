import { RefObject } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import lottie, { AnimationItem } from 'lottie-web';

const useAnimation = (ref: RefObject<HTMLDivElement>) => {
  const loadAnimation = (className: string, animationData: any) => lottie.loadAnimation({
    container: document.querySelector(className) as Element,
    renderer: 'canvas',
    animationData,
    loop: false,
    autoplay: false,
  });

  const enterLeaveTrigger = (leave: string, enter?:string) => {
    const element = ref.current;
    if (!element) {
      return;
    }

    ScrollTrigger.create({
      trigger: element,
      scrub: true,
      start: 'top top',
      end: 'bottom bottom',
      onLeave: () => {
        gsap.set(document.querySelectorAll(leave), { opacity: 0 });
      },
      onEnter: () => {
        if (enter) {
          console.log('ok');
          gsap.set(document.querySelectorAll(enter), { opacity: 1 });
        }
      },
    });
  };

  const scrollTrigger = (animation: AnimationItem, {
    start, duration, to,
  }:{ start: number, duration: number, to: number}) => {
    const element = ref.current;
    if (!element) {
      return;
    }

    ScrollTrigger.create({
      trigger: element,
      scrub: true,
      start: `${start}% ${start}%`,
      end: `+=${element.scrollHeight * (duration / 100)}`,
      onUpdate: (self) => {
        animation.goToAndStop(self.progress * (animation.totalFrames - 1) * (to / 100), true);
      },
    });
  };

  const animateFromTo = (className: string, from: any,
    to: any, start: number, duration: number, immediateRender: boolean = true) => {
    const element = ref.current;
    if (!element) {
      return;
    }

    gsap.fromTo(document.querySelectorAll(className), from,
      {
        ...to,
        immediateRender,
        scrollTrigger: {
          trigger: element,
          scrub: true,
          start: `${start}% ${start})%`,
          end: `+=${element.offsetHeight * (duration / 100)}`,
        },
      });
  };

  const animateTo = (className: string, to: any,
    start: number, duration: number, immediateRender: boolean = true) => {
    const element = ref.current;
    if (!element) {
      return;
    }

    gsap.to(document.querySelectorAll(className),
      {
        ...to,
        immediateRender,
        scrollTrigger: {
          trigger: element,
          scrub: true,
          start: `${start}% ${start}%`,
          end: `+=${element.offsetHeight * (duration / 100)}`,
        },
      });
  };

  return {
    enterLeaveTrigger, loadAnimation, scrollTrigger, animateFromTo, animateTo,
  };
};

export default useAnimation;
