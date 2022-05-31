import React, { useEffect } from 'react';
import Footer from '../fixed/Footer';
import Header from '../fixed/Header';

function MainPage() {

    useEffect(() => {

      }, []);

    return (
      <div className="flex flex-col h-screen justify-between">
        <Header className="h-10"></Header>
        <div className="mb-auto h-10"></div>
        <Footer className="h-10"></Footer>
      </div>
    );
  }
  
  export default MainPage;