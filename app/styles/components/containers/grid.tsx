import { styled } from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  border-radius: 15px;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 50px;
`;

export const GridDiv1 = styled.div`
  grid-area: 1 / 1 / 6 / 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const GridDiv2 = styled.div`
  grid-area: 1 / 3 / 2 / 6;
  border-radius: 15px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
export const GridDiv3 = styled.div`
  grid-area: 2 / 3 / 4 / 6;
  border-radius: 15px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
export const GridDiv4 = styled.div`
  grid-area: 4 / 3 / 6 / 6;
  border-radius: 0px 0px 15px 0px;
  border-radius: 15px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
