import React from 'react'

const Page3 = () => {
  return (
    <section className='page3'>
      <div className='vision-pro-ad'>
        <img
          src='./public/Apple vision image.png'
          alt='vision-img'
          className='img vision-img'
        />
        <div className='page-item-container'>
          <div>
            <img
              src='./public/vision-pro-tag.png'
              alt='tag image'
              className='img tag-img'
            />
            <div className='page-links'>
              <a href='#'>Watch the Film</a>
              <img src='./public/play.png' className='img' />
            </div>
          </div>
          <button className='btn btn1'>
            <i className='fas fa-plus'></i>
            Take a closer look
          </button>
        </div>
      </div>
    </section>
  );
}

export default Page3