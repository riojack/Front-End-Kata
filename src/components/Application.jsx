import React from 'react';
import BannerMenu from './BannerMenu';
import ShoutoutCard from './ShoutoutCard';

class Application extends React.Component {
  render() {
    return <div className="application-container">
      <BannerMenu {...this.props.banner_props} />
      <ShoutoutCard />
    </div>;
  }
}

export default Application;
