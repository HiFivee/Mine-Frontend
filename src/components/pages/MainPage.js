import React, { useEffect } from 'react';
import Footer from '../fixed/Footer';
import Header from '../fixed/Header';
import Hero from '../main/Hero';
import Features from '../main/Features';

function MainPage() {

    useEffect(() => {

      }, []);

    return (
      <div className="flex flex-col h-screen justify-between">
        <Header className="h-10"></Header>
        <div className="mb-auto h-auto">
          <Hero></Hero>
          <Features></Features>
        </div>
        <Footer className="h-10"></Footer>
      </div>
    );
  }
  
  export default MainPage;