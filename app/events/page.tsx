"use client";

import { useRouter } from "next/navigation";
import {
  GrayBackground,
  WhitePageBox,
  WhiteBox,
  CenteredRow,
} from "../styles/components/containers/flex";
import { DisplayText, LabelText, Logo } from "../styles/components/typography";
import { useEffect, useState } from "react";
import { getUserEvents } from "../requests/events";
import { Skeleton } from "@chakra-ui/react";

export default () => {
  const router = useRouter();
  const [userEvents, setUserEvents] = useState<
    [{ eventName: string; eventDate: string; _id: number }] | null
  >(null);

  useEffect(() => {
    if (!userEvents) {
      getUserEvents(setUserEvents);
    }
  }, [userEvents]);

  return (
    <>
      <GrayBackground>
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
      </GrayBackground>
    </>
  );
};
