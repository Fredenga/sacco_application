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
import { useDispatch } from "react-redux";
import userService from "../src/graphql/services/userService";
import { loginUser } from "../state/userState";
import { Outcome } from "./Notifications";
export interface Profile {
  text: string;
  followUp: string;
  owner?: string;
}

const Section: React.FC<Profile> = ({ followUp, text, owner }) => {
  const [opened, setOpened] = useState<boolean>(false);
  const [email, setemail] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const dispatch = useDispatch();

  const [loading, SetLoading] = useState<boolean>(false);
  const handleClick = () => {
    if (text === "login") {
      setOpened(true);
    }
  };
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
    <div>
      <Navbar.Section>
        <Paper radius="xs" p="lg">
          <Text color="cyan" size="xl">
            Essaco
          </Text>
          <Text>{owner}</Text>
        </Paper>
      </Navbar.Section>
      <Navbar.Section>
        <Paper radius="xs" p="xl">
          <Stack>
            <NextLink href="/">Home</NextLink>
            <NextLink href="/About">About</NextLink>
            <NextLink href="/products">Products</NextLink>
            <NextLink href="/loans">loans</NextLink>
            <NextLink href="/savings">savings</NextLink>
            <NextLink href="/transactions">transactions</NextLink>
          </Stack>
        </Paper>
      </Navbar.Section>
      <Navbar.Section>
        <Paper radius="xs" p="xl">
          <Text onClick={handleClick} mb={6}>
            {text}
          </Text>
          <Text>{followUp}</Text>
        </Paper>
      </Navbar.Section>

      <Modal
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
      </Modal>
    </div>
  );
};

export default Section;
