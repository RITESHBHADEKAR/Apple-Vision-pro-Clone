import React from 'react'

const Page9 = () => {
  return (
    <section className='page9'>
      <h3>
        A singular piece of three-dimensionally formed laminated glass acts as
        an optical surface for the cameras and sensors that view the world. It
        flows seamlessly into a custom aluminum alloy frame that gently curves
        to wrap around your face while serving as an attachment point for the
        Light Seal.
      </h3>
      <div className='vision-pro-ad'>
        <img
          src='./public/vision-pro-case.jpg'
          alt='vision-img'
          className='img vision-img'
        />
        <div className='design-btn'>
          <button className='btn orange-btn'>
            <i className='fas fa-plus'></i>
            Learn more about design
          </button>
        </div>
      </div>
    </section>
  );
}

export default Page9