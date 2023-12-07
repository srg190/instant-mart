import styled from "styled-components";

export const Space = styled.div`
  margin: 1rem 0;
`;

export const ScrollWrapper = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  min-height: 250px;

  .ant-card-body {
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
`;

export const DivFlexContainer = styled.div`
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #8983f3;
`;

export const childDivContainer = styled(DivFlexContainer)`
  background-color: #a5f2e7;
  margin: 2rem;
  height: 80%;
  width: 80%;
  justify-content: flex-start;
`;

export const childContent = styled(childDivContainer)`
  color: #3a0077;
`;

export const contentDataContainer = styled.div`
  height: 60vh;
  /* margin-top: 10vh; */
  width: 100vw;
  background-color: #a5f2e7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const contentData = styled(contentDataContainer)`
  margin: 10%;
  width: 80%;
  height: 80%;
  background-color: #8983f3;
  border-radius: 1rem;
`;

export const productCategoryContainer = styled.div`
  /* background-color: #00574a; */
  width: 100vw;
  height: 100%;
  margin-top: 1.5rem;
  display: flex;
`;

export const categoryContainer = styled(productCategoryContainer)`
  width: 30%;
  height: 80%;
  background-color: pink;
  margin: 1.5rem;
  margin-left: 0.5rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border-left: 2px solid gray;
  padding: 1.5rem;
`;
export const productContainer = styled(categoryContainer)`
  width: 70%;
  height: 80%;
  background-color: aquamarine;
`;

export const Footer = styled.div`
  width: 100vw;
  height: 80%;
  background-color: black;
  color: white;
`;
