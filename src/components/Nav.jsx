import React from 'react'
import inklLogo from '.././images/inkl-logo.svg'; 

const Nav = () => {
  return (
    <div>
        <img src={inklLogo} alt="" height={40} width={80}/>

        {/* link to be routed later on */}
        <a href="http://">Sources</a>
        <a href="http://">Pricing</a>
        <a href="http://">Download</a>

        <a href="h" className=''>Sign In</a>
        <a href="ht">Sign Up</a>
    </div>
  )
}

export default Nav