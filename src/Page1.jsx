import React from 'react';

const Page1 = () => {
  return (
    <section className='page page1'>
      <video
        src='./public\vision-pro-apps.mp4'
        className='video'
        muted
        autoplay
        loop
      ></video>
      <div className='section-center page1-text'>
        <h2>Welcome to the era of spatial computing.</h2>
      </div>
      <div className='btn-container'>
        <button>
          <img src='./public/pause.png' className='pause-btn' />
          <img src='./public/play.png' className='play-btn' />
        </button>
      </div>
    </section>
  );
};

export default Page1;
