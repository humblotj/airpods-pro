import FakeLink from './FakeLink';

const AirpodsNav = () => (
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
);

export default AirpodsNav;
