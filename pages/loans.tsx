import {
  AppShell,
  Navbar,
  Center,
  Text,
  Container,
  Group,
  Button,
  Grid,
  Progress,
  MediaQuery,
  Aside,
  Paper,
  Modal,
  Stack,
  Select,
  TextInput,
  Space,
} from "@mantine/core";
import { useState } from "react";
import Section from "../components/Section";
import { ThisText } from "./Dashboard";

export default function Loans() {
  const [opened, setOpened] = useState(false);
  const [amount, setAmount] = useState<number>(0);
  const [loanType, setLoanType] = useState("");
  const [option, setOption] = useState("");

  console.log(amount);
  const savings = 100000;
  const max = 0.9 * savings;
  const handleAmount = () => {
    if (savings > 1000) {
      return ` Maximum loan amount is KSH${max}`;
    }
    return "";
  };

  const checkLoanType = (loanType: string) => {
    switch (loanType) {
      case "Car Loan" || "Emergency Loan":
        setOption("amount");
        break;
      case "Student Loan" || "Mortgage Loan":
        setOption("guarantor");
      default:
        break;
    }
    console.log(loanType);
    console.log(option);
  };
  function Render() {
    if (option == "amount") {
      return <Text color="green">{handleAmount()}</Text>;
    } else if (option == "guarantor") {
      return (
        <TextInput
          label="Token"
          placeholder="Paste your guarantor's Token"
          required
        />
      );
    }
    return <></>;
  }
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} height={500} p="xs">
          <Navbar
            p="md"
            hiddenBreakpoint="sm"
            // hidden={!opened}
            width={{ sm: 200, lg: 300 }}
          >
            <Section {...ThisText} />
          </Navbar>
        </Navbar>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
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
            data={[
              { value: "Car Loan", label: "Car Loan" },
              { value: "Emergency Loan", label: "Emergency Loan" },
              { value: "Student Loan", label: "Student Loan" },
              { value: "Mortgage Loan", label: "Mortgage Loan" },
            ]}
            onChange={(value) => {
              setLoanType(value || "");
              checkLoanType(loanType);
            }}
          />
          <TextInput
            label="Amount"
            placeholder="Amount (KSH)"
            required
            onChange={(e) => setAmount(parseInt(e.target.value))}
          />
          <Render />
          <Text>Interest Rate: 3%</Text>
          <Text>Amount to Pay: KSH94,500</Text>
          <Text>Due Date: 24/7/2022</Text>
          <Button variant="light" color="green">
            Apply Loan
          </Button>
        </Stack>
      </Modal>
      <Center>
        <Text size="xl" color="teal">
          Loans
        </Text>
      </Center>
      <Space />
      <Container>
        <Text color="green">Total Loans: Ksh 500,000</Text>

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
            <Button variant="light" color="teal">
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
        </Center>
        <Grid grow>
          <Grid.Col span={4}>
            <Paper shadow="xl" radius="md" p="lg">
              <Text color="teal" size="lg">
                Car Loan
              </Text>
              <Text>Principle: Ksh 4000</Text>
              <Text>Interest Rate: 3%</Text>
              <Text>Amount: Ksh 4300</Text>
              <Text>Amount Paid: Ksh 2150</Text>
              <Progress label="50%" size="md" color="green" value={50} />
            </Paper>
          </Grid.Col>
          <Grid.Col span={4}>
            <Paper shadow="xl" radius="md" p="lg">
              <Text color="teal" size="lg">
                Credit Builder Loan
              </Text>
              <Text>Principle: Ksh 4000</Text>
              <Text>Interest Rate: 3%</Text>
              <Text>Amount: Ksh 4300</Text>
              <Text>Amount Paid: Ksh 2150</Text>
              <Progress label="50%" size="md" color="green" value={50} />
            </Paper>
          </Grid.Col>
          <Grid.Col span={4}>
            <Paper shadow="xl" radius="md" p="lg">
              <Text color="teal" size="lg">
                Student Loan
              </Text>
              <Text>Principle: Ksh 4000</Text>
              <Text>Interest Rate: 3%</Text>
              <Text>Amount: Ksh 4300</Text>
              <Text>Amount Paid: Ksh 2150</Text>
              <Progress label="50%" size="md" color="green" value={50} />
            </Paper>
          </Grid.Col>
          <Grid.Col span={4}>
            <Paper shadow="xl" radius="md" p="lg">
              <Text color="teal" size="lg">
                Mortgage Loan
              </Text>
              <Text>Principle: Ksh 4000</Text>
              <Text>Interest Rate: 3%</Text>
              <Text>Amount: Ksh 4300</Text>
              <Text>Amount Paid: Ksh 2150</Text>
              <Progress label="50%" size="md" color="green" value={50} />
            </Paper>
          </Grid.Col>
          <Grid.Col span={4}>
            <Paper shadow="xl" radius="md" p="lg">
              <Text color="teal" size="lg">
                Payday Loan
              </Text>
              <Text>Principle: Ksh 4000</Text>
              <Text>Interest Rate: 3%</Text>
              <Text>Amount: Ksh 4300</Text>
              <Text>Amount Paid: Ksh 2150</Text>
              <Progress label="50%" size="md" color="green" value={50} />
            </Paper>
          </Grid.Col>
        </Grid>
      </Container>
    </AppShell>
  );
}
