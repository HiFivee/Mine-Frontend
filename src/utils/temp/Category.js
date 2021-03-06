import React, { useState } from 'react';
import styled from 'styled-components';

const theme = {
  color: {
    darkPurple: '#352F6E',
    lightPurple: '#ADA8E6',
    backgroundLightGray: '#FBFBFB',
    backgroundGray: '#EFEFEF',
    borderGray: '#E5E6E6',
    gray: '#6C6C6C',
    red: '#DC2D2C',
  },

  fontSize: {
    small: '16px',
    medium: '18px',
    large: '20px',
  },

  fontWeight: {
    thin: '300',
    normal: '400',
    bold: '700',
  },
};

const Wrapper = styled.div`
  width: 100%;
  border: 1px solid #E5E6E6;
  margin-bottom: 40px;
`;
const Title = styled.div`
  padding: 20px;
  border-bottom: 1px solid #E5E6E6;
`;
const CategoryContainer = styled.div`
  display: flex;
`;

const SubTitle = styled.div`
  width: 80px;
  padding: 20px;
  //background-color: #FBFBFB;
  border-right: 1px solid #E5E6E6;
`;

const SelectContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin : 10px
  width: 100%;
`;

const CheckBox = styled.div`
  width: 50%;
  height: 90%;
  margin : 10px;
  padding: 5px 0 10px 0;
  border: 1.5px solid #E5E6E6;
  border-radius: 10px;
  overflow: scroll;
`;
const Check = styled.input`
  width: 20px;
  height: 20px;
  margin: 5px 7px 5px 10px;
  border: 2px solid #E5E6E6;
  cursor: pointer;
`;
const Label = styled.label`
  display: flex;
  margin : 5px;
  padding: 5px;
  align-items: center;
`;

const Type = styled.div`
  margin-top: 7px;
  font-weight: 700;
  font-size: 16px;
`;
const SelectedBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 90%;
  margin : 10px;
  border: 1px solid #E5E6E6;
  border-radius: 10px;
  overflow: scroll;
`;
const AlertMessage = styled.div`
  color: #6C6C6C;
`;
const SelectedCategory = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  height: 15%;
  margin-top: 15px;
  
  background-color: #ADA8E6;
  border: 1px solid #352F6E;
  border-radius: 5px;
`;
const Selected = styled.div`
  font-size: 16px;
`;
const CancelChecked = styled.button`
  width: 30px;
  height: 30px;
  background: none;
  border: none;
`;
const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  height: 7%;
  border-top: 1px solid #E5E6E6;
  border-bottom: 1px solid #E5E6E6;
`;

const SearchBar = styled.form`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 79%;
  height: 75%;
  margin-left: 18px;
  border: 1px solid #E5E6E6;
  border-radius: 10px;
`;

const SearchInput = styled.input`
  width: 85%;
  border-radius: 10px;
  padding: 9px;
`;

const SearchButton = styled.button`
  width: 13%;
  background: none;
  border: 1px solid #352F6E;
  border-radius: 10px;
  padding: 5px 0px;
`;

const ProductNameContainer = styled.div`
  display: flex;
  align-items: center;
  height: 7%;
  border-bottom: 1px solid #E5E6E6;
`;

const ProductBar = styled.form`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 40%;
  height: 100%;
`;

const ProductSearch = styled.select`
  width: 92%;
  height: 75%;
  border: 1px solid #E5E6E6;
  border-radius: 10px;
  padding-left: 7px;
`;

const ProductCode = styled.div`
  display: flex;
  width: 30%;
  height: 100%;
`;

const Code = styled.div`
  display: flex;
  padding-left: 20px;
  align-items: center;
  width: 35%;
  height: 100%;
  background-color: #FBFBFB;
  border-right: 1px solid #E5E6E6;
`;

const ShowingCode = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
`;

const ProductIntro = styled.div`
  display: flex;
  align-items: center;
  height: 7%;
  border-bottom: 1px solid #E5E6E6;
`;

const InfoInput = styled.input`
  width: 79%;
  margin-left: 15px;
  padding: 9px;
  border: 1px solid #E5E6E6;
  border-radius: 10px;
`;
const ProductThumbnail = styled.div`
  display: flex;
  border-bottom: 1px solid #E5E6E6;
`;

const AttachedButton = styled.button`
  width: 280px;
  height: 60px;
  margin-left: 15px;
  background: none;
  border: 1px solid #352F6E;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: #E5E6E6;
  }
`;
const FileName = styled.div`
  margin: 10px 0 10px 15px;
`;
const Cancel = styled.button`
  width: 30px;
  height: 30px;
  margin-left: 15px;
  font-size: 20px;
  text-align: center;
  border-radius: 15px;
  background: none;
  border: 1px solid #E5E6E6;
`;
const ProductImg = styled.div`
  display: flex;
  border-bottom: 1px solid #E5E6E6;
`;

const AttachedBox = styled.div`
  width: 30%;
  height: 90%;
`;
const FileList = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  margin-left: -5px;
`;
const StockContainer = styled.div`
  display: flex;
  align-items: center;
  height: 6.5%;
`;

const StockNum = styled.div`
  margin-left: 20px;
`;

const ContentWrap = styled.div``;

const CATEGORY_LIST = [
  { id: 0, data: '???????????????' },
  { id: 1, data: '???????????????' },
  { id: 2, data: '???????????????' },
  { id: 3, data: '???????????????' },
  { id: 4, data: '???????????????' },
  { id: 5, data: '???????????????' },
  { id: 6, data: '???????????????' },
  { id: 7, data: '?????????' },
  { id: 8, data: '?????????' },
  { id: 9, data: '????????????' },
  { id: 10, data: '????????????' },
  { id: 11, data: '????????????' },
  { id: 12, data: '????????????' },
  { id: 13, data: '????????????' },
  { id: 14, data: '????????????' },
  { id: 15, data: '?????????' },
];

