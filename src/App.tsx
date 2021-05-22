import { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import firebase from 'firebase';
import 'firebase/analytics';

import './App.css';
import Hero from './components/Hero';
import Comfort from './components/Comfort';
import Anc from './components/Anc';
import FakeLink from './components/FakeLink';

gsap.registerPlugin(ScrollTrigger);

if (process.env.NODE_ENV !== 'development') {
  firebase.analytics();
}

function App() {
  useEffect(() => {
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };
    return () => {
      window.onbeforeunload = null;
    };
  }, []);

  return (
    <>
      <div className="note">
        <div className="container-2 w-container">
          <p className="paragraph-2">
            This project was made for educational purposes
            and is not affiliated with Apple in any way.
            All rights of the images, logos, and texts belong to Apple.
          </p>
        </div>
      </div>
      <div className="nav">
        <div className="container">
          <div className="nav-menu">
            <div className="mobile-burger">
              <div className="mobile-burger-line" />
              <div className="mobile-burger-line" />
            </div>
            <FakeLink className="nav-link logo" />
            <FakeLink className="nav-link">Mac</FakeLink>
            <FakeLink className="nav-link">iPad</FakeLink>
            <FakeLink className="nav-link">iPhone</FakeLink>
            <FakeLink className="nav-link">Watch</FakeLink>
            <FakeLink className="nav-link">TV</FakeLink>
            <FakeLink className="nav-link">Music</FakeLink>
            <FakeLink className="nav-link">Support</FakeLink>
            <FakeLink className="nav-link search" />
            <FakeLink className="nav-link bag" />
          </div>
        </div>
      </div>
      <div className="airpods-nav">
        <div className="container">
          <div className="iphone-nav-content">
            <FakeLink className="iphone-nav-title">AirPods Pro</FakeLink>
            <div className="iphone-nav-menu">
              <FakeLink className="iphone-nav-link">Overview</FakeLink>
              <FakeLink className="iphone-nav-link">Tech Specs</FakeLink>
              <FakeLink className="buy-button w-button">Buy</FakeLink>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-sequence">
        <div className="sequence-container">
          <div className="image-sequence">
            <div className="lottie-container">
              <div className="lottie-animation-1" />
              <div className="lottie-animation-2" />
              <div className="lottie-animation-3" />
              <div className="lottie-animation-4" />
              <div className="lottie-animation-5" />
              <div className="lottie-animation-6" />
            </div>
          </div>
        </div>
      </div>
      <Hero />
      <Comfort />
      <Anc />
      <div className="thanks">
        <div className="container">
          <h3 className="thanks-heading">Thanks for scrolling through.</h3>
          <div className="madeby">
            <a href="https://webflow.com/website/AirPods-Pro-Website?rfsn=3423979.8e540a" target="_blank" rel="noreferrer" className="open-in-webflow-link w-inline-block">
              <div className="text-block">Based on the workflow project of Moritz Petersen</div>
            </a>
          </div>
        </div>
      </div>
      <div className="rotate-phone">
        <h6 className="heading-3">Please rotate your phone.</h6>
      </div>
    </>
  );
}

export default App;
