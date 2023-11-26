import { styled, Button } from "@chakra-ui/react";

export const PrimaryButton = styled(Button, {
  baseStyle: {
    color: "blue",
  },
});

export const SecondaryButton = styled(Button, {
  baseStyle: {
    color: "red",
  },
});
// const baseStyle = css`
//   width: 270px;
//   height: 45px;
//   border-radius: 10px;
//   margin-top: 15px;
//   font-weight: 500;
//   font-size: 12px;
//   font-family: "Raleway", sans-serif;
//   letter-spacing: 0.1em;
//   text-transform: uppercase;
//   transition: all 0.2s ease-in-out;
// `;

// export const PrimaryButton = styled.button`
//   border: none;
//   color: white;
//   background: rgb(34, 36, 0);
//   background: linear-gradient(
//     90deg,
//     rgba(121, 9, 86, 1) 0%,
//     rgba(120, 184, 221, 1) 100%
//   );
//   &:hover {
//     transition: all 0.2s ease-in-out;
//   }
//   ${baseStyle}
// `;

// export const SecondaryButton = styled.button`
//   background: radial-gradient(
//         circle at 100% 100%,
//         #ffffff 0,
//         #ffffff 8px,
//         transparent 8px
//       )
//       0% 0%/10px 10px no-repeat,
//     radial-gradient(circle at 0 100%, #ffffff 0, #ffffff 8px, transparent 8px)
//       100% 0%/10px 10px no-repeat,
//     radial-gradient(circle at 100% 0, #ffffff 0, #ffffff 8px, transparent 8px)
//       0% 100%/10px 10px no-repeat,
//     radial-gradient(circle at 0 0, #ffffff 0, #ffffff 8px, transparent 8px) 100%
//       100%/10px 10px no-repeat,
//     linear-gradient(#ffffff, #ffffff) 50% 50% / calc(100% - 4px)
//       calc(100% - 20px) no-repeat,
//     linear-gradient(#ffffff, #ffffff) 50% 50% / calc(100% - 20px)
//       calc(100% - 4px) no-repeat,
//     linear-gradient(90deg, rgba(121, 9, 86, 1) 2%, rgba(120, 184, 221, 1) 71%)
//       50% 0;
//   border-radius: 10px;
//   padding: 14px;
//   box-sizing: border-box;
//   border-radius: 10px;
//   padding: 14px;
//   box-sizing: border-box;
//   border: 0px solid transparent;
//   color: gba(121, 9, 86, 1);
//   &:hover {
//     background: linear-gradient(
//       90deg,
//       rgba(121, 9, 86, 1) 0%,
//       rgba(120, 184, 221, 1) 100%
//     );
//     color: white;
//     transition: all 0.2s ease-in-out;
//   }
//   ${baseStyle};
// `;
