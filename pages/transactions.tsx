import {
  Center,
  Text,
  Container,
  Group,
  Button,
  Paper,
  Stack,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DataFetch, Transactions } from "../components/DataFetch";
import TransactionModal from "../components/TransactionModal";
import LoggedIn from "../layouts/LoggedIn";
import transactionsService from "../src/graphql/services/transactionsService";
import { RootState } from "../state/store";

export default function Transaction() {
  const userId = useSelector((state: RootState) => state.user.user._id);
  const [balance, setBalance] = useState<number>();
  const [more, SetMore] = useState<number>();
  const [open, setOpen] = useState({
    status: false,
    type: "",
  });

  const handleTransaction = (type: string) => {
    setOpen({ status: true, type });
  };
  const [tx, setTx] = useState<Transactions[]>([]);
  let transactions;
  transactions = more ? tx.slice(0, more) : tx.slice(0, 5);
  useEffect(() => {
    const loadTx = async () => {
      const TxRes = await transactionsService.getUserTransactions(userId);
      setTx(TxRes.getUserTransactions);
    };
    loadTx();
  }, [userId]);

  // const { transactions, tx } = DataFetch(more);
  useEffect(() => {
    const fetchTransactions = async () => {
      const data = await transactionsService.getEscrow(userId);
      data && setBalance(data.getEscrow.amount);
    };
    fetchTransactions();
  }, [userId]);
  return (
    <LoggedIn header={"transactions"}>
      <Container>


        {<TransactionModal open={open} setOpen={setOpen} />}


        <Center>
          <Text color="green" my={25}>
            Escrow Balance: Ksh {balance}
          </Text>
        </Center>
        <Center>
          <Container my={10}>
            <Button
              variant="light"
              color="teal"
              onClick={() => handleTransaction("deposit")}
            >
              Deposit
            </Button>
          </Container>
          <Container>
            <Button
              variant="light"
              color="teal"
              onClick={() => handleTransaction("withdraw")}
            >
              Withdraw
            </Button>
          </Container>
        </Center>
      </Container>
      <Container>
        <Text my={10} size="xl" color="green">
          Recent Transactions
        </Text>
        <Stack>
          {transactions.map((tx) => (
            <Paper key={tx._id} shadow="xl" radius="md" p="sm">
              <Group position="apart">
                <Text>{tx.type}</Text>
                <Text>{tx.from}</Text>
                <Text>Ksh {tx.amount}</Text>
                <Text>{tx.status}</Text>
              </Group>
            </Paper>
          ))}
        </Stack>
        <Center>
          <Button
            onClick={() => {
              SetMore(5 + tx.length / 2);
            }}
            variant="light"
            color="green"
            mt={30}
            fullWidth
          >
            Load More
          </Button>
        </Center>
      </Container>
    </LoggedIn>
  );
}
