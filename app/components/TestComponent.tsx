import { styled } from "styled-components";

export const MyDiv = styled.div`
  background-color: ${({ theme }) => theme?.colors};
  color: ${({ theme }) => theme?.colors.red};
`;
