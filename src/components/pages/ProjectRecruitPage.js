import React, { useEffect } from 'react';
import Footer from '../fixed/Footer';
import Header from '../fixed/Header';
import ThirdProject from '../project/ThirdProject';
import ProjectFetch from '../project/ProjectFetch';

function ProjectRecruitPage() {

    useEffect(() => {

      }, []);

    return (
      <div className="flex flex-col h-screen justify-between">
        <Header className="h-10"></Header>
          <div className="sm:text-center lg:text-center mt-5">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="text-center block xl:inline mb-5">프로젝트 찾기</span>
              </h1>
          </div>
        <ProjectFetch></ProjectFetch>
        <Footer className="h-10"></Footer>
      </div>
    );
  }
  
  export default ProjectRecruitPage;