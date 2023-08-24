import { useProductContext } from './context/productContext';
import HeroSection from './component/HeroSection'

const About = () => {
    const {myName} = useProductContext();
    const data = {
        name:"Rishi Ecommerce"
    };
    
  return (
    <div>
        <HeroSection myData={data} />
       <h1> hh {myName}</h1>
    </div>
  )
}

export default About