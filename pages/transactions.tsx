import {
  AppShell,
  Navbar,
  Center,
  Text,
  Container,
  Group,
  Button,
  MediaQuery,
  Aside,
  Paper,
  Stack,
} from "@mantine/core";
import Section from "../components/Section";
import { ThisText } from "./Dashboard";

export default function transactions() {
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
      <Center>
        <Text size="xl" color="teal">
          Transactions
        </Text>
      </Center>
      <Container>
        <Center>
          <Text color="green" my={25}>
            Escrow Balance: Ksh 600,000
          </Text>
        </Center>
        <Center>
          <Container my={10}>
            <Button variant="light" color="teal">
              Deposit
            </Button>
          </Container>
          <Container>
            <Button variant="light" color="teal">
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
          <Paper shadow="xl" radius="md" p="sm">
            <Group position="apart">
              <Text>Deposit</Text>
              <Text>In</Text>
              <Text>45000</Text>
              <Text>23:34:01/20/2022</Text>
            </Group>
          </Paper>
          <Paper shadow="xl" radius="md" p="sm">
            <Group position="apart">
              <Text>Deposit</Text>
              <Text>In</Text>
              <Text>45000</Text>
              <Text>23:34:01/20/2022</Text>
            </Group>
          </Paper>
          <Paper shadow="xl" radius="md" p="sm">
            <Group position="apart">
              <Text>Deposit</Text>
              <Text>In</Text>
              <Text>45000</Text>
              <Text>23:34:01/20/2022</Text>
            </Group>
          </Paper>
          <Paper shadow="xl" radius="md" p="sm">
            <Group position="apart">
              <Text>Deposit</Text>
              <Text>In</Text>
              <Text>45000</Text>
              <Text>23:34:01/20/2022</Text>
            </Group>
          </Paper>
          <Paper shadow="xl" radius="md" p="sm">
            <Group position="apart">
              <Text>Deposit</Text>
              <Text>In</Text>
              <Text>45000</Text>
              <Text>23:34:01/20/2022</Text>
            </Group>
          </Paper>
        </Stack>
        <Center>
          <Button variant="light" color="green" mt={30} fullWidth>
            Load More
          </Button>
        </Center>
      </Container>
    </AppShell>
  );
}
