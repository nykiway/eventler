"use client";

import { Logo } from "./styles/components/typography";
import StyledComponentsRegistry from "./registry";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import { WhiteBackground } from "./styles/components/containers/flex";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <WhiteBackground>
              {children}
              <Footer />
            </WhiteBackground>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
