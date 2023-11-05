import { styled } from "styled-components";

export const StyledInput = styled.input`
  margin: 10px 0px 0px 0px;
  padding: 10px;
  width: 250px;
  height: 35px;
  border: 2px solid lightgrey;
  border-radius: 10px;
  font-family: "Raleway", sans-serif;
  color: #22223b;
  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.taupe};
  }
`;
