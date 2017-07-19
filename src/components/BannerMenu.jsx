import React from 'react';

class BannerMenu extends React.Component {
  render() {
    return <div className="banner-menu">
      <div className="company-banner" />
      <div className="company-menu" />
      <div className="page-banner">
        <span className="small-quote">
          In the past, technology enabled the business.
        </span>
        <span className="large-quote">
          Today, technology is the business.
        </span>
      </div>
    </div>;
  }
}

export default BannerMenu;
