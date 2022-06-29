import {
  Center,
  Text,
  Container,
  Button,
  Grid,
  Progress,
  Paper,
  Modal,
  Stack,
  Select,
  TextInput,
  Space,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import GuarantorToken from "../components/GuarantorToken";
import { Outcome } from "../components/Notifications";
import LoggedIn from "../layouts/LoggedIn";
import { getAllLoansByUserId_getAllLoansByUserId_loans } from "../src/graphql/loans/__generated__/getAllLoansByUserId";
import { getAllLoanTypes_getAllLoanTypes } from "../src/graphql/loans/__generated__/getAllLoanTypes";
import loansService from "../src/graphql/services/loansService";
import { RootState } from "../state/store";

export let TotalLoans: number = 0;

export default function Loans() {
  const [loans, setLoans] = useState<getAllLoanTypes_getAllLoanTypes[]>([]);
  const userId = useSelector((state: RootState) => state.user.user._id);
  const [total, setTotal] = useState<number>(0);

  const [userLoans, setUserLoans] = useState<
    getAllLoansByUserId_getAllLoansByUserId_loans[]
  >([]);
  useEffect(() => {
    const fetchLoans = async () => {
      const data = await loansService.getAllLoanTypes();
      const res = await loansService.getAllLoansByUserId(userId);
      res && setUserLoans(res.getAllLoansByUserId.loans);
      setLoans(data.getAllLoanTypes);

      const resp = await loansService.getTotalLoans();
      setTotal(resp.data.getTotalLoans);
    };
    fetchLoans();
  }, [loans, userId]);

  TotalLoans = total;
  const [opened, setOpened] = useState(false);
  const [guarantor, setGuarantor] = useState(false);
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState<number>(0);
  const [guarantorAmount, setGuarantorAmount] = useState<number>(0);
  const [loanType, setLoanType] = useState("");
  const [token, setToken] = useState<string>("");
  const loan = loans.find((loan) => loan.name === loanType);
  const calculateAmountToPay = () => {
    if (loan) {
      return Math.ceil(
        amount * (loan?.interestRate / 100) * loan.repayPeriod + amount
      );
    }
    return null;
  };
  const [myToken, setMyToken] = useState("");
  const beAGuarantor = async () => {
    setLoading(true);
    const res = await loansService.createGuarantor({
      userId,
      amount: guarantorAmount,
    });
    console.log(res.data);
    if (res.status) {
      setMyToken(res.data.createGuarantor.token);
    } else {
      Outcome("Application Unsuccessful", `${res.error}`, "red");
    }
    setLoading(false);
    setGuarantor(false);
  };

  const handleApplyLoan = async () => {
    setLoading(true);
    const res = await loansService.initializeLoan({
      amount,
      userId,
      token,
      loanTypeId: loan?._id || "",
    });
    if (res.status) {
      Outcome(
        "Loan application successful",
        `You have been awarded Ksh ${amount}`,
        "green"
      );
    } else {
      Outcome("Loan application failed", `${res.error}`, "red");
    }
    setLoading(false);
    setOpened(false);
  };
  return (
    <LoggedIn header={"loan"}>
      <Modal
        opened={guarantor}
        onClose={() => setGuarantor(false)}
        title="Be a Guarantor"
        centered
      >
        <Stack>
          <TextInput
            label="Amount"
            placeholder="Amount (KSH)"
            required
            onChange={(e) => setGuarantorAmount(parseInt(e.target.value))}
          />
          <Button
            loading={loading}
            onClick={beAGuarantor}
            variant="light"
            color="green"
          >
            Apply for Guarantorship
          </Button>
        </Stack>
      </Modal>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Loan Application"
        centered
      >
        <Stack>
          <Select
            label="Loan Type"
            placeholder="Pick one"
            data={loans.map((myLoan) => ({
              value: myLoan.name,
              label: myLoan.name,
            }))}
            onChange={(value) => {
              setLoanType(value || "");
            }}
          />
          <TextInput
            label="Amount"
            placeholder="Amount (KSH)"
            required
            onChange={(e) => setAmount(parseInt(e.target.value))}
          />
          {/* <Render /> */}
          <TextInput
            label="Token"
            placeholder="Paste your guarantor's Token"
            onChange={(e) => setToken(e.target.value)}
          />
          <Text>Interest Rate: {loan?.interestRate}%</Text>

          <Text>Amount to Pay: {calculateAmountToPay()}</Text>
          <Text>Due Date: {loan?.repayPeriod} months</Text>
          <Button onClick={handleApplyLoan} variant="light" color="green">
            Apply Loan
          </Button>
        </Stack>
      </Modal>
      <Space />
      <Container>

        <Text color="green">Total Loans: Ksh {total}</Text>


        <Center>
          <Container my={10}>
            <Button
              variant="light"
              color="teal"
              onClick={() => setOpened(true)}
            >
              Apply New Loan
            </Button>
          </Container>
          <Container>
            <Button
              onClick={() => setGuarantor(true)}
              variant="light"
              color="teal"
            >
              Be A Guarantor
            </Button>
          </Container>
        </Center>
      </Container>
      <Container>
        <Center>
          <Text my={10} size="xl" color="green">
            Current Loans
          </Text>
          <Container>{token && <GuarantorToken token={token} />}</Container>
        </Center>
        {userLoans.length > 0 ? (
          <Grid grow>
            {userLoans.map((userLoan) => {
              const progress = (userLoan.amountPaid / userLoan.amount) * 100;
              return (
                <Grid.Col key={userLoan._id} span={4}>
                  <Paper shadow="xl" radius="md" p="lg">
                    <Text color="teal" size="lg">
                      Car Loan
                    </Text>
                    <Text>Amount: Ksh {userLoan.amount}</Text>
                    <Text>Amount Paid: Ksh {userLoan.amountPaid}</Text>
                    <Text>
                      Amount Remaining: Ksh {userLoan.amountRemaining}
                    </Text>
                    <Progress
                      label={`progress%`}
                      size="md"
                      color="green"
                      value={progress}
                    />
                  </Paper>
                </Grid.Col>
              );
            })}
          </Grid>
        ) : (
          <Center>
            <Text color="gray">Nothing here yet</Text>
          </Center>
        )}
      </Container>
    </LoggedIn>
    // </AppShell>
  );
}
