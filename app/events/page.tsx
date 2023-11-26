"use client";

import { useRouter } from "next/navigation";
import {
  WhitePageBox,
  WhiteBox,
  CenteredRow,
} from "../styles/components/containers/flex";
import { DisplayText, LabelText, Logo } from "../styles/components/typography";
import { useEffect, useState } from "react";
import { getUserEvents } from "../requests/events";
import {
  Skeleton,
  Flex,
  useDisclosure,
  Button,
  styled,
  Text,
} from "@chakra-ui/react";
import AddNewEventModal from "./AddNewEventModal";

export default () => {
  const router = useRouter();
  const [userEvents, setUserEvents] = useState<
    [{ eventName: string; eventDate: string; _id: number }] | null
  >(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // useEffect(() => {
  //   if (!userEvents) {
  //     getUserEvents(setUserEvents);
  //   }
  // }, [userEvents]);

  if (!userEvents) {
    return <AddNewEvent isOpen={isOpen} onOpen={onOpen} onClose={onClose} />;
  }

  return (
    <>
      <Flex
        bg="#f0f0f0"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        pb={20}
        pt={10}
      >
        <DisplayText>Select an Event</DisplayText>
        <CenteredRow>
          {!userEvents ? (
            <div style={{ marginTop: "50px" }}>
              <Skeleton height={150} width={250} />
              <Skeleton height={150} width={250} />
              <Skeleton height={150} width={250} />
            </div>
          ) : (
            <>
              {userEvents?.map(({ _id, eventName, eventDate }) => (
                <WhitePageBox
                  key={_id}
                  onClick={() => router.push(`/events/${_id}`)}
                >
                  <DisplayText>{eventName || ""}</DisplayText>
                  <LabelText>{eventDate || ""}</LabelText>
                </WhitePageBox>
              ))}
            </>
          )}
        </CenteredRow>
        <PrimaryButton onClick={() => onOpen()}>Add New Event</PrimaryButton>
      </Flex>
      <AddNewEventModal onOpen={onOpen} onClose={onClose} isOpen={isOpen} />
    </>
  );
};

const AddNewEvent = ({
  onOpen,
  onClose,
  isOpen,
}: {
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
}) => {
  return (
    <>
      <Flex
        bg="#f0f0f0"
        alignItems="center"
        justifyContent="center"
        flexDir="column"
      >
        <Text>You have no events yet!</Text>
        <PrimaryButton onClick={() => onOpen()}>
          Add your first event
        </PrimaryButton>
      </Flex>
      <AddNewEventModal onOpen={onOpen} onClose={onClose} isOpen={isOpen} />
    </>
  );
};

const PrimaryButton = styled(Button, {
  baseStyle: {
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    bg: "black",
    color: "white",
    my: 5,
    width: "180px",
  },
});