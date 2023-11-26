"use client";

import { WhiteBackground } from "./styles/components/containers/flex";
import Footer from "./components/Footer";
import { Logo } from "./styles/components/typography";
import { Providers } from "./providers";
import { Flex } from "@chakra-ui/react";
import Header from "../app/components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Flex flexDir="column">
            <Header />
            {children}
            <Footer />
          </Flex>
        </Providers>
      </body>
    </html>
  );
}
