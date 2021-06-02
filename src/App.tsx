/* eslint-disable import/no-extraneous-dependencies */
import { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import firebase from 'firebase/app';
import 'firebase/analytics';

import './App.css';
import Hero from './components/Hero';
import Comfort from './components/Comfort';
import Anc from './components/Anc';
import Nav from './components/Nav';
import Note from './components/Note';
import AirpodsNav from './components/AirpodsNav';
import ScrollSequence from './components/ScrollSequence';
import Thanks from './components/Thanks';

gsap.registerPlugin(ScrollTrigger);

const config = JSON.parse(process.env.REACT_APP_API_KEY as any);
firebase.initializeApp({
  ...config,
});

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
      <Note />
      <Nav />
      <AirpodsNav />
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
      <ScrollSequence />
      <Thanks />
      <div className="rotate-phone">
        <h6 className="heading-3">Please rotate your phone.</h6>
      </div>
    </>
  );
}

export default App;
