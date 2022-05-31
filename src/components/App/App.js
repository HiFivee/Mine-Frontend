import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Loading from '../loading/loading';
import DashboardPage from '../pages/DashboardPage';
import LoginPage from '../pages/LoginPage';
import MainPage from '../pages/MainPage';
import ProjectApplyPage from '../pages/ProjectApplyPage';
import ProjectDetailPage from '../pages/ProjectDetailPage';
import ProjectRecruitPage from '../pages/ProjectRecruitPage';
import SignUpPage from '../pages/SignUpPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Loading />}/>
          <Route path = "/main" element = {<MainPage />}/>
          <Route path = "/login" element = {<LoginPage />}/>
          <Route path = "/signup" element = {<SignUpPage />}/>
          <Route path = "/dashboard" element = {<DashboardPage />}/>
          <Route path = "/project/recruit" element = {<ProjectRecruitPage />}/>
          <Route path = "/project/detail" element = {<ProjectDetailPage />}/>
          <Route path = "/project/apply" element = {<ProjectApplyPage />}/>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
