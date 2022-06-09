import { useState } from "react";
import { PlusIcon, TokensIcon } from "@radix-ui/react-icons";
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
export default function Dashboard() {
  console.log("hello world");
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
  const SideApp = styled.div`
    &:hover {
      border-block: 1px solid lightgray;
      margin-bottom: 20px;
    }
  `;

  const abc = [1, 2, 3];
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Navbar.Section>
            <Paper shadow="md" radius="xs" p="lg">
              <Text color="green" size="xl">
                Essaco
              </Text>
              <Text>hi, George</Text>
            </Paper>
          </Navbar.Section>
          <Navbar.Section>
            <Paper shadow="md" radius="xs" p="lg">
              <Stack>
                <NextLink href="/home">home</NextLink>
                <NextLink href="/loans">loans</NextLink>
                <NextLink href="/savings">savings</NextLink>
                <NextLink href="/transactions">transactions</NextLink>
              </Stack>
            </Paper>
          </Navbar.Section>
          <Navbar.Section>
            <Paper shadow="md" radius="xs" p="lg">
              <Text>profile</Text>
              <Text>logout</Text>
            </Paper>
          </Navbar.Section>
        </Navbar>
      }
      aside={
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            <Container>
              <Text mb={6}>Quick Actions</Text>
              <Stack>
                <Button color="green" variant="light" leftIcon={<PlusIcon />}>
                  Top Up
                </Button>
                <Button color="green" variant="light" leftIcon={<PlusIcon />}>
                  Add Payment
                </Button>
                <Button color="green" variant="light" leftIcon={<PlusIcon />}>
                  Add Savings
                </Button>
                <Button color="green" variant="light" leftIcon={<PlusIcon />}>
                  Apply Loan
                </Button>
              </Stack>
            </Container>
            <Container>
              <Text weight="lighter">sacco statistics</Text>
            </Container>
            <Container>
              <SideApp>
                <Text weight="lighter">Total Savings</Text>
                <Text>397927323</Text>
              </SideApp>
              <SideApp>
                <Text weight="lighter">Total Loans</Text>
                <Text>992927320320</Text>
              </SideApp>
              <SideApp>
                <Text weight="lighter">Total Members</Text>
                <Text>79</Text>
              </SideApp>
            </Container>
          </Aside>
        </MediaQuery>
      }
      footer={
        <Footer height={60} p="md">
          Application footer
        </Footer>
      }
      header={
        <Header height={70} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <Center>
              <Text>Dashboard</Text>
            </Center>
          </div>
        </Header>
      }
    >
      <Container>
        <Container>
          <UpContainer>
            <Text>Savings: 927392</Text>
            <Button
              variant="gradient"
              gradient={{ from: "teal", to: "lime", deg: 105 }}
            >
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
            <Button
              variant="gradient"
              gradient={{ from: "teal", to: "lime", deg: 105 }}
            >
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
            <Button
              variant="gradient"
              gradient={{ from: "teal", to: "lime", deg: 105 }}
            >
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
    </AppShell>
  );
}
