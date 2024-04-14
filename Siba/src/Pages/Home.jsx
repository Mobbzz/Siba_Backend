import React from 'react';
import { Link } from 'react-router-dom';

const products = [

  
];

function Home() {
  return (
    <div className="home">
    <h1 className="home-title">Välkommen till Siba!</h1>
    <div className="home-background">
      <img src="https://i0.wp.com/www.anactazia.se/wp-content/uploads/2018/12/indesign-siba2-1451x1000px.png?fit=1451%2C1000" alt="Siba" />
    </div>

          
    <div className="centered-content">
      <Link to="/shop" className="productsBtn">Våra Produkter </Link>
      </div>
  </div>
  );
}


export default Home;