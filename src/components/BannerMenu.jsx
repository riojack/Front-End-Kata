import React from 'react';

function buildPageBanner(props) {
  let pageBannerProps = {};

  if (props.frame_name != null) {
    pageBannerProps['data-frame-name'] = props.frame_name;
  }

  return <div className="page-banner" {...pageBannerProps}>
        <span className="small-quote">
          In the past, technology enabled the business.
        </span>
        <span className="large-quote">
          Today, technology is the business.
        </span>
      </div>;
}

class BannerMenu extends React.Component {
  render() {
    return <div className="banner-menu">
      <div className="company-banner" />
      <div className="company-menu" />
      {buildPageBanner(this.props)}
    </div>;
  }
}

export default BannerMenu;
