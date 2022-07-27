import React from 'react';
import Forms from './Components/Forms/Forms';
import Header from './Components/Header/Header'
import Newsletter from './Components/Newsletter/Newsletter';
import Products from './Components/Products/Products';
import ProductSection from './Components/ProductSection/ProductSection';
import styles from './reset.css'

function App() {
  return (
    <div className={styles}>
        <Header />
        <Forms />
        <ProductSection />
        <Products />
        <Newsletter />
    </div>
      
  );
}

export default App;
