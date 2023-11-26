import { styled, Input } from "@chakra-ui/react";

export const StyledInput = styled(Input, {
  baseStyle: {
    margin: "10px 0px 0px 0px",
    padding: "10px",
    width: "250px",
    height: "35px",
    border: "1px solid lightgrey",
    borderRadius: "10px",
    fontFamily: '"Raleway", sans-serif',
    color: "#22223b",
    _focus: {
      outline: "none",
      border: "2px solid black",
    },
  },
});
