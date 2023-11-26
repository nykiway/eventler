import { useEffect } from "react";
import { Flex, Box, styled, useBoolean } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Logo } from "../styles/components/typography";
import Link from "next/link";

const Header = () => {
  const [showMenu, setShowMenu] = useBoolean();
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      borderBottom="2px solid #f0f0f0"
    >
      <Logo>eventler.</Logo>
      <HamburgerIcon mr={10} boxSize="24px" onClick={() => setShowMenu.on()} />
      {showMenu && <HeaderMenu showMenu={showMenu} setShowMenu={setShowMenu} />}
    </Flex>
  );
};

const HeaderMenu = ({
  setShowMenu,
  showMenu,
}: {
  setShowMenu: { on: () => void; off: () => void };
  showMenu: boolean;
}) => {
  return (
    <Box
      height="100%"
      width={showMenu ? "250px" : 0}
      position="fixed"
      zIndex="1"
      top="0"
      right="0"
      bg="white"
      overflowX="hidden"
      pt="30px"
      px={5}
      transition="0.5s"
      boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
    >
      <CloseIcon
        onClick={() => setShowMenu.off()}
        position="fixed"
        mt={0}
        right="15px"
      />
      <Flex flexDir="column">
        <Link href="/" onClick={() => setShowMenu.off()}>
          Home
        </Link>
        <Link href="/events" onClick={() => setShowMenu.off()}>
          {" "}
          Events
        </Link>
        <Link href="/logout" onClick={() => setShowMenu.off()}>
          Logout
        </Link>
      </Flex>
    </Box>
  );
};

export default Header;
