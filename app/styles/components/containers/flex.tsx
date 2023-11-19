import { styled } from "styled-components";

export const CenteredRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const CenteredColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const GrayRowContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px 0px 60px 0px;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 30px;
  max-width: 700px;
`;

export const GrayBackground = styled.div`
  background-color: #f0f0f0;
  padding-bottom: 50px;
  width: 100%;
`;

export const WhiteBackground = styled.div`
  background-color: white;
`;

export const WhiteBox = styled.div`
  background-color: white;
  padding: 10px;
  margin-bottom: 30px;
`;

export const WhitePageBox = styled.div`
  background-color: white;
  width: min-content;
  min-height: 130px;
  min-width: 200px;
  padding: 25px 20px 20px 20px;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;