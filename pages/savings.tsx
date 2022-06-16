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
  TextInput,
} from "@mantine/core";
import { useState } from "react";
import Section from "../components/Section";
import { ThisText } from "./Dashboard";

export default function Savings() {
  const [opened, setOpened] = useState<boolean>(false);
  const [addSavings, setAddSavings] = useState<boolean>(false);
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
        centered
        size="lg"
        onClose={() => setOpened(false)}
        title="Create New Savings"
      >
        <Stack>
          <TextInput label="Name" placeholder="Name of your savings" required />
          <TextInput
            label="Target Amount"
            placeholder="Amount you wish to aim for"
            required
          />
          <Center>
            <Button variant="light" color="green">
              Create Savings
            </Button>
          </Center>
        </Stack>
      </Modal>
      <Modal
        opened={addSavings}
        onClose={() => setAddSavings(false)}
        title="Add to your savings account"
        centered
      >
        <Stack>
          <TextInput label="Amount" placeholder="Amount (KSH)" required />
          <Button variant="light" color="teal">
            Add Amount
          </Button>
        </Stack>
      </Modal>
      <Center>
        <Text size="xl" color="teal">
          Savings
        </Text>
      </Center>
      <Container>
        <Group position="apart">
          <Text color="green" my={25}>
            Total Savings: Ksh 500,000
          </Text>
          <Button variant="light" color="teal" onClick={() => setOpened(true)}>
            Add New Savings
          </Button>
        </Group>
      </Container>
      <Container>
        <Text my={10} size="xl" color="green">
          Current Savings
        </Text>
        <Grid grow>
          <Grid.Col span={4}>
            <Paper
              shadow="xl"
              radius="md"
              p="lg"
              onClick={() => setAddSavings(true)}
            >
              <Text color="teal" size="lg">
                Regular Savings
              </Text>

              <Text>Amount: Ksh 5,000</Text>
              <Text>Target: Ksh 10,000</Text>
              <Progress label="50%" size="md" color="green" value={50} />
            </Paper>
          </Grid.Col>
          <Grid.Col span={4}>
            <Paper shadow="xl" radius="md" p="lg">
              <Text color="teal" size="lg">
                Online Savings
              </Text>

              <Text>Amount: Ksh 5,000</Text>
              <Text>Target: Ksh 10,000</Text>
              <Progress label="50%" size="md" color="green" value={50} />
            </Paper>
          </Grid.Col>
          <Grid.Col span={4}>
            <Paper shadow="xl" radius="md" p="lg">
              <Text color="teal" size="lg">
                Student Savings
              </Text>

              <Text>Amount: Ksh 5,000</Text>
              <Text>Target: Ksh 10,000</Text>
              <Progress label="50%" size="md" color="green" value={50} />
            </Paper>
          </Grid.Col>
          <Grid.Col span={4}>
            <Paper shadow="xl" radius="md" p="lg">
              <Text color="teal" size="lg">
                Group Savings
              </Text>

              <Text>Amount: Ksh 5,000</Text>
              <Text>Target: Ksh 10,000</Text>
              <Progress label="50%" size="md" color="green" value={50} />
            </Paper>
          </Grid.Col>
          <Grid.Col span={4}>
            <Paper shadow="xl" radius="md" p="lg">
              <Text color="teal" size="lg">
                Term Deposits
              </Text>

              <Text>Amount: Ksh 5,000</Text>
              <Text>Target: Ksh 10,000</Text>
              <Progress label="50%" size="md" color="green" value={50} />
            </Paper>
          </Grid.Col>
        </Grid>
      </Container>
    </AppShell>
  );
}
