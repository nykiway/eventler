import { styled, Text } from "@chakra-ui/react";

export const LabelText = styled(Text, {
  baseStyle: {
    fontFamily: '"Raleway", sans-serif',
    textAlign: "center",
    letterSpacing: "0.1em",
    fontWeight: 500,
    fontSize: "14px",
    color: "#22223b",
    textTransform: "uppercase",
  },
});

export const DisplayText = styled(Text, {
  baseStyle: {
    textAlign: "center",
    fontFamily: '"Raleway", sans-serif',
    fontWeight: 100,
    color: "#22223b",
    fontSize: "22px",
  },
});

export const Raleway = styled(Text, {
  baseStyle: {
    fontFamily: '"Raleway", sans-serif',
    color: "#22223b",
    fontSize: "16px",
    lineHeight: "18px",
    margin: "3px",
    letterSpacing: "0.03em",
  },
});

export const Merriweather = styled(Text, {
  baseStyle: {
    fontFamily: '"Merriweather", serif',
    color: "#22223b",
    fontSize: "16px",
    lineHeight: "18px",
    margin: "3px",
    letterSpacing: "0.03em",
    textAlign: "center",
  },
});

export const SubHeader = styled(Text, {
  baseStyle: {
    fontFamily: '"Merriweather", serif',
    color: "#22223b",
    fontSize: "18px",
    lineHeight: "20px",
    margin: "3px",
    letterSpacing: "0.03em",
    textAlign: "center",
    fontWeight: 500,
    mt: "20px",
  },
});

export const Logo = styled(Text, {
  baseStyle: {
    fontFamily: '"Merriweather", serif',
    color: "#22223b",
    fontSize: "36px",
    letterSpacing: "-0.05em",
    fontWeight: "700",
    textTransform: "lowercase",
    textAlign: "center",
    fontStyle: "italic",
    margin: 0,
    marginBottom: "15px",
  },
});
