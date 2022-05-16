import React, { useState } from 'react';
//import * as S from '../ProdBasicInfo/ProdBasicInfo.Style';

const PRODUCT_DATA = [
  { id: null, value: '선택하세요.' },
  { id: '0001', value: '서울' },
  { id: '0002', value: '경기' },
  { id: '0003', value: '등등' },
];

function ProdBasicInfo() {
  // 상품코드를 출력할 useState
  const [selectedDropValue, setSelectedDropValue] =
    useState('상품을 선택하세요.');
// onChange 이벤트가 발생한 target을 받아와 value값이 할당해준다.
  const handleDropProduct = e => {
    const { value } = e.target;
// 상품코드에 넣을 데이터
    setSelectedDropValue(PRODUCT_DATA.filter(el => el.value === value)[0].id);
  };

  return (
      <S.ProductNameContainer>
        <S.Product>상품명 *</S.Product>
        <S.ProductBar>
          <S.ProductSearch onChange={handleDropProduct}>
            {PRODUCT_DATA.map(el => {
              return <option key={el.id}>{el.value}</option>;
            })}
          </S.ProductSearch>
        </S.ProductBar>
        <S.ProductCode>
          <S.Code>상품 코드</S.Code>
          <S.ShowingCode>{selectedDropValue}</S.ShowingCode>
        </S.ProductCode>
      </S.ProductNameContainer>
      );
   };

   export default ProdBasicInfo;