import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Header/Header';
import Login from './Account/Auth/Login';
import AccountCreate from './Account/Recover/AccountCreate';
import Category from './component/Category';
import Home from './component/Home'
import ThirdProject from './Project/ThirdProject';
import ProjectFetch from './Project/ProjectFetch';
import SecondProject from './Project/SecondProject';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Header />}/>
          <Route path = "/Login" element = {<Login />} />
          <Route path = "/AccountCreate" element = {<AccountCreate />} />
          <Route path = "/Category" element = {<Category />} />
          {/* <Route path = "/accountFetch" element = {<AccountFetch />} /> */}
          <Route path = "/ProjectFetch" element = {<ProjectFetch />} />
          <Route path = "/SecondProject" element = {<SecondProject />} />
          <Route path = "/ThirdProject" element = {<ThirdProject /> } />
          <Route path = "/home" element = {<Home />} />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
