import { Navbar, Paper, Stack, Text } from "@mantine/core";
import { NextLink } from "@mantine/next";
import React from "react";
export interface Profile {
  text: string;
  followUp: string;
  owner?: string;
}

const Section: React.FC<Profile> = ({ followUp, text, owner }) => {
  return (
    <div>
      <Navbar.Section>
        <Paper shadow="md" radius="xs" p="lg">
          <Text color="cyan" size="xl">
            Essaco
          </Text>
          <Text>{owner}</Text>
        </Paper>
      </Navbar.Section>
      <Navbar.Section>
        <Paper shadow="md" radius="xs" p="xl">
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
        <Paper shadow="md" radius="xs" p="xl">
          <Text mb={6}>{text}</Text>
          <Text>{followUp}</Text>
        </Paper>
      </Navbar.Section>
    </div>
  );
};

export default Section;
