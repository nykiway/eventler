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

export const DisplayText = styled.p<{ margin?: number }>`
  text-align: center;
  font-family: "Raleway", sans-serif;
  font-weight: 100;
  color: #22223b;
  font-size: 22px;
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
  text-align: center;
`;

export const SubHeader = styled.h2`
  font-family: "Merriweather", serif;
  color: #22223b;
  font-size: 18px;
  line-height: 20px;
  margin: 3px;
  letter-spacing: 0.03em;
  text-align: center;
  font-weight: 500;
  margin-top: 20px;
`;

export const Logo = styled.h1`
  font-family: "Merriweather", serif;
  color: #22223b;
  font-size: 36px;
  letter-spacing: -0.05em;
  font-weight: 700;
  text-transform: lowercase;
  text-align: center;
  font-style: italic;
  margin: 0;
`;
