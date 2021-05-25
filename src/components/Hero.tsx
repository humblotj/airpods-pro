import { useEffect, useRef } from 'react';

import hero from '../assets/hero.json';
import useAnimation from '../hooks/useAnimation';

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const {
    enterLeaveTrigger, loadAnimation, lottieScroll, animateFromTo, animateTo,
  } = useAnimation(ref);

  const move = (index: number, start: number, immediateRender: boolean = true) => {
    animateFromTo(`.hero-bullet-points._${index}`, { y: 40 }, { y: -40 }, start, start + 20, immediateRender);
  };

  const opacity = (index: number, start: number, to: number, immediateRender: boolean = true) => {
    animateTo(`.hero-bullet-points._${index}`, { opacity: to }, start, start + 5, immediateRender);
  };

  const animateHeroBullet = (index: number, start: number) => {
    move(index, start);
    opacity(index, start, 1);
    opacity(index, start + 15, 0, false);
  };

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    enterLeaveTrigger('.lottie-animation-1', '.lottie-animation-1');

    const heroAnimation = loadAnimation('.lottie-animation-1', hero);
    lottieScroll(heroAnimation, {
      start: 0,
      end: 17,
      to: 93,
    });
    animateTo('.lottie-animation-1', { opacity: 1 }, 0, 1);

    animateHeroBullet(1, 20);

    animateTo('.lottie-animation-1', { scale: 0.85 }, 20, 100);

    animateHeroBullet(2, 40);
    animateHeroBullet(3, 60);
    animateHeroBullet(4, 80);

    animateTo('.lottie-animation-1', { opacity: 0 }, 97, 100, false);
  }, []);

  return (
    <div ref={ref} className="hero">
      <div className="text-container">
        <div className="hero-text">
          <h1 className="hero-headline">AirPods Pro</h1>
          <div className="watch-the-film">Watch the film</div>
        </div>
      </div>
      <div className="hero-scroll-container">
        <div className="sticky-container">
          <div className="hero-bullet-points _1">
            <p className="hero-bullet-text">
              Active Noise Cancellation
              <br />
              for immersive sound.
            </p>
          </div>
          <div className="hero-bullet-points _2">
            <p className="hero-bullet-text">
              Transparency mode for hearing
              <br />
              what’s happening around you.
            </p>
          </div>
          <div className="hero-bullet-points _3">
            <p className="hero-bullet-text">
              A customizable fit
              <br />
              for all-day comfort.
            </p>
          </div>
          <div className="hero-bullet-points _4">
            <p className="hero-bullet-text">Magic like you’ve never heard.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
