import { useEffect, useRef } from 'react';

import useAnimation from '../hooks/useAnimation';
import flipNC from '../assets/flip-nc.json';
import transparency from '../assets/transparency.json';

const Anc = () => {
  const ref = useRef<HTMLDivElement>(null);
  const {
    enterLeaveTrigger, loadAnimation, scrollTrigger, animateFromTo, animateTo,
  } = useAnimation(ref);

  const move = (className: string, start: number,
    duration: number, immediateRender: boolean = true) => {
    animateFromTo(className, { y: 40 }, { y: -40 }, start, duration, immediateRender);
  };

  const opacity = (className: string, start: number, duration: number,
    to: number, immediateRender: boolean = true) => {
    animateTo(className, { opacity: to }, start, 3, immediateRender);
  };

  useEffect(() => {
    enterLeaveTrigger('.lottie-animation-5, .lottie-animation-6');

    move('.anc-intro', 0, 15);
    opacity('.anc-intro', 0, 5, 1);

    const flipNCAnimation = loadAnimation('.lottie-animation-5', flipNC);
    scrollTrigger(flipNCAnimation, {
      start: 1,
      duration: 19,
      to: 45,
    });

    opacity('.anc-intro', 10, 5, 0, false);

    move('.anc-intro-paragraph', 15, 10);
    opacity('.anc-intro-paragraph', 15, 2, 1);
    opacity('.anc-intro-paragraph', 20, 5, 0, false);

    move('.anc-external-mic, .anc-external-sound', 25, 10);
    opacity('.anc-external-mic, .anc-external-sound', 25, 2, 1);
    opacity('.anc-external-mic, .anc-external-sound', 32, 3, 0, false);

    move('.anc-continousley, .anc-internal-mic', 35, 10);
    opacity('.anc-continousley, .anc-internal-mic', 35, 2, 1);
    opacity('.anc-continousley, .anc-internal-mic', 42, 3, 0, false);

    scrollTrigger(flipNCAnimation, {
      start: 45,
      duration: 5,
      to: 100,
    });

    const transparencyAnimation = loadAnimation('.lottie-animation-6', transparency);
    scrollTrigger(transparencyAnimation, {
      start: 50,
      duration: 50,
      to: 99,
    });
    opacity('.lottie-animation-5', 50, 1, 0, false);
    opacity('.lottie-animation-6', 50, 1, 1);
    move('.anc-transparency', 65, 10);
    opacity('.anc-transparency', 65, 5, 1);
    animateFromTo('.anc-transparency', { opacity: 0.75 }, { opacity: 1 }, 65, 10, false);

    opacity('.airpods-nav', 79, 1, 0, false);
    animateTo('.body', { background: 'white' }, 79, 1, false);
    opacity('.white-overlay', 90, 10, 1);
    opacity('.lottie-animation-6', 99, 1, 0, false);
  }, []);

  return (
    <div ref={ref} className="anc">
      <div className="anc-container">
        <div className="sticky-container no-overflow">
          <div className="anc-intro">
            <p className="section-eyebrow">Active Noise Cancellation</p>
            <h3 className="section-headline">Sound that cuts out the noise.</h3>
          </div>
          <div className="anc-intro-paragraph">
            <p className="anc-intro-paragraph-text">
              AirPods Pro are the only
              <br />
              in-ear headphones with
              <br />
              Active Noise Cancellation that continuously adapts to the geometry
              of your ear and the fit of the ear tips —
              blocking out the world so you can focus on what you’re listening to.
            </p>
          </div>
          <div className="anc-external-mic">
            <p className="anc-bullets">
              An outward-facing microphone detects
              {' '}
              <span className="white">external sound.</span>
            </p>
          </div>
          <div className="anc-external-sound">
            <p className="anc-bullets anc-paragraph-right">
              AirPods Pro then counter it with equal
              {' '}
              <span className="green">anti-noise</span>
              , cancelling the
              {' '}
              <span className="white">external sound</span>
              {' '}
              before you hear it.
            </p>
          </div>
          <div className="anc-internal-mic">
            <p className="anc-paragraph-right">
              An inward-facing microphone listens inside your ear for unwanted sound,
              which is also eliminated with
              {' '}
              <span className="green">anti-noise</span>
              .
            </p>
          </div>
          <div className="anc-continousley">
            <p className="anc-paragraph-right">Noise cancellation is continuously adjusted at 200 times per second for truly immersive sound, so you’re fully tuned in to your music, podcasts, and calls.</p>
          </div>
          <div className="anc-transparency">
            <p className="transparency-paragraph">Want to hear what’s happening around you? Just press and hold the force sensor on the stem to jump between Active Noise Cancellation and Transparency mode — which lets outside sound in, and allows things to sound and feel natural when you’re talking to people nearby.</p>
          </div>
          <div className="white-overlay" />
        </div>
      </div>
    </div>
  );
};

export default Anc;
