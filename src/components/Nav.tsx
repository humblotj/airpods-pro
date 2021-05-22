import FakeLink from './FakeLink';

const Nav = () => (
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
);

export default Nav;
