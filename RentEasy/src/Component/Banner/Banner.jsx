import React from 'react'
import './Banner.css'
import banner from '../../assets/house-banner.png'

function Banner() {
  return (
    <>
      <div className='top_banner'>
         <div className='content_part'>
            <h1 className='heading'> <span className='find'> Find </span>your dream home <br />effortlessly with us
            </h1>
          <p className='sub-heading'>Our expert team ensures a seamless journey,<br />tailored toyour unique needs.Step into your
           ideal space <br />and start living the life you’ve always envisioned.</p>
         </div>
         <div className='imagepart'>
            <img src={banner} alt="home banner" className='imgbanner'/>
         </div>
      </div>
    </>
  )
}

export default Banner
