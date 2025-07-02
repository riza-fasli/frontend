import React from 'react'

const Footer = () => {
  return (
   <div>
      <div className='bg-[#c9dce9] flex justify-between items-start p-[5rem] '>
          <div className='font-bold  flex   text-[1rem] text-sm'>My-Shopiee</div>

          <div className=' flex flex-col items-center justify-center-safe gap-3 '>
            <div className='font-bold text-sm'>Links </div>
            <div className='flex   gap-3 flex-row font-medium text-gray-500 text-sm'>
              <div>Login</div>
              <div>Contact</div>
              <div>Shop</div>
            </div>
    
          </div>
          <div className=' flex flex-col items-center justify-end gap-3'>
            <div className='font-bold flex justify-between items-center text-sm  '>Get In Touch</div>
            <div className='whitespace-pre font-sans text-sm'><div>Payyannur (via),Kannur District</div></div>
          </div>
  
  
  
  
      </div>
      <div className=' border-t  flex justify-center p-[0.5rem] justify-items-stretch  bg-gray-200 text-sm margin-'>@copyright</div>
   </div>
  )
}

export default Footer