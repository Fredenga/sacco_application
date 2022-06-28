import { useEffect, useState } from "react";
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

import LoggedIn from "../layouts/LoggedIn";

import { DataFetch } from "../components/DataFetch";
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
export default function Dashboard() {
  const { myLoans, mySavings, totalLoans, totalSavings, transactions } =
    DataFetch();

  return (
    <LoggedIn header={"dashboard"}>
      <Container>
        <Container>
          <UpContainer>
            <Text>Savings: Ksh {totalSavings}</Text>
            <Button variant="light" color="teal">
              {" "}
              View All
            </Button>
          </UpContainer>
          <Group position="apart">
            {mySavings.map((saving) => (
              <Container key={saving._id}>
                <Text>{saving.name}</Text>
                <Text>{saving.amountSaved}</Text>
                <Progress
                  label="80"
                  size="md"
                  color="green"
                  value={saving.amountSaved}
                />
              </Container>
            ))}
          </Group>
        </Container>
        <Container>
          <UpContainer>
            <Text>Loans: Ksh {totalLoans}</Text>
            <Button variant="light" color="teal">
              {" "}
              View All
            </Button>
          </UpContainer>
          <Group position="apart">
            {myLoans.map((loan) => (
              <Container key={loan._id}>
                <Text>default</Text>
                <Text>Ksh {loan.amountPaid}</Text>
                <Progress
                  label={`${(loan.amountPaid / loan.amount) * 100}%`}
                  size="md"
                  color="green"
                  value={loan.amountPaid}
                />
              </Container>
            ))}
          </Group>
          <UpContainer>
            <Text>transactions</Text>
            <Button variant="light" color="teal">
              {" "}
              view all
            </Button>
          </UpContainer>
          {transactions.map((transaction) => (
            
            <Stack align="stretch" key={transaction._id}>
              {console.log(transaction)}
              <Paper my={7} shadow="xl" radius="md" p="sm">
                <Group position="apart">
                  <Text>{transaction.type}</Text>
                  <Text>{transaction.from}</Text>
                  <Text>Ksh {transaction.amount}</Text>
                  <Text>{transaction.status}</Text>
                </Group>
              </Paper>
            </Stack>
          ))}
        </Container>
      </Container>
    </LoggedIn>
  );
}
