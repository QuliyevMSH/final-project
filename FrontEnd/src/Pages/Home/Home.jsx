import React from 'react'
import Header from '../../Components/Header/Header'
import InterestInformation from '../../Components/InterestInformation/InterestInformation'
import Footer from '../../Components/Footer/Footer'
import ButunMehsullar from '../../Components/ButunMehsullar/ButunMehsullar'
import AppSec from '../../Components/AppTanitim/AppSec'

const Home = () => {
  return (
    <div style={{display:"flex", flexDirection:"column", gap:"20px"}}>
      <Header/>
      <InterestInformation/>
      <AppSec/>
      <ButunMehsullar/>
      <Footer/>
    </div>
  )
}

export default Home
