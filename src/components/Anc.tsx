import { useEffect, useRef } from 'react';

import useAnimation from '../hooks/useAnimation';
import flipNC from '../assets/flip-nc.json';
import transparency from '../assets/transparency.json';

const Anc = () => {
  const ref = useRef<HTMLDivElement>(null);
  const {
    enterLeaveTrigger,
    loadAnimation,
    animateLottie,
    animateFromTo,
    animateOpacity,
  } = useAnimation(ref);

  const move = (className: string, start: number, end: number) => {
    animateFromTo(className, { from: { y: 40 }, to: { y: -40 }, start, end });
  };

  useEffect(() => {
    enterLeaveTrigger('.lottie-animation-5, .lottie-animation-6');

    move('.anc-intro', 0, 15);
    animateOpacity('.anc-intro', { start: 0, end: 5 });

    const flipNCAnimation = loadAnimation('.lottie-animation-5', flipNC);
    animateLottie(flipNCAnimation, {
      start: 1,
      end: 20,
      to: 45,
    });

    animateOpacity('.anc-intro', { start: 10, end: 15, to: 0 });

    move('.anc-intro-paragraph', 15, 25);
    animateOpacity('.anc-intro-paragraph', { start: 15, end: 17 });
    animateOpacity('.anc-intro-paragraph', { start: 20, end: 25, to: 0 });

    move('.anc-external-mic, .anc-external-sound', 25, 35);
    animateOpacity('.anc-external-mic, .anc-external-sound', {
      start: 25,
      end: 27,
    });
    animateOpacity('.anc-external-mic, .anc-external-sound', {
      start: 32,
      end: 35,
      to: 0,
    });

    move('.anc-continousley, .anc-internal-mic', 35, 45);
    animateOpacity('.anc-continousley, .anc-internal-mic', {
      start: 35,
      end: 37,
    });
    animateOpacity('.anc-continousley, .anc-internal-mic', {
      start: 42,
      end: 45,
      to: 0,
    });
    animateLottie(flipNCAnimation, { start: 45, end: 50, to: 100 });

    const transparencyAnimation = loadAnimation(
      '.lottie-animation-6',
      transparency,
    );
    animateLottie(transparencyAnimation, {
      start: 50,
      end: 100,
      to: 99,
    });
    animateOpacity('.lottie-animation-5', { start: 50, end: 51, to: 0 });
    animateOpacity('.lottie-animation-6', { start: 50, end: 51 });
    move('.anc-transparency', 65, 75);
    animateOpacity('.anc-transparency', { start: 65, end: 70 });
    animateFromTo('.anc-transparency', {
      from: { opacity: 0.75 },
      to: { opacity: 1 },
      start: 65,
      end: 75,
      immediateRender: false,
    });

    animateOpacity('.airpods-nav', { start: 79, end: 80, to: 0 });
    animateFromTo('.body', {
      from: { background: '#000' },
      to: { background: '#fff' },
      start: 79,
      end: 80,
    });
    animateOpacity('.white-overlay', { start: 90, end: 100 });
    animateOpacity('.lottie-animation-6', { start: 99, end: 100, to: 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              of your ear and the fit of the ear tips — blocking out the world
              so you can focus on what you’re listening to.
            </p>
          </div>
          <div className="anc-external-mic">
            <p className="anc-bullets">
              An outward-facing microphone detects{' '}
              <span className="white">external sound.</span>
            </p>
          </div>
          <div className="anc-external-sound">
            <p className="anc-bullets anc-paragraph-right">
              AirPods Pro then counter it with equal{' '}
              <span className="green">anti-noise</span>, cancelling the{' '}
              <span className="white">external sound</span> before you hear it.
            </p>
          </div>
          <div className="anc-internal-mic">
            <p className="anc-paragraph-right">
              An inward-facing microphone listens inside your ear for unwanted
              sound, which is also eliminated with{' '}
              <span className="green">anti-noise</span>.
            </p>
          </div>
          <div className="anc-continousley">
            <p className="anc-paragraph-right">
              Noise cancellation is continuously adjusted at 200 times per
              second for truly immersive sound, so you’re fully tuned in to your
              music, podcasts, and calls.
            </p>
          </div>
          <div className="anc-transparency">
            <p className="transparency-paragraph">
              Want to hear what’s happening around you? Just press and hold the
              force sensor on the stem to jump between Active Noise Cancellation
              and Transparency mode — which lets outside sound in, and allows
              things to sound and feel natural when you’re talking to people
              nearby.
            </p>
          </div>
          <div className="white-overlay" />
        </div>
      </div>
    </div>
  );
};

export default Anc;
