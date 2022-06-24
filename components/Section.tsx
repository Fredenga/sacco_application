import {
  Button,
  Center,
  Modal,
  Navbar,
  Paper,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { NextLink } from "@mantine/next";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import userService from "../src/graphql/services/userService";
import { loginUser } from "../state/userState";
import { Outcome } from "./Notifications";
// export interface Profile {
//   text: string;
//   followUp: string;
//   owner?: string;
// }

const Sectionn = styled.div`
  width: 350px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: larger;
`;


const Section: React.FC = () => {
  const user = useSelector((state: any) => state.user);
  
=======

const Section: React.FC = () => {
  const user = useSelector((state: any) => state.user);
  const [opened, setOpened] = useState<boolean>(false);
  const [email, setemail] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const dispatch = useDispatch();

  const [loading, SetLoading] = useState<boolean>(false);
  const handleClick = () => {};
  const handleSubmit = async () => {
    SetLoading(true);
    try {
      const { login } = await userService.login({ email, password });
      login && localStorage.setItem("token", login.accessToken);
      console.log(login);
      dispatch(loginUser(login));
      Outcome(
        "Login Successfull",
        `Welcome back, ${login.user.firstName}!`,
        "green"
      );
    } catch (error) {
      Outcome("Login Not Successfull", "Please try again", "red");

      console.log({
        message: "failed",
        error,
      });
    }
    SetLoading(false);
    setOpened(false);
  };

  return (
    <Sectionn>
      <Navbar.Section>
        <Paper radius="xs" p="lg">
          <Text color="cyan" size="xl">
            Essaco
          </Text>
          <Text>{user.firstName}</Text>
        </Paper>
      </Navbar.Section>
      <Navbar.Section>
        <Paper radius="xs" p="xl">
          <Stack>
            <NextLink href="/dashboard">dashboard</NextLink>

            <NextLink href="/loans">loans</NextLink>
            <NextLink href="/savings">savings</NextLink>
            <NextLink href="/transactions">transactions</NextLink>
          </Stack>
        </Paper>
      </Navbar.Section>
      <Navbar.Section>
        <Paper radius="xs" p="xl">
          <Stack>
            <NextLink href="/profile">profile</NextLink>

            <span>logout</span>
          </Stack>
        </Paper>
      </Navbar.Section>
      {/* <Navbar.Section>
        <Paper radius="xs" p="xl">
          <Text onClick={handleClick} mb={6}>
            {text}
          </Text>
          <Text>{followUp}</Text>
        </Paper>
      </Navbar.Section> */}

      {/* <Modal
        opened={opened}
        centered
        size="lg"
        onClose={() => {
          setOpened(false);
          setemail("");
          setpassword("");
        }}
        title="Login"
      >
        <Stack>
          <TextInput
            label="Email"
            placeholder="Enter your email address"
            onChange={(e) => setemail(e.target.value)}
            required
          />
          <TextInput
            label="Password"
            placeholder="Enter your password"
            onChange={(e) => setpassword(e.target.value)}
            required
          />
          <Center>
            <Button
              onClick={handleSubmit}
              variant="light"
              color="green"
              loading={loading}
            >
              Login
            </Button>
          </Center>
        </Stack>
      </Modal> */}
    </Sectionn>
  );
};

export default Section;
