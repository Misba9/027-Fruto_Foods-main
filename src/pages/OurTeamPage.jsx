import React from 'react'
import logo_large from '../assets/images/logo_large.png';

function OurTeamPage() {
  return (
    <div className=' md:m-12 m-8 '>
      <div>
              <h2 className='text-4xl md:text-7xl'><span className='border-b-3 border-[#c33E2F]'>Fruto Foo</span>ds</h2>
              <p className='mt-2 md:ml-64 ml-20 text-xltext-gray-600 md:text-2xl'> ~Natures goodness in every spoon</p>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-2'>
              <h3 className='text-xl md:text-3xl mt-10 text-gray-800 mb-6 leading-none md:leading-snug'>“We are committed to providing authentic, high-quality food products and ingredients, ensuring excellent packaging, timely delivery, and efficient after-sales service to achieve the highest level of customer satisfaction worldwide.”</h3>
              <img src={logo_large} alt="Fruto Foods Logo" className="mb-4 w-60 h-60 md:w-100 md:h-100 md:mr-10" />
            </div>
            <div>
              <h2 className='text-3xl md:text-5xl mt-8 md:mt-12 leading-none '><span className='text-[#c33E2F]'>❖</span><span className='border-b-3 border-[#c33E2F] ml-1'>Our Tea</span>m</h2>
              <p className='mt-4 ml-4 text-lg md:text-3xl md:mt-8 text-gray-800 leading-none font-sans md:leading-snug'>At Fruto Foods, we are led by <b>Mr. K. V. Prasad</b>, a highly experienced professional with over 30 years of expertise in the industry. Backed by a dedicated team of ten skilled members, we specialize in Manufacturing, Supplying, Sales, Marketing, and After-Sales Service, working together to deliver quality and trust at every step.</p>
            </div>
    </div>
  )
}

export default OurTeamPage