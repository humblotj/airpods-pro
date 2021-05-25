import { useEffect, useRef } from 'react';
import useAnimation from '../hooks/useAnimation';
import head from '../assets/head.json';
import flip from '../assets/flip.json';
import explodeTips from '../assets/explode-tips.json';

const Comfort = () => {
  const ref = useRef<HTMLDivElement>(null);
  const {
    enterLeaveTrigger, loadAnimation, lottieScroll, animateFromTo, animateTo,
  } = useAnimation(ref, true);

  const move = (className: string, start: number,
    end: number, immediateRender: boolean = true) => {
    animateFromTo(className, { y: 40 }, { y: -40 }, start, end, immediateRender);
  };

  const opacity = (className: string, start: number, end: number,
    to: number, immediateRender: boolean = true) => {
    animateTo(className, { opacity: to }, start, end, immediateRender);
  };

  useEffect(() => {
    enterLeaveTrigger('.lottie-animation-2, .lottie-animation-3, .lottie-animation-4');

    const headAnimation = loadAnimation('.lottie-animation-2', head);
    lottieScroll(headAnimation, {
      start: 0,
      end: 40,
      to: 100,
    });

    opacity('.lottie-animation-2', 0, 1, 1);

    move('.comfort-heading-wrapper', 30, 40);
    opacity('.comfort-heading-wrapper', 30, 33, 1);
    opacity('.comfort-heading-wrapper', 37, 40, 0, false);

    const flipAnimation = loadAnimation('.lottie-animation-3', flip);
    lottieScroll(flipAnimation, {
      start: 40,
      end: 60,
      to: 99,
    });
    opacity('.lottie-animation-3', 39, 40, 1);
    opacity('.lottie-animation-2', 40, 41, 0, false);

    move('.comfort-intro-text-wrapper', 55, 65);
    opacity('.comfort-intro-text-wrapper', 55, 56, 1);

    const flipNCAnimation = loadAnimation('.lottie-animation-4', explodeTips);
    lottieScroll(flipNCAnimation, {
      start: 60,
      end: 100,
      to: 100,
    });
    opacity('.lottie-animation-4', 59, 60, 1);

    opacity('.comfort-intro-text-wrapper', 60, 65, 0, false);
    opacity('.lottie-animation-3', 60, 61, 0, false);

    move('.choose-size', 65, 85);
    opacity('.choose-size', 65, 70, 1);
    opacity('.comfort-tips', 75, 79, 1);
    opacity('.choose-size', 80, 85, 0, false);
    opacity('.comfort-tips', 87, 90, 0, false);
    opacity('.lottie-animation-5', 99, 100, 1);
    opacity('.lottie-animation-4', 99, 100, 0, false);
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
              class of in-ear headphones with a customizable
              fit that forms an exceptional seal for Active Noise Cancellation .
              You’ll feel your music, not your headphones.
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
            <p className="paragraph">Choose from three sizes of soft, flexible silicone tips that click into place.</p>
          </div>
          <div className="comfort-tip-text">
            <p className="paragraph">
              These internally tapered tips conform to your ear shape, keeping AirPods Pro secure.
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
