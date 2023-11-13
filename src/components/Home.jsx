import React from 'react'

const Home = () => {
  return (
    <>
    <div className='md:min-h-[500px] min-h-full  w-full flex flex-col gap-y-5 md:gap-y-0 md:flex-row items-center bg-slate-900 '>
        <div className='w-[50%] flex justify-center '>
            
            <h2 className='text-6xl text-orange-600 font-semibold mt-1 md:mt-0'>
                Accounts Module
            </h2>
            </div>
            
            <div className='w-[2%] '>
                <div className='w-2 bg-red-800  rounded-3xl'></div>

            </div>
            <div className='w-[50%] flex justify-center pb-4 md:pb-0'>
                <p className='text-slate-300'>
                Unlock the Full Potential of Your Accounting Needs. From receipts to payments, journals, vouchers, and banking transactions — experience a comprehensive solution tailored for seamless integration with your applications, ensuring optimal performance at every step.                </p>
            </div>
        

    </div>
    </>
      
    
  )
}

export default Home
