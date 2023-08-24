import React from 'react'
import FetureProducts from './component/FetureProducts';
import Footer from './component/Footer';
import HeroSection from './component/HeroSection'
import Services from './component/Services';
import Trusted from './component/Trusted';

const Home = () => {
    const data = {
        name:"Rishi Store"
    };
  return (
    <div>
        <HeroSection myData={data}/>
        <FetureProducts />
        <Services />
        <Trusted />

        <Footer />
    </div>
  )
}

export default Home