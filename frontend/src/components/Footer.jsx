import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'


const Footer = () => {

const navigate = useNavigate()

  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
          {/* ---left section--- */}
          <div>
              <img onClick={()=>navigate('/')} className='mb-5 w-40 cursor-pointer' src={assets.logo} alt="" />
              <p className='w-full md:w-2/3 text-gray-600 leading-6'>Prescripto is a smart hospital management platform designed to make healthcare services more accessible, organized, and efficient. Our platform connects patients, doctors, and healthcare administrators through a secure and user-friendly digital healthcare experience.</p>
          </div>
          {/* ---center section--- */}
          <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy policy</li>
            </ul>
          </div>
          {/* ---right section--- */}
          <div>
            <p className='text-xl font-medium mb-5'>Contact Us</p>
            {/* <p className='flex flex-col gap-2 text-gray-600'>123 Healthcare Avenue, New Delhi, India</p> */}
            <ul  className='flex flex-col gap-2 text-gray-600'>
                <p className='flex flex-col gap-2 text-gray-600'>📍 123 Healthcare Avenue, New Delhi, India</p>
                <li>📞 +1-212-456-7890</li>
                <li>✉️ support@prescripto.com</li>
            </ul>
          </div>
      </div>
      {/* ---------copyright text------- */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>© 2026 Prescripto. All Rights Reserved. Privacy Policy | Terms & Conditions</p>
      </div>
    </div>
  )
}

export default Footer
