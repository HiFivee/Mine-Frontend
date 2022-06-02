import React, { useEffect } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Loading from '../loading/loading';
import DashboardPage from '../pages/DashboardPage';
import LoginPage from '../pages/LoginPage';
import MainPage from '../pages/MainPage';
import ProjectCreatePage from '../pages/ProjectCreatePage';
import ProjectApplyPage from '../pages/ProjectApplyPage';
import ProjectDetailPage from '../pages/ProjectDetailPage';
import ProjectRecruitPage from '../pages/ProjectRecruitPage';
import SignUpPage from '../pages/SignUpPage';
import CommunityPage from '../pages/CommunityPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path = "/" element = {<Loading />}/> */}
          <Route path = "/" element = {<MainPage />}/>
          <Route path = "/login" element = {<LoginPage />}/>
          <Route path = "/signup" element = {<SignUpPage />}/>
          <Route path = "/dashboard" element = {<DashboardPage />}/>
          <Route path = "/project/create" element = {<ProjectCreatePage />}/> 
          <Route path = "/project/recruit" element = {<ProjectRecruitPage />}/>
          <Route path = "/project/detail" element = {<ProjectDetailPage />}/>
          <Route path = "/project/apply" element = {<ProjectApplyPage />}/>
          <Route path = "/community" element = {<CommunityPage />}/>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
