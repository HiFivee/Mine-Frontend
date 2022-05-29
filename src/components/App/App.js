import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from '../Header/Header';
import Login from '../Auth/Login'
import AccountCreate from '../Account/AccountCreate';
import Category from '../../utils/temp/Category';
import Home from '../../utils/temp/Home';
import ThirdProject from '../Project/ThirdProject';
import ProjectFetch from '../Project/ProjectFetch';
import SecondProject from '../Project/SecondProject';
import AccountFetch from '../Account/AccountFetch';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Header />}/>
          <Route path = "/Login" element = {<Login />} />
          <Route path = "/AccountCreate" element = {<AccountCreate />} />
          <Route path = "/Category" element = {<Category />} />
          <Route path = "/AccountFetch" element = {<AccountFetch />} />
          <Route path = "/ProjectFetch" element = {<ProjectFetch />} />
          <Route path = "/SecondProject" element = {<SecondProject />} />
          <Route path = "/ThirdProject" element = {<ThirdProject /> } />
          <Route path = "/Home" element = {<Home />} />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
