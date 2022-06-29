import { useEffect, useState } from "react";
import {
  Text,
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

import { DataFetch, Transactions } from "../components/DataFetch";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import transactionsService from "../src/graphql/services/transactionsService";
import { TotalSavings } from "./savings";
import { TotalLoans } from "./loans";
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

  const [tx, setTx] = useState<Transactions[]>([]);
  const userId = useSelector((state: RootState) => state.user.user._id);

  let transactions;
  transactions = tx.slice(0, 5);
  useEffect(() => {
    const getTx = async () => {
      const TxRes = await transactionsService.getUserTransactions(userId);
      setTx(TxRes.getUserTransactions);
    };
    getTx();
  }, [userId]);
  const { myLoans, mySavings } = DataFetch();


  return (
    <LoggedIn header={"dashboard"}>
      <Container>
        <Container>
          <UpContainer>
            <Text>Savings: Ksh {TotalSavings}</Text>
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
            <Text>Loans: Ksh {TotalLoans}</Text>
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

          {transactions.length > 0 ? (
            transactions.map((transaction) => (
              <Stack align="stretch" key={transaction._id}>
                <Paper my={7} shadow="xl" radius="md" p="sm">
                  <Group position="apart">
                    <Text>{transaction.type}</Text>
                    <Text>{transaction.from}</Text>
                    <Text>Ksh {transaction.amount}</Text>
                    <Text>{transaction.status}</Text>
                  </Group>
                </Paper>
              </Stack>
            ))
          ) : (
            <Center>No Transactions Yet</Center>
          )}

        </Container>
      </Container>
    </LoggedIn>
  );
}
