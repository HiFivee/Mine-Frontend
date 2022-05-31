import { useEffect } from 'react';
import Footer from '../fixed/Footer';
import Header from '../Fixed/Header';

function DashboardPage() {

    useEffect(() => {

      }, []);

    return (
    <div className="dashboard-wrapper">
      <Header></Header>
      <Footer></Footer>
    </div>
    );
  }
  
  export default DashboardPage;