import React from 'react'
import inklLogo from '.././images/inkl-logo.svg'; 

const Nav = () => {
  return (
    <div className='/px-[192px] px-[24px] py-[20px] flex justify-between items-center'>
        <img src={inklLogo} alt="" height={40} width={80}/>

        {/* link to be routed later on */}
        <div className='flex gap-[24px] items-center'>
            <span className='flex gap-[24px] font-medium text-[20px] leading-[28px] text-[#787878]'>
                <a href="http://">Sources</a>
                <a href="http://">Pricing</a>
                <a href="http://">Download</a>
            </span>

            <span className='flex gap-[16px]'>
                <a href="h" className='px-[40px] py-[8px] bg-[#141E28] text-[#FFFFFF] rounded-[9999px] font-medium text-[20px] leading-[28px]'>Sign In</a>
                <a href="ht" className='px-[40px] py-[8px] bg-[#ED5503] text-[#FFFFFF] rounded-[9999px] font-medium text-[20px] leading-[28px]'>Sign Up</a>
            </span>
        </div>
    </div>
  )
}

export default Nav