import React, { useState } from "react";
import { LightningBoltIcon } from "@radix-ui/react-icons";
import {
  AppShell,
  Navbar,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Stack,
  Paper,
  Center,
  Group,
  Container,
  Image,
  List,
  Button,
  Title,
} from "@mantine/core";
import { NextLink } from "@mantine/next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faLock,
  faPerson,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Section, { Profile } from "../components/Section";
import LoggedOut from "../layouts/LoggedOut";
import Landing from "../components/Landing";

const Icon = styled.div`
  font-size: x-large;
  color: #f85873;
`;
export default function Index() {
  const theme = useMantineTheme();

  const myText: Profile = {
    text: "login",
    followUp: "Get Started",
  };

  return (
    <LoggedOut>
      <Landing />
    </LoggedOut>
  );
}