const CATEGORY_LIST_2 = [
  { id: 20, data: '?????????' },
  { id: 21, data: '?????????' },
  { id: 22, data: '?????????' },
  { id: 23, data: '?????????' },
  { id: 24, data: '?????????' },
  { id: 25, data: '?????????' },
  { id: 26, data: '?????????' },
  { id: 27, data: '?????????' },
  { id: 28, data: '?????????' },
  { id: 29, data: '?????????' },
  { id: 30, data: '????????????' },
  { id: 31, data: '?????????' },
  { id: 32, data: '?????????' },
  { id: 33, data: '????????????' },
  { id: 34, data: '?????????' },
  { id: 35, data: '?????????' },
  { id: 36, data: '?????????' },
  { id: 37, data: '?????????' },
  { id: 38, data: '?????????' },
  { id: 39, data: '????????????' },
  { id: 40, data: '?????????' },
  { id: 41, data: '?????????' },
  { id: 42, data: '?????????' },
  { id: 43, data: '??????' },
  { id: 44, data: '?????????' },
];

const PRODUCT_DATA = [
  { id: null, value: '????????? ???????????????.' },
  { id: '0001', value: '????????? 300g' },
  { id: '0002', value: '???????????? 150g' },
  { id: '0003', value: '???????????? 150g' },
  { id: '0004', value: '?????????????????? 150g' },
  { id: '0005', value: '?????????' },
  { id: '0006', value: '?????? ?????? 200g' },
  { id: '0007', value: '????????? 200g' },
  { id: '0008', value: '?????? ?????? 200g' },
];

function ProdBasicInfo() {
  const [checkedList, setCheckedList] = useState([]);
  const [selectedDropValue, setSelectedDropValue] =
    useState('????????? ???????????????.');

  const onCheckedElement = (checked, item) => {
    if (checked) {
      setCheckedList([...checkedList, item]);
    } else if (!checked) {
      setCheckedList(checkedList.filter(el => el !== item));
    }
  };
  const onRemove = item => {
    setCheckedList(checkedList.filter(el => el !== item));
  };
  const handleDropProduct = e => {
    const { value } = e.target;
    setSelectedDropValue(PRODUCT_DATA.filter(el => el.value === value)[0].id);
  };

  return (
    <section2>
      <Wrapper>
        <Title>?????????</Title>
        <CategoryContainer>
          <SubTitle>??? ??? ??? ???</SubTitle>
          <SelectContainer>
            <CheckBox>
              {CATEGORY_LIST.map(item => {
                return (
                  <Label key={item.id}>
                    <Check
                      type="checkbox"
                      value={item.data}
                      onChange={e => {
                        onCheckedElement(e.target.checked, e.target.value);
                      }}
                      checked={checkedList.includes(item.data) ? true : false}
                    />
                    <Type>{item.data}</Type>
                  </Label>
                );
              })}
            </CheckBox>
            <CheckBox>
              {CATEGORY_LIST_2.map(item => {
                return (
                  <Label key={item.id}>
                    <Check
                      type="checkbox"
                      value={item.data}
                      onChange={e => {
                        onCheckedElement(e.target.checked, e.target.value);
                      }}
                      checked={checkedList.includes(item.data) ? true : false}
                    />
                    <Type>{item.data}</Type>
                  </Label>
                );
              })}
            </CheckBox>
            <SelectedBox>
              {checkedList.length === 0 && (
                <AlertMessage>??????????????? ????????? ?????????.</AlertMessage>
              )}
              {checkedList.map(item => {
                return (
                  <SelectedCategory key={item}>
                    <Selected>{item}</Selected>
                    <CancelChecked onClick={() => onRemove(item)}>
                      X
                    </CancelChecked>
                  </SelectedCategory>
                );
              })}
            </SelectedBox>
          </SelectContainer>
        </CategoryContainer>
        <FilterContainer>
          <SubTitle>?????? ??????</SubTitle>
          <SearchBar>
            <SearchInput placeholder="??????????????? ????????? ?????????." />
            <SearchButton>??????</SearchButton>
          </SearchBar>
        </FilterContainer>
        <ProductNameContainer>
          <SubTitle>????????? *</SubTitle>
          <ProductBar>
            <ProductSearch onChange={handleDropProduct}>
              {PRODUCT_DATA.map(el => {
                return (
                  <option defaultValue="123" key={el.id}>
                    {el.value}
                  </option>
                );
              })}
            </ProductSearch>
          </ProductBar>
          <ProductCode>
            <Code>?????? ??????</Code>
            <ShowingCode>{selectedDropValue}</ShowingCode>
          </ProductCode>
        </ProductNameContainer>
        <ProductIntro>
          <SubTitle>?????? ?????? ?????? ?????? *</SubTitle>
          <InfoInput placeholder="?????? ?????? ?????? ????????? ????????? ?????????." />
        </ProductIntro>
        <ProductThumbnail>
          <SubTitle>?????? ?????????</SubTitle>
          <ContentWrap>
          </ContentWrap>
        </ProductThumbnail>
        <ProductImg>
          <SubTitle>?????? ?????? ?????????</SubTitle>
        </ProductImg>
        <StockContainer>
          <SubTitle>?????? ??? ??????*</SubTitle>
          <StockNum>[NN???]</StockNum>
        </StockContainer>
      </Wrapper>
    </section2>
  );
}

export default ProdBasicInfo;