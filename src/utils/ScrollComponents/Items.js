import { memo } from "react";
import styled from "styled-components";

// const ItemWrap = styled.div`
//   .ItemWrap {
//     width: 350px;
//     height: 370px;
//     display: flex;
//     flex-direction: column;
//     background-color: #ffffff;
//     margin: 1rem;
//     box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
//     border-radius: 6px;
//   }
//   .ItemWrap-Top {
//     display: flex;
//     width: 350px;
//     height: 170px;
//     border-top-left-radius: 6px;
//     border-top-right-radius: 6px;
//     background-color: #e2e5e7;
//     color: #566270;
//     font-size: 2.25rem;
//     justify-content: center;
//     text-align: center;
//     align-items: center;
//   }
//   .ItemWrap-Body {
//     height: 200px;
//     border-bottom-left-radius: 6px;
//     border-bottom-right-radius: 6px;
//     padding: 10px;
//   }
//   .ItemWrap-Body-Title {
//     width: 300px;
//     height: 36px;
//     margin: 16px;
//     border-radius: 4px;
//     background-color: #e2e5e7;
//   }
// `;

const Item = ({ item }) => {
  return (
    // <ItemWrap>
    //   <div className="ItemWrap">
    //     <div className="ItemWrap-Top ">{number}</div>
    //     <div className="ItemWrap-Body">
    //       <div className="ItemWrap-Body-Title " />
    //       <div className="ItemWrap-Body-Title " />
    //       <div className="ItemWrap-Body-Title " />
    //     </div>
    //   </div>
    // </ItemWrap>
    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-3">
      <a href="#" class="flex items-center justify-center">
          <img class="rounded-t-lg" src="https://avatars.githubusercontent.com/u/103104002?s=400&u=fe6790e6a567f81123b15f0effc05364cc4b19e8&v=4" alt="" />
      </a>
      <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">프로젝트 ID: {item.projectId}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
        <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            더 자세히 알아보기
            <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>
  );
};

export default memo(Item);