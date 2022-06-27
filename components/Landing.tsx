import {
  faCreditCard,
  faLock,
  faPerson,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { Button, Center, List, Text, Title } from "@mantine/core";

import React from "react";

import styled from "styled-components";

const Icon = styled.div`
  font-size: x-large;
  color: #46af3c;
`;

const Stack = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
  display: flex;
  justify-content: space-around;
`;

const Image = styled.img`
  max-width: 80%;
  aspect-ratio: contain;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  padding: 50px;
`;
const Paper = styled.div`
  font-size: 20px;

  margin: 20px;
  padding: 10px;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  height: 250px;
  box-shadow: 0px 0px 5px 2px lightgray;
  border-radius: 10px;
`;

function Landing() {
  const router = useRouter();
  const handleRegister = () => {
    return router.push("/register");
  };

  const handleProducts = () => {
    return router.push("/product");
  };
  return (
    <div style={{ marginBottom: "50px" }}>
      <Stack>
        <Group>
          <Title order={1}>Join the number one growing online Sacco</Title>
          <Text size="xl">
            Get instant loans with unbeatable interest rate savings accounts
            with great dividends
          </Text>
          <Button
            my={10}
            size="lg"
            onClick={handleRegister}
            color={"green"}
            variant="outline"
          >
            Get Started
          </Button>
        </Group>
        <Group>
          <Image
            src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWNjb3VudHxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="lclc"
          />
        </Group>
      </Stack>
      <Title order={1} align="center" my={20}>
        The best savings and lending experiences are built with essaco
      </Title>

      <Stack>
        <Group>
          <Image
            src="https://images.unsplash.com/photo-1579621970343-21c491b3f363?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bW9uZXl8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="lclc"
          />{" "}
        </Group>
        <Group>
          <Title order={1} my={10}>
            Benefits for members
          </Title>
          <Text size="lg" my={10}>
            Get clarity on your financial status and understand your credit that
            your credit union is growing your wealth
          </Text>
          <List>
            <List.Item> Join Online</List.Item>
            <List.Item> Realtime Engagement</List.Item>
            <List.Item> Instant Loans</List.Item>
            <List.Item> Higher Dividends</List.Item>
            <List.Item> Low Interest Rates</List.Item>
          </List>
          <Button
            size="lg"
            my={10}
            onClick={handleProducts}
            color={"green"}
            variant="outline"
          >
            learn more
          </Button>
        </Group>
      </Stack>

      <Title align="center" order={1} my={10}>
        Why Essaco?
      </Title>

      <Center p={20}>
        <Paper>
          <Icon>
            <FontAwesomeIcon icon={faPerson} />
          </Icon>
          <Text p={10} size="xl">
            Online member signup
          </Text>
          <Text>
            Get more members, faster. Future members can register from wherever
            they are, in minutes, compliantly. No paperwork required.
          </Text>
        </Paper>
        <Paper>
          <Icon>
            <FontAwesomeIcon icon={faPhone} />
          </Icon>
          <Text p={10} size="xl">
            Consistent Human Support
          </Text>
          <Text>
            Free and reliable support when you need it. Rely on Essaco support
            for your peace of mind.
          </Text>
        </Paper>
        <Paper>
          <Icon>
            <FontAwesomeIcon icon={faLock} />
          </Icon>
          <Text p={10} size="xl">
            Military-grade security
          </Text>
          <Text>
            Get more members, faster. Future members can register from wherever
            they are, in minutes, compliantly. No paperwork required.
          </Text>
        </Paper>
        <Paper>
          <Icon>
            <FontAwesomeIcon icon={faCreditCard} />
          </Icon>
          <Text p={10} size="xl">
            Pay as you go
          </Text>
          <Text>
            Spend less upfront and less over time. Save money to deliver more
            dividends to your members.
          </Text>
        </Paper>
      </Center>
    </div>
  );
}

export default Landing;
