import { styled, Box, Flex } from "@chakra-ui/react";

export const CenteredRow = styled(Flex, {
  baseStyle: {
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
  },
});

export const CenteredColumn = styled(Flex, {
  baseStyle: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
});

export const GrayRowContainer = styled(Flex, {
  baseStyle: {
    bg: "#f0f0f0",
    padding: "20px 0px 60px 0px",
    borderRadius: "10px",
    margin: "0 auto",
    mt: "30px",
    maxWidth: "700px",
  },
});

export const GrayBackground = styled(Flex, {
  baseStyle: {
    bg: "#f0f0f0",
    pb: "50px",
    width: "100%",
  },
});

export const WhiteBackground = styled(Flex, {
  baseStyle: {
    bg: "white",
  },
});

export const WhiteBox = styled(Flex, {
  baseStyle: {
    bg: "white",
    p: "10px",
    mb: "30px",
  },
});

export const WhitePageBox = styled(Flex, {
  baseStyle: {
    backgroundColor: "white",
    width: "min-content",
    minHeight: "130px",
    minWidth: "200px",
    padding: "25px 20px 20px 20px",
    borderRadius: "10px",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    marginTop: "50px",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});
