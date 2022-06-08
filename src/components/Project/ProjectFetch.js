import { memo, useCallback, useEffect, useState } from "react";
import axios from "../../utils/api/axios";
import styled, { createGlobalStyle } from "styled-components";
import Item from "../../utils/scrollComponents/Items";
import Loader from "../../utils/scrollComponents/Loader";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
  }
  body {
    background-color: #f2f5f7;
  }
`;

const AppWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  .Target-Element {
    width: 100vw;
    height: 140px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
`;

const ProjectFetch = () => {
  const [target, setTarget] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [itemLists, setItemLists] = useState([1]);
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    console.log(itemLists);
  }, [itemLists]);

  // 서버에서 아이템을 가지고 오는 함수
  const getItems = async () => {
    try {
      const response = await axios.get(`/api/recruit`,
          {
              withCredentials: false
          }
      );

      console.log(JSON.stringify(response?.data));
      setItemLists(response?.data.recruitList);
      setIsLoaded(true);
    } catch (err) {
        if (!err?.response) { 
            setErrMsg('서버 응답 없음. No Server Response');
        } else if (err.response?.status === 409) {
            setErrMsg('이미 있는 이름입니다. Project Name Taken');
        } else {
            setErrMsg('프로젝트 생성 실패. Failed')
        }
        //errRef.current.focus();
    }
  }


  const getMoreItem = async () => {
    setIsLoaded(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    let Items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // 리크루트 단위 배열 
    setItemLists((itemLists) => itemLists.concat(Items));
    setIsLoaded(false);
  };

  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting && !isLoaded) {
      observer.unobserve(entry.target);
      //await getMoreItem();
      await getItems();
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.4,
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target  ]);

  return (
    <>
      <GlobalStyle />
      <AppWrap>
        {itemLists.map((item, i) => {
          return <Item item={item} key={i} />;
        })}
        <div ref={setTarget} className="Target-Element">
          {isLoaded && <Loader />}
        </div>
      </AppWrap>
    </>
  );
};

export default memo(ProjectFetch);