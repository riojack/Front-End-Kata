import React from 'react';

class Footer extends React.Component {
  render() {
    return <div className="footer">
      <div className="site-map-and-social-links">
        <ul className="site-map">
          <li>About</li>
          <li>What We Do</li>
          <li>How We Do It</li>
          <li>Where We Work</li>
        </ul>
        <ul className="site-map">
          <li>Portfolio</li>
          <li>Awards</li>
          <li>Careers</li>
        </ul>
        <ul className="site-map">
          <li>Events</li>
          <li>Contact</li>
        </ul>
        <ul className="social-links">
          <li className="to-facebook" />
          <li className="to-snapchat" />
          <li className="to-linkedin" />
          <li className="to-twitter" />
          <li className="to-youtube" />
        </ul>
        <span className="copyright">Copyright &copy; 2017 Pillar Technology Group, LLC</span>
      </div>
    </div>;
  }
}

export default Footer;
