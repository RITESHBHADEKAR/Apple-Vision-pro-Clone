import React from 'react';

const Home = () => {
  return (
    <section className='home' id='home'>
      <video
        src='./public/vision-pro-video-girl.mp4'
        className='video home-video'
        muted
      ></video>
      <div className='home-texts'>
        <h3 className='home-title'>Introducing</h3>
        <img src='./public/tag.png' alt='tag' className='img' />
      </div>
    </section>
  );
};

export default Home;
