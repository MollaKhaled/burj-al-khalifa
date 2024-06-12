import React from 'react';
import Header from '../Header/Header';
import './Home.css'
import pic1 from '../../../public/images/Single.png';
import pic2 from '../../../public/images/Double.png';
import pic3 from '../../../public/images/Family.png';

const Home = () => {
  return (
    <div>
      <div className='header-background'>
      <div className='heading-text'>
        <h2>Burj Al Khalifa</h2>
        <h4>A Global Icon of Arabian Luxury</h4>
      </div>
    </div>
   <div className='grid grid-cols-3'>
   <div className="card w-96 bg-base-100 shadow-xl mt-10 mb-10 mx-6">
  <figure><img src={pic1} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Book</button>
    </div>
  </div>
</div>
   <div className="card w-96 bg-base-100 shadow-xl mt-10 mb-10 mx-6">
  <figure><img src={pic2} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Book</button>
    </div>
  </div>
</div>
   <div className="card w-96 bg-base-100 shadow-xl mt-10 mb-10 mx-6">
  <figure><img src={pic3} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Book</button>
    </div>
  </div>
</div>
   </div>
    </div>
    

  );
};

export default Home;