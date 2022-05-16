import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Header/Header';
import Login from './Account/Auth/Login01';
import AccountCreate from './Account/Recover/AccountCreate01';
import Category from './component/Category';
import Home from './component/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Header />}/>
          <Route path = "/Login" element = {<Login />} />
          <Route path = "/AccountCreate" element = {<AccountCreate />} />
          <Route path = "/Category" element = {<Category />} />
          {/* <Route path = "/accountFetch" element = {<AccountFetch />} />
          <Route path = "/projectFetch" element = {<ProjectFetch />} />
          <Route path = "/secondProject" element = {<SecondProject />} /> */}
          <Route path = "/home" element = {<Home />} />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
