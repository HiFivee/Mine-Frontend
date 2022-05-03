import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Header/Header';
import Login from './Account/Auth/Login';
import AccountCreate from './Account/Recover/AccountCreate';
import AccountFetch from './Account/Recover/AccountFetch';
import ProjectFetch from './Project/ProjectFetch';
import SecondProject from './Project/SecondProject';
import style from './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Header />}/>
          <Route path = "/login" element = {<Login />} />
          <Route path = "/accountCreate" element = {<AccountCreate />} />
          <Route path = "/accountFetch" element = {<AccountFetch />} />
          <Route path = "/projectFetch" element = {<ProjectFetch />} />
          <Route path = "/secondProject" element = {<SecondProject />} />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
