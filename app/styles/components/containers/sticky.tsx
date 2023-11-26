import { styled, Box } from "@chakra-ui/react";

export const FooterContainer = styled(Box, {
  baseStyle: {
    bg: "#f0f0f0",
    textAlign: "center",
    p: "20px",
    position: "fixed",
    left: 0,
    bottom: 0,
    height: "60px",
    width: "100%",
  },
});

export const Phantom = styled(Box, {
  baseStyle: {
    display: "block",
    padding: "20px",
    height: "60px",
    width: "100%",
  },
});
