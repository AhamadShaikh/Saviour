import React from 'react'
import bg1 from "../../assets/bg1.png"
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='bg-cover bg-center xsm:min-h-[450px] md:min-h-[588px] m-0 p-0' style={{backgroundImage:`url(${bg1})`}}>
        <Navbar/>
        <p className='xsm:text-2xl md:text-6xl font-shojumaru text-center text-white items-center mt-20 h-full  leading-12'>Where Blockchain Heroes Thrive: Rescuing Dreams, Elevating Fortunes.</p>
    </div>
  )
}

export default Header