import { PrimaryButton } from "@/app/styles/components/Buttons";
import { LabelText } from "@/app/styles/components/typography";
import { useEffect, useState } from "react";
import { addVenue, getVenue } from "@/app/requests/venues";
import { styled, Flex } from "@chakra-ui/react";

type VenueType = {
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
};

export default ({ venueId }: { venueId: string }) => {
  const [venue, setVenue] = useState<VenueType | null>(null);

  useEffect(() => {
    if (!venue && venueId) {
      getVenue(setVenue, venueId);
    }
  }, [setVenue, venue, venueId]);

  if (venueId) {
    return <NoVenue />;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <LabelText>Venue</LabelText>
      <div
        style={{
          borderRadius: "10px",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          width: "300px",
          height: "200px",
          maxHeight: "200px",
          marginTop: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <LabelText>{venue?.name}</LabelText>
        <p>{venue?.address}</p>
        <p>
          {venue?.city}, {venue?.state} {venue?.zipCode}
        </p>
      </div>
    </div>
  );
};

const NoVenue = () => {
  const [venue, setVenue] = useState(null);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <LabelText>Venue</LabelText>
      <VenueContainer>
        <LabelText>Oh no!</LabelText>
        <p style={{ textAlign: "center" }}>
          You don't have an event venue yet.
        </p>
        <PrimaryButton onClick={() => addVenue(setVenue)}>
          ADD YOUR VENUE
        </PrimaryButton>
      </VenueContainer>
    </div>
  );
};

export const AddVenueModal = () => {
  return (
    <div
      style={{
        zIndex: 1,
        border: "1px solid red",
        position: "fixed",
        height: "100%",
        width: "100%",
        overflow: "auto",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
      }}
    ></div>
  );
};

const VenueContainer: any = styled(Flex, {
  baseStyle: {
    borderRadius: "10px",
    marginTop: "30px",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    width: "300px",
    height: "200px",
    maxHeight: "200px",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
});
