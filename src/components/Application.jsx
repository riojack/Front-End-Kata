import React from 'react';
import BannerMenu from './BannerMenu';
import ShoutoutCard from './ShoutoutCard';
import QuickCard from './QuickCard';

class Application extends React.Component {
  render() {
    return <div className="application-container">
      <BannerMenu {...this.props.banner_props} />
      <ShoutoutCard />
      <QuickCard 
          image="assets/e-image-1_2017-07-05/e-image-1.png" 
          interrogative_sentence="What We Do" 
          interrogative_color="#ff6f38"
          eye_catcher_sentence="Turn your fears into fuel." 
          blurb_sentence="Industries are being disrupted every day.  We create solutions to disrupt your competition before it disrupts you.  Our strategists, technologies and designers collaborate to create software-fueled digital experiences that drive business further." />
        <QuickCard 
          direction_mode="right"
          image="assets/e-image-2_2017-07-05/e-image-2.png" 
          interrogative_sentence="How We Do It"
          interrogative_color="#5fb755" 
          eye_catcher_sentence="Fusion. It's how we bring the heat." 
          blurb_sentence="What is it?  It's the combustion of technology, strategy, innovation, DX and marketing.  It's what delivers the solution to your most difficult business problems." />
        <QuickCard 
          image="assets/e-image-3_2017-07-05/e-image-3.png" 
          interrogative_sentence="Where We Forge the Future"
          interrogative_color="#20aaf3"
          eye_catcher_sentence="Here, every idea has the ability to turn into a great one." 
          blurb_sentence="A philosophy&mdash;sometimes in four walls, sometimes not.  It's the business strategists, creatives, software artisans and clients collaborating to solve business problems in a no-constraints think tank.  It's where and how we work&mdash;mentally and physicall.  Wherever our work takes us, we bring the Forge mindset with us." />
    </div>;
  }
}

export default Application;
