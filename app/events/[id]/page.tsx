"use client";

import {
  GridContainer,
  GridDiv1,
  GridDiv2,
  GridDiv3,
  GridDiv4,
} from "@/app/styles/components/containers/grid";
import {
  DisplayText,
  LabelText,
  SubHeader,
} from "@/app/styles/components/typography";
import { SecondaryButton } from "@/app/styles/components/Buttons";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { getEvent } from "@/app/requests/events";

export default () => {
  const params = usePathname().split("/");
  const ID = params[params.length - 1];
  const [event, setEvent] = useState<any>(null);

  useEffect(() => {
    if (!event) {
      getEvent(setEvent, ID);
    }
  }, [event]);

  return (
    <>
      <DisplayText>{event?.[0]?.eventName || ""}</DisplayText>
      <SubHeader>{event?.[0]?.eventDate || ""}</SubHeader>
      <GridContainer>
        <GridDiv1>
          <LabelText>Primary Details</LabelText>
          <SecondaryButton>Add Details</SecondaryButton>
        </GridDiv1>
        <GridDiv2>
          <LabelText>Banner</LabelText>
        </GridDiv2>
        <GridDiv3>
          <LabelText>Vendors</LabelText>
        </GridDiv3>
        <GridDiv4>
          <LabelText>Guests</LabelText>
        </GridDiv4>
      </GridContainer>
    </>
  );
};
