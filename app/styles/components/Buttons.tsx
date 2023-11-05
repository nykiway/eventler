import { styled, css } from "styled-components";

const baseStyle = css`
  width: 270px;
  height: 45px;
  border-radius: 10px;
  margin-top: 15px;
  font-weight: 700;
  font-size: 16px;
  font-family: "Raleway", sans-serif;
`;

export const PrimaryButton = styled.button`
  background-color: ${({ theme }) => theme.colors.taupe};
  border: none;
  color: white;
  ${baseStyle}
`;

export const SecondaryButton = styled.button`
  background-color: white;
  color: ${({ theme }) => theme.colors.taupe};
  border: 2px solid ${({ theme }) => theme.colors.taupe};
  ${baseStyle}
`;
