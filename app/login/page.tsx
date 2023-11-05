"use client";

import { FC, useState } from "react";
import { GrayRowContainer } from "../styles/components/containers/flex";
import { DisplayText } from "../styles/components/typography";
import { StyledInput } from "../styles/components/Input";
import { CenteredColumn } from "../styles/components/containers/flex";
import { PrimaryButton, SecondaryButton } from "../styles/components/Buttons";

type UserType = {
  email: string;
  password: string;
};

type LoginFormProps = {
  processForm: (user: UserType) => void;
};

const Login: FC<LoginFormProps> = ({ processForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    processForm({ email, password });
  };

  return (
    <GrayRowContainer>
      <DisplayText>Log In</DisplayText>
      <CenteredColumn>
        <StyledInput
          type="text"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <StyledInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <PrimaryButton onClick={(e) => handleSubmit(e)}>Log in</PrimaryButton>
        <SecondaryButton>Sign Up</SecondaryButton>
      </CenteredColumn>
    </GrayRowContainer>
  );
};

export default Login;
