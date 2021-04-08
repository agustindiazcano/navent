import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styles from '../styles/app.module.css'; 
import Router from './routers/Router';

const App = () => {
  return (
    <>
      <Navbar />
        <div className={styles.body}>
            <Router/>          
        </div>
      <Footer />
    </>
  );
};

export default App;
