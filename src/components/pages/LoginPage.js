import React, { useEffect } from 'react';
import Login from '../Auth/Login';
import Footer from '../fixed/Footer';
import Header from '../fixed/Header';

function LoginPage() {

    useEffect(() => {

      }, []);

    return (
      <div className="flex flex-col h-screen justify-between">
        <Header className="h-10"></Header>
        <Login className="mb-auto h-10"></Login>
        <Footer className="h-10"></Footer>
      </div>
    );
  }
  
  export default LoginPage;