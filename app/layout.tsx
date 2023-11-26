"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { WhiteBackground } from "./styles/components/containers/flex";
import Footer from "./components/Footer";
import { Logo } from "./styles/components/typography";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <WhiteBackground>
            <Logo>eventler.</Logo>
            {children}
            <Footer />
          </WhiteBackground>
        </Providers>
      </body>
    </html>
  );
}
