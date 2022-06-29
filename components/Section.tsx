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
import { useRouter } from "next/router";

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
  const { user } = useSelector((state: any) => state.user);
  const router = useRouter();
  const handleLogout = () => {
    localStorage.clear();

    router.replace("/");
  };

  return (
    <Sectionn>
      <Navbar.Section>
        <Paper radius="xs" p="lg">
          <Text color="green" size="xl">
            Essaco
          </Text>
          <Text py={3}>Hi {user.firstName}</Text>
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
            <Text style={{ cursor: "pointer" }} onClick={handleLogout}>
              logout
            </Text>
          </Stack>
        </Paper>
      </Navbar.Section>
    </Sectionn>
  );
};

export default Section;
