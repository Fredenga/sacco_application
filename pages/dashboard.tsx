import { useState } from "react";
import { PlusIcon } from "@radix-ui/react-icons";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Paper,
  Progress,
  Container,
  Button,
  Stack,
  Center,
  Group,
} from "@mantine/core";
import styled from "styled-components";
import { NextLink } from "@mantine/next";
import Section from "../components/Section";
// export const ThisText: Profile = {
//   text: "Profile",
//   followUp: "Log Out",
//   owner: "Hi Satin",
// };

import LoggedIn from "../layouts/LoggedIn";
export default function Dashboard() {
  console.log("hello");
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  const UpContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-inline: 2em;
    padding-block: 20px;
    margin-bottom: 10px;
    &:hover {
      border: 1px solid lightgrey;
      cursor: pointer;
    }
  `;


  const abc = [1, 2, 3];
  return (
   <LoggedIn header={"dashboard"}>
      <Container>
        <Container>
          <UpContainer>
            <Text>Savings: 927392</Text>
            <Button variant="light" color="teal">
              {" "}
              View All
            </Button>
          </UpContainer>
          <UpContainer>
            {abc.map((bc) => (
              <Paper key={bc}>
                <Text>default</Text>
                <Text>7070</Text>
                <Progress label="50%" size="md" color="green" value={50} />
              </Paper>
            ))}
          </UpContainer>
        </Container>
        <Container>
          <UpContainer>
            <Text>Loans: 927392</Text>
            <Button variant="light" color="teal">
              {" "}
              View All
            </Button>
          </UpContainer>
          <UpContainer>
            {abc.map((bc) => (
              <Paper key={bc}>
                <Text>default</Text>
                <Text>7070</Text>
                <Progress label="50%" size="md" color="green" value={50} />
              </Paper>
            ))}
          </UpContainer>
          <UpContainer>
            <Text>transactions</Text>
            <Button variant="light" color="teal">
              {" "}
              view all
            </Button>
          </UpContainer>
          {abc.map((bc) => (
            <Stack key={bc}>
              <Paper shadow="xl" radius="md" p="sm">
                <Group position="apart">
                  <Text>Deposit</Text>
                  <Text>In</Text>
                  <Text>45000</Text>
                  <Text>23:34:01/20/2022</Text>
                </Group>
              </Paper>
            </Stack>
          ))}
        </Container>
      </Container>
      </LoggedIn>
  
  );
}
