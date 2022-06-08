import React, { useEffect } from 'react';
import AccountFetch from '../account/AccountFetch';
import Footer from '../fixed/Footer';
import Header from '../fixed/Header';

function DashboardPage() {

    useEffect(() => {

      }, []);

    return (
      <div className="flex flex-col h-screen justify-between">
        <Header className="h-10" />
        <AccountFetch />
        <Footer className="h-10" />
      </div>
    );
  }
  
  export default DashboardPage;