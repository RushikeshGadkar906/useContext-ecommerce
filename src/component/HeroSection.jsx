import React from 'react'

const HeroSection = ({myData}) => {
    const {name} = myData;
    
  return (
    <div className='container'>
        <div className="row mt-5">
            <div className="col-6">
                <h1>Welcome, {name}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste id magni, hic quidem omnis, earum voluptatum placeat, quam tenetur ipsam cupiditate? Reiciendis consequuntur dolore nesciunt necessitatibus. Debitis itaque iste deserunt.</p>
                <button className="mt-3 btn btn-success">Shop Now</button>
            </div>
            <div className="col-6">
                <img src="images/hero.jpg" className='img-fluid' alt="" />
            </div>
        </div>
    </div>
  )
}

export default HeroSection