"use client";
import { LabelText } from "@/app/styles/components/typography";
import { usePathname } from "next/navigation";
import CheckboxIcon from "../../styles/icons/checkbox.svg";
import Image from "next/image";

export default ({ event }: any) => {
  const params = usePathname().split("/");
  const ID = params[params.length - 1];

  const calculateRSVPdYes = () =>
    event?.guests.filter((guest: { rsvp: boolean }) => guest?.rsvp === true)
      ?.length;

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <LabelText>Guests</LabelText>
      <div
        style={{
          borderRadius: "10px",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          width: "300px",
          overflowY: "scroll",
          maxHeight: "200px",
          marginTop: "30px",
        }}
      >
        <p
          style={{
            fontSize: "24px",
            fontFamily: '"Raleway", sans-serif',
            fontWeight: 700,
            color: "pink",
            letterSpacing: "0.03em",
            textAlign: "center",
          }}
        >
          {calculateRSVPdYes()} /{event?.guestCount}
        </p>
        <div style={{ width: "100%" }}>
          {event?.guests?.map((guest: any, i: any) => (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: i % 2 === 0 ? "#F6F6F6" : "transparent",
                padding: "0px 20px 0px 20px",
                borderRadius: i === event?.guestCount - 1 ? "15px" : "0px",
              }}
            >
              <p>
                {guest?.firstName} {guest?.lastName}
              </p>
              <p>
                {guest?.rsvp ? (
                  <Image
                    alt={`checkbox-${i}`}
                    width={24}
                    height={24}
                    src={CheckboxIcon}
                  />
                ) : (
                  <div
                    style={{
                      border: "2px solid black",
                      height: "17px",
                      width: "17px",
                      borderRadius: "50%",
                      marginRight: "2px",
                    }}
                  />
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
