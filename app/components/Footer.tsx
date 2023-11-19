import {
  Phantom,
  FooterContainer,
} from "../styles/components/containers/sticky";

const Footer = () => {
  return (
    <>
      <Phantom>
        <FooterContainer>
          <p
            style={{
              color: "darkGrey",
              letterSpacing: "0.08em",
              fontWeight: 100,
              textDecoration: "none",
              fontSize: "10px",
            }}
          >
            App created by Nyki. All Rights Reserved
          </p>
        </FooterContainer>
      </Phantom>
    </>
  );
};

export default Footer;
