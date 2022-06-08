import { useState } from "react";
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
  Title,
  Progress,
  Container,
  Grid,
  Button,
} from "@mantine/core";
import styled from "styled-components";

export default function Dashboard() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  const AppContainer = styled.div``;
  const TopContainer = styled.div``;
  const CreditContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-inline: 10px;
    margin-bottom: 20px;
    &:hover {
      border: 1px solid lightgrey;
      border-radius: 20px;
      cursor: pointer;
    }
  `;
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
  const SubTitle = styled.h3`
    font-weight: lighter;
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
              <Title>esacco</Title>
              <Text>hi, George</Text>
            </Paper>
          </Navbar.Section>
          <Navbar.Section>
            <Paper shadow="md" radius="xs" p="lg">
              <Text>home</Text>
              <Text>loans</Text>
              <Text>savings</Text>
              <Text>transactions</Text>
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
              <Grid grow>
                <Grid.Col span={4}>1</Grid.Col>
                <Grid.Col span={4}>2</Grid.Col>
                <Grid.Col span={4}>3</Grid.Col>
                <Grid.Col span={4}>4</Grid.Col>
              </Grid>
            </Container>
            <Container>
              <SubTitle>sacco statistics</SubTitle>
            </Container>
            <Container>
              <SideApp>
                <SubTitle>Total Savings</SubTitle>
                <Text>397927323</Text>
              </SideApp>
              <SideApp>
                <SubTitle>Total Loans</SubTitle>
                <Text>992927320320</Text>
              </SideApp>
              <SideApp>
                <SubTitle>Total Members</SubTitle>
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

            <Text>Dashboard</Text>
          </div>
        </Header>
      }
    >
      <AppContainer>
        <TopContainer>
          <UpContainer>
            <Text>Savings: 927392</Text>
            <Button variant="outline" color="teal">
              View All
            </Button>
          </UpContainer>
          <UpContainer>
            {abc.map((bc) => (
              <Paper key={bc}>
                <Text>default</Text>
                <Text>7070</Text>
                <Progress color="cyan" radius="lg" value={50} />
              </Paper>
            ))}
          </UpContainer>
        </TopContainer>
        <TopContainer>
          <UpContainer>
            <Text>Loans: 927392</Text>
            <Button variant="outline" color="teal">
              View All
            </Button>
          </UpContainer>
          <UpContainer>
            {abc.map((bc) => (
              <Paper key={bc}>
                <Text>default</Text>
                <Text>7070</Text>
                <Progress color="cyan" radius="lg" value={50} />
              </Paper>
            ))}
          </UpContainer>
          <UpContainer>
            <Text>transactions</Text>
            <Button variant="outline" color="teal">
              view all
            </Button>
          </UpContainer>
          {abc.map((bc) => (
            <CreditContainer key={bc}>
              <Text>Deposit</Text>
              <Text>In</Text>
              <Text>4500</Text>
              <Text>23:34:01/20/2022</Text>
            </CreditContainer>
          ))}
        </TopContainer>
      </AppContainer>
    </AppShell>
  );
}
