import { useEffect, useRef } from 'react';

import hero from '../assets/hero.json';
import useAnimation from '../hooks/useAnimation';

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const {
    enterLeaveTrigger,
    loadAnimation,
    animateLottie,
    animateFromTo,
    animateTo,
    animateOpacity,
  } = useAnimation(ref);

  const move = (index: number, start: number) => {
    animateFromTo(`.hero-bullet-points._${index}`, {
      from: { y: 40 },
      to: { y: -40 },
      start,
      end: start + 20,
    });
  };

  const customAnimateOpacity = (index: number, start: number, to: 0 | 1) => {
    animateOpacity(`.hero-bullet-points._${index}`, {
      to,
      start,
      end: start + 5,
    });
  };

  const animateHeroBullet = (index: number, start: number) => {
    move(index, start);
    customAnimateOpacity(index, start, 1);
    customAnimateOpacity(index, start + 15, 0);
  };

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    enterLeaveTrigger('.lottie-animation-1', '.lottie-animation-1');

    const heroAnimation = loadAnimation('.lottie-animation-1', hero);
    animateLottie(heroAnimation, { start: 0, end: 17, to: 93 });
    animateOpacity('.lottie-animation-1', { start: 0, end: 1 });
    animateHeroBullet(1, 20);

    animateTo('.lottie-animation-1', {
      to: { scale: 0.85 },
      start: 20,
      end: 100,
    });

    animateHeroBullet(2, 40);
    animateHeroBullet(3, 60);
    animateHeroBullet(4, 80);

    animateOpacity('.lottie-animation-1', { to: 0, start: 97, end: 100 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
