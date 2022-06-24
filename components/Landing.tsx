import {
  faCreditCard,
  faLock,
  faPerson,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Center,
  Group,
  Image,
  List,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";

import React from "react";

import styled from "styled-components";

const Icon = styled.div`
  font-size: x-large;
  color: #f85873;
`;

function Landing() {
  return (
    <div>
      <Stack>
        <Title align="center">Essaco</Title>
        <Text size="xl" align="center">
          Join the number one growing online Sacco
        </Text>
        <Group position="center">
          <Stack>
            <Text>
              Get instant loans with unbeatable interest rate savings accounts
              with great dividends
            </Text>
            <Text>Take advantage of our incredible features</Text>
            <Text>
              Achieve your digitization strategy and easily go digital.
            </Text>
            <List>
              <List.Item> Efficiency</List.Item>
              <List.Item> Speed</List.Item>
              <List.Item> Accuracy</List.Item>
              <List.Item> Compliance</List.Item>
              <List.Item> Security</List.Item>
            </List>
          </Stack>

          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpHSo9kJ_iBIp4L4mtA6cZ6ab7opXhEQWiSA&usqp=CAU"
            alt="lclc"
          />
        </Group>
        <Text size="xl" align="center">
          The best savings and lending experiences are built with essaco
        </Text>
        <Group position="center">
          <Image
            src="data:image/jpeg;base64,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"
            alt="lclc"
          />
          <Stack>
            <Text>Benefits for members</Text>
            <Text>
              Get clarity on your financial status and understand your credit
              that your credit union is growing your wealth
            </Text>
            <List>
              <List.Item> Join Online</List.Item>
              <List.Item> Realtime Engagement</List.Item>
              <List.Item> Instant Loans</List.Item>
              <List.Item> Higher Dividends</List.Item>
              <List.Item> Low Interest Rates</List.Item>
            </List>
          </Stack>
        </Group>
        <Button color="pink" variant="light">
          Learn More
        </Button>
        <Text align="center" size="xl">
          Why Essaco?
        </Text>
        <Center>
          <Paper p={10} shadow="xl" mx={3}>
            <Icon>
              <FontAwesomeIcon icon={faPerson} />
            </Icon>
            <Text>Online member signup</Text>
            <Text>
              Get more members, faster. Future members can register from
              wherever they are, in minutes, compliantly. No paperwork required.
            </Text>
          </Paper>
          <Paper p={10} shadow="xl" mx={3}>
            <Icon>
              <FontAwesomeIcon icon={faPhone} />
            </Icon>
            <Text>Consistent Human Support</Text>
            <Text>
              Free and reliable support when you need it. Rely on Essaco support
              for your peace of mind.
            </Text>
          </Paper>
          <Paper p={10} shadow="xl" mx={3}>
            <Icon>
              <FontAwesomeIcon icon={faLock} />
            </Icon>
            <Text>Military-grade security</Text>
            <Text>
              Get more members, faster. Future members can register from
              wherever they are, in minutes, compliantly. No paperwork required.
            </Text>
          </Paper>
          <Paper p={10} shadow="xl" mx={3}>
            <Icon>
              <FontAwesomeIcon icon={faCreditCard} />
            </Icon>
            <Text>Pay as you go</Text>
            <Text>
              Spend less upfront and less over time. Save money to deliver more
              dividends to your members.
            </Text>
          </Paper>
        </Center>
        <Text align="center" size="xl">
          Our Partners
        </Text>
        <Paper shadow="xl">
          <Image
            src="https://www.kuscco.com/images/2020/09/18/our-partners5.gif"
            alt="fsd"
          />
        </Paper>
      </Stack>
    </div>
  );
}

export default Landing;
