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
} from "@mantine/core";
import styled from "styled-components";

export default function loans() {
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} height={500} p="xs">
          {/* Navbar content */}
        </Navbar>
      }
      aside={
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            <Text>Application sidebar</Text>
          </Aside>
        </MediaQuery>
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
      <Center>
        <Text size="xl" color="teal">
          Loans
        </Text>
      </Center>
      <Container>
        <Text color="green" my={25}>
          Total Loans: Ksh 500,000
        </Text>
        <Center>
          <Container my={10}>
            <Button
              variant="gradient"
              gradient={{ from: "teal", to: "lime", deg: 105 }}
            >
              Apply New Loan
            </Button>
          </Container>
          <Container>
            <Button
              variant="gradient"
              gradient={{ from: "teal", to: "lime", deg: 105 }}
            >
              Be A Guarantor
            </Button>
          </Container>
        </Center>
      </Container>
      <Container>
        <Text my={10} size="xl" color="green">
          Current Loans
        </Text>
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
