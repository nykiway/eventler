import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      bg="#f0f0f0"
      minHeight="55vh"
      alignItems="center"
      justifyContent="flex-start"
      flexDir="column"
      pt={5}
    >
      <Flex>See Your Events</Flex>
    </Flex>
  );
}
