"use client";

import { useState } from "react";
import Image from "next/image";
import CopyIcon from "../styles/icons/copy-icon.svg";

type SwatchType = {
  swatch: string;
  secondary: string;
  hex: string;
  filter: string;
}[];

type StateSwatchType = {
  offWhite: string;
  taupe: string;
  mauve: string;
  lightPurple: string;
  darkPurple: string;
};

const Swatches = () => {
  const [colorText, setColorText] = useState<StateSwatchType>({
    offWhite: "F2E9E4",
    taupe: "C9ADA7",
    mauve: "9A8C98",
    lightPurple: "4A4E69",
    darkPurple: "22223B",
  });
  const handleSwatchClick = (color: string, swatchColor: string) => {
    setTimeout(() => {
      try {
        navigator.clipboard.writeText(swatchColor);
        setColorText({ ...colorText, [color]: "COPIED!" });
        console.log("swatch copied", colorText);
      } catch (e) {
        console.error(e);
      }
    }, 1000);

    setTimeout(() => {
      setColorText({ ...colorText, [color]: swatchColor });
    }, 15000);
  };
  return (
    <>
      {SWATCHES.map(({ swatch, secondary, hex, filter }, i) => (
        <></>
        // <Swatch
        //   key={i}
        //   swatch={swatch}
        //   secondary={secondary}
        //   onClick={() => handleSwatchClick(swatch, hex)}
        // >
        //   <InnerText secondary={secondary}>
        //     {colorText[swatch as keyof StateSwatchType]}
        //     <Image
        //       alt="Copy Icon"
        //       width={24}
        //       height={24}
        //       src={CopyIcon}
        //       style={{
        //         filter: filter,
        //       }}
        //     />
        //   </InnerText>
        // </Swatch>
      ))}
    </>
  );
};

export default Swatches;

const SWATCHES: SwatchType = [
  {
    swatch: "offWhite",
    secondary: "taupe",
    hex: "#F2E9E4",
    filter:
      "invert(81%) sepia(9%) saturate(605%) hue-rotate(323deg) brightness(88%) contrast(86%);",
  },
  {
    swatch: "taupe",
    secondary: "mauve",
    hex: "#C9ADA7",
    filter:
      "invert(57%) sepia(8%) saturate(384%) hue-rotate(257deg) brightness(98%) contrast(93%);",
  },
  {
    swatch: "mauve",
    secondary: "lightPurple",
    hex: "#9A8C98",
    filter:
      "invert(30%) sepia(19%) saturate(691%) hue-rotate(194deg) brightness(92%) contrast(90%);",
  },
  {
    swatch: "lightPurple",
    secondary: "darkPurple",
    hex: "#4A4E69",
    filter:
      "invert(14%) sepia(24%) saturate(944%) hue-rotate(201deg) brightness(92%) contrast(98%);",
  },
  {
    swatch: "darkPurple",
    secondary: "lightPurple",
    hex: "#22223B",
    filter:
      "invert(30%) sepia(19%) saturate(691%) hue-rotate(194deg) brightness(92%) contrast(90%);",
  },
];

// const InnerText = styled.div<{ secondary: string }>`
//   color: black;
//   display: none;
//   color: ${(props) => props.theme.colors?.[props?.secondary]};
//   font-size: 16px;
//   font-family: "Raleway", sans-serif;
//   font-weight: 800;
//   text-align: center;
//   margin-top: 20px;
// `;

// const Swatch = styled.div<{ swatch: string; secondary: string }>`
//   background-color: ${(props) => props.theme.colors?.[props?.swatch]};
//   height: 75px;
//   width: 75px;
//   border: 1px solid ${(props) => props.theme.colors?.[props?.secondary]};
//   border-radius: 10px;
//   margin: 5px;
//   &:hover ${InnerText} {
//     display: block;
//     transition: all 2s ease-in-out;
//   }
//   &:hover {
//     color: ${(props) => props.theme.colors?.[props?.secondary]};
//     transition: all 2s ease-in-out;
//   }
//   transition: all 2s ease-in-out;
// `;
