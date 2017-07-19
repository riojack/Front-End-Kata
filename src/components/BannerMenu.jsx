import React from 'react';

class BannerMenu extends React.Component {
  render() {
    return <div className="banner-menu">
      <div className="company-banner" />
      <div className="company-menu" />
      <div className="page-banner">
        <span className="small-quote" />
        <span className="large-quote" />
      </div>
    </div>;
  }
}

export default BannerMenu;
