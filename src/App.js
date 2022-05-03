import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Header/Header';
import Login from './Account/Auth/Login';
import AccountCreate from './Account/Recover/AccountCreate';
import AccountFetch from './Account/Recover/AccountFetch';
import styles from './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Header />}/>
          <Route path = "/login" element = {<Login />} />
          <Route path = "/accountCreate" element = {<AccountCreate />} />
          <Route path = "/accountFetch" element = {<AccountFetch />} />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
