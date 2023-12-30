import React from 'react';

const Page4 = () => {
  return (
    <section className='page page4'>
      <video
        src='./public/vision-pro-large (1).mp4'
        autoplay
        muted
        loop
        className='video'
      ></video>
      <div className='section-center page1-text'>
        <h2>Apps</h2>
        <h2>
          Free your desktop. <br />
          And your apps will follow.
        </h2>
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

export default Page4;
