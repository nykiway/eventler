import { styled } from "styled-components";

export const LabelText = styled.h3<{ margin?: number }>`
  font-family: "Raleway", sans-serif;
  text-align: center;
  letter-spacing: 0.1em;
  font-weight: 500;
  font-size: 14px;
  color: #22223b;
  text-transform: uppercase;
  margin-bottom: ${(props) => props.margin || 0}px;
`;

export const DisplayText = styled.h1<{ margin?: number }>`
  text-align: center;
  font-family: "Merriweather", serif;
  font-weight: 200;
  color: #22223b;
  font-size: 28px;
  margin: ${(props) => props.margin || 0}px;
`;

export const Raleway = styled.p`
  font-family: "Raleway", sans-serif;
  color: #22223b;
  font-size: 16px;
  line-height: 18px;
  margin: 3px;
  letter-spacing: 0.03em;
`;

export const Merriweather = styled.p`
  font-family: "Merriweather", serif;
  color: #22223b;
  font-size: 16px;
  line-height: 18px;
  margin: 3px;
  letter-spacing: 0.03em;
`;
