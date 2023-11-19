"use client";

import { FC, useEffect, useState } from "react";
import {
  GrayBackground,
  WhitePageBox,
} from "../styles/components/containers/flex";
import { DisplayText, Logo } from "../styles/components/typography";
import { StyledInput } from "../styles/components/Input";
import { CenteredColumn } from "../styles/components/containers/flex";
import { PrimaryButton, SecondaryButton } from "../styles/components/Buttons";
import { getUsers } from "../requests/user";

type UserType = {
  email: string;
  password: string;
};

type LoginFormProps = {
  processForm: (user: UserType) => void;
};

const Login: FC<LoginFormProps> = ({ processForm, ...props }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    processForm({ email, password });
  };

  useEffect(() => {
    if (!user) {
      getUsers(setUser);
    }
  }, [user, getUsers]);

  console.log(user);

  return (
    <GrayBackground>
      <WhitePageBox>
        <Logo>eventler.</Logo>
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
      </WhitePageBox>
    </GrayBackground>
  );
};

export default Login;

// async function getData() {
//   try {
//     const resp = await fetch("http://localhost:3000/api/users/", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     return { props: { users: JSON.parse(JSON.stringify(resp)) } };
//   } catch (e) {
//     console.error(e);
//   }
// }