import React from 'react'
import ContactUsForm from '../../components/ContactUsForm'

const Contact = () => {
  return (
    <div className=' bg-[linear-gradient(117.22deg,_#261945_0%,_#341B3E_51.34%,_#401D38_98.88%)] text-white flex flex-col justify-center items-center pb-[120px] pt-[80px]'>
      <div className=' text-[20px] md:text-[36px] font-[700] mb-[28px]'>CONTACT US</div>
      <div className=' text-[13px] md:text-[24px] font-[500] mb-[28px] text-center px-3.5'>Interested in working with us? Get in touch to discuss your product and export needs. Name</div>
      <ContactUsForm />
    </div>
  )
}

export default Contact
