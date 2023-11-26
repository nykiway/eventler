"use client";

import {
  DisplayText,
  LabelText,
  SubHeader,
} from "@/app/styles/components/typography";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { getEvent } from "@/app/requests/events";
import CheckboxIcon from "../../styles/icons/checkbox.svg";
import Image from "next/image";
import GuestList from "./GuestList";
import Venue, { AddVenueModal } from "./Venue";

export default () => {
  const params = usePathname().split("/");
  const ID = params[params.length - 1];
  const [event, setEvent] = useState<any>(null);

  useEffect(() => {
    if (!event) {
      getEvent(setEvent, ID);
    }
  }, [event]);

  const calculateRSVPdYes = () =>
    event?.guests.filter((guest: { rsvp: boolean }) => guest?.rsvp === true)
      ?.length;

  return (
    <>
      <DisplayText>{event?.eventName || ""}</DisplayText>
      <SubHeader>{event?.eventDate || ""}</SubHeader>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "30px",
          flexDirection: "row",
          gap: "30px",
        }}
      >
        <GuestList event={event} />
        <Venue venueId={event?.venue_id} />
      </div>
    </>
  );
};
