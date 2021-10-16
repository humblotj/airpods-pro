import { useEffect, useRef } from 'react';
import useAnimation from '../hooks/useAnimation';
import head from '../assets/head.json';
import flip from '../assets/flip.json';
import explodeTips from '../assets/explode-tips.json';

const Comfort = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { loadAnimation, animateLottie, animateFromTo, animateOpacity } =
    useAnimation(ref, true);

  const move = (className: string, start: number, end: number) => {
    animateFromTo(className, {
      from: { y: 40 },
      to: { y: -40 },
      start,
      end,
    });
  };

  useEffect(() => {
    const headAnimation = loadAnimation('.lottie-animation-2', head);
    animateLottie(headAnimation, { start: 0, end: 40, to: 100 });
    animateOpacity('.lottie-animation-2', { start: 0, end: 1 });

    move('.comfort-heading-wrapper', 30, 40);
    animateOpacity('.comfort-heading-wrapper', { start: 30, end: 33 });
    animateOpacity('.comfort-heading-wrapper', { start: 37, end: 40, to: 0 });

    const flipAnimation = loadAnimation('.lottie-animation-3', flip);
    animateLottie(flipAnimation, { start: 40, end: 60, to: 99 });
    animateOpacity('.lottie-animation-3', { start: 39, end: 40 });
    animateOpacity('.lottie-animation-2', { start: 40, end: 41, to: 0 });

    move('.comfort-intro-text-wrapper', 55, 65);
    animateOpacity('.comfort-intro-text-wrapper', { start: 55, end: 56 });

    const explodeTipsAnimation = loadAnimation(
      '.lottie-animation-4',
      explodeTips,
    );
    animateLottie(explodeTipsAnimation, { start: 60, end: 100, to: 100 });
    animateOpacity('.lottie-animation-4', { start: 59, end: 60 });
    animateOpacity('.comfort-intro-text-wrapper', {
      start: 60,
      end: 65,
      to: 0,
    });
    animateOpacity('.lottie-animation-3', { start: 60, end: 61, to: 0 });

    move('.choose-size', 65, 85);
    animateOpacity('.choose-size', { start: 65, end: 70 });
    animateOpacity('.comfort-tips', { start: 75, end: 79 });
    animateOpacity('.choose-size', { start: 80, end: 85, to: 0 });
    animateOpacity('.comfort-tips', { start: 87, end: 90, to: 0 });
    animateOpacity('.lottie-animation-5', {
      start: 99,
      end: 100,
    });
    animateOpacity('.lottie-animation-4', { start: 99, end: 100, to: 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={ref} className="comfort">
      <div className="comfort-scroll-container">
        <div className="sticky-container">
          <div className="comfort-heading-wrapper">
            <p className="section-eyebrow">Comfort</p>
            <h3 className="section-headline">Arrival of the fittest.</h3>
          </div>
          <div className="comfort-intro-text-wrapper">
            <p className="comfort-section-intro-text">
              We refined the details of comfort, creating a new
              <br />
              class of in-ear headphones with a customizable fit that forms an
              exceptional seal for Active Noise Cancellation . You’ll feel your
              music, not your headphones.
            </p>
          </div>
        </div>
        <div className="sticky-container">
          <div className="comfort-tips">
            <div className="tip large">Large</div>
            <div className="tip medium">Medium</div>
            <div className="tip small">Small</div>
          </div>
          <div className="choose-size">
            <p className="paragraph">
              Choose from three sizes of soft, flexible silicone tips that click
              into place.
            </p>
          </div>
          <div className="comfort-tip-text">
            <p className="paragraph">
              These internally tapered tips conform to your ear shape, keeping
              AirPods Pro secure.
              <br />
              And with vents helping equalize pressure, you
              <br />
              feel like there’s nothing
              <br />
              in your ears.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comfort;
