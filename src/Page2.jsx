import React from 'react';

const Page2 = () => {
  return (
    <section className='page page2'>
      <video
        src='./public/vision-pro-video.mp4'
        autoplay
        muted
        loop
        className='video'
      ></video>
      <div className='section-center page1-text'>
        <h2>
          Apple Vision Pro seamlessly blends digital content with your physical
          space.
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

export default Page2;
