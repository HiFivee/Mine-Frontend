import React, { useEffect } from 'react';
import Footer from '../fixed/Footer';
import Header from '../fixed/Header';
import AccountCreate from '../Account/AccountCreate'

function SignUpPage() {

    useEffect(() => {

      }, []);

    return (
      <div className="flex flex-col h-screen justify-between">
        <Header className="h-10"></Header>
        <AccountCreate className="mb-auto h-10"></AccountCreate>
        <Footer className="h-10"></Footer>
      </div>
    );
  }
  
  export default SignUpPage;