import React from 'react';
import BannerMenu from './BannerMenu';

class Application extends React.Component {
  render() {
    return <div className="application-container">
      <BannerMenu />
    </div>;
  }
}

export default Application;
