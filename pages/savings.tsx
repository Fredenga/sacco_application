import { gql, useMutation } from "@apollo/client";
import {
  Center,
  Text,
  Container,
  Group,
  Button,
  Grid,
  Progress,
  Paper,
  Modal,
  Stack,
  TextInput,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outcome } from "../components/Notifications";
import LoggedIn from "../layouts/LoggedIn";
import { getSavingsByUserId_getSavingsByUserId } from "../src/graphql/savings/__generated__/getSavingsByUserId";
import savingsService from "../src/graphql/services/savingsService";
import { RootState } from "../state/store";

export let TotalSavings: number = 0;

export default function Savings() {
  const [opened, setOpened] = useState<boolean>(false);
  const [addSavings, setAddSavings] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const userId = useSelector((state: RootState) => state.user.user._id);

  const [load, setLoad] = useState<boolean>(false);

  const [totSav, SetTotSav] = useState(0);


  const [amountAimed, setAmountAimed] = useState<number>(0);
  const [name, setName] = useState<string>("");

  const [amount, setAmount] = useState<number>(1);
  const [savings, setSavings] = useState<
    getSavingsByUserId_getSavingsByUserId[]
  >([]);
  TotalSavings = totSav;
  const handleCreateSavingsAccount = async () => {
    setLoading(true);
    try {
      const data = await savingsService.createNormalSavingAccount({
        name,
        amountAimed,
        userId,
      });
      data && Outcome("", `New savings account created`, "green");
    } catch (error) {
      Outcome("", "Account creation unsuccessfull", "red");
    }
    setLoading(false);
    setOpened(false);
  };

  useEffect(() => {
    const fetchSavings = async () => {
      const res = await savingsService.getSavingsByUserId(userId);
      const allSavings: getSavingsByUserId_getSavingsByUserId[] =
        res.data.getSavingsByUserId;

      setSavings(allSavings.filter((saving) => saving.name != "SACCO_SAVINGS"));
      const resp = await savingsService.getTotalSavings();
      SetTotSav(resp.data.getTotalSavings);

    };
    fetchSavings();
  }, [userId]);

  const AddToYourSavingAccount = async (savingsId: string, bankId: string) => {
    setLoading(true);
    const res = await savingsService.saveToCustomUserAccount({
      userId,
      amount,
      savingsId,
      bankId,
    });
    if (res.status) {
      Outcome("Success", "Amount successfully added to the account", "green");
    } else {
      Outcome("Unable to save", `${res.error}`, "red");
    }
    setLoading(false);
    setAddSavings(false);
  };
  const findPercentage = (saving: any) => {
    let p = saving.amountSaved / saving.amountAimed;
    const target = p * 100;
    if (target >= 100) {
      return 100;
    } else {
      return Math.floor(target);
    }
  };
  const [mutateFunction] = useMutation(WITHDRAW, {
    onCompleted: (data) => {
      setLoad(false);
      setOpened(false);
      if (data.transferSavingsToEscrow.error !== null) {
        console.log(data);
        Outcome(
          "An error occured",
          data.transferSavingsToEscrow.error.message,
          "red"
        );
      } else {
        Outcome("Success", data.transferSavingsToEscrow.message, "green");
      }
    },
  });

  const handleWithDraw = (id: string) => {
    setLoad(true);
    mutateFunction({
      variables: {
        input: id,
      },
    });
  };

  return (
    <LoggedIn header={"savings"}>
      <Modal
        opened={opened}
        centered
        size="lg"
        onClose={() => setOpened(false)}
        title="Create New Savings"
      >
        <Stack>
          <TextInput
            label="Name"
            placeholder="Name of your savings"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextInput
            label="Target Amount"
            placeholder="Amount you wish to aim for"
            required
            onChange={(e) => setAmountAimed(parseInt(e.target.value))}
          />
          <Center>
            <Button
              variant="light"
              color="green"
              onClick={handleCreateSavingsAccount}
              loading={loading}
            >
              Create Savings Account
            </Button>
          </Center>
        </Stack>
      </Modal>

      <Container>
        <Group position="apart">
          <Text color="green" my={25}>
            Total Savings: KSH{totSav}
          </Text>
          <Button variant="light" color="teal" onClick={() => setOpened(true)}>
            New Savings Account
          </Button>
        </Group>
      </Container>
      <Container>
        <Text my={10} size="xl" color="green">
          Current Savings
        </Text>
        {savings.length > 0 ? (
          <Grid grow>
            {savings.map((saving) => (
              <Grid.Col
                key={saving._id}
                span={4}
                style={{
                  cursor: "pointer",
                }}
              >
                <Paper
                  shadow="xl"
                  radius="md"
                  p="lg"
                  onClick={() => setAddSavings(true)}
                >
                  <Text color="teal" size="lg">
                    {saving.name}
                  </Text>

                  <Text>Amount: Ksh {saving.amountSaved}</Text>
                  <Text>Target: Ksh {saving.amountAimed}</Text>
                  <Progress
                    label={`${findPercentage(saving)}%`}
                    size="md"
                    color="green"
                    value={findPercentage(saving)}
                  />
                </Paper>
                <Modal
                  opened={addSavings}
                  onClose={() => setAddSavings(false)}
                  title="Add to your savings account"
                  centered
                >
                  <Stack>
                    <TextInput
                      label="Amount"
                      placeholder="Amount (KSH)"
                      required
                      onChange={(e) => setAmount(parseInt(e.target.value))}
                    />
                    <Button
                      onClick={() =>
                        AddToYourSavingAccount(saving._id, saving.bankId)
                      }
                      variant="light"
                      color="teal"
                      loading={loading}
                    >
                      Add Amount
                    </Button>
                    <Button
                      onClick={() => handleWithDraw(saving._id)}
                      variant="light"
                      color="teal"
                      loading={load}
                    >
                      Withdraw
                    </Button>
                  </Stack>
                </Modal>
              </Grid.Col>
            ))}
          </Grid>
        ) : (
          <Center>
            <Text color="gray">Nothing here yet</Text>
          </Center>
        )}
      </Container>
    </LoggedIn>
  );
}

const WITHDRAW = gql`
  mutation withdraw($input: String!) {
    transferSavingsToEscrow(savingsId: $input) {
      message
      error {
        error
        message
      }
    }
  }
`;
