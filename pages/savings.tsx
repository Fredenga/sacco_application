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

export default function savings() {
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
          Savings
        </Text>
      </Center>
      <Container>
        <Group position="apart">
          <Text color="green" my={25}>
            Total Savings: Ksh 500,000
          </Text>
          <Button
            variant="gradient"
            gradient={{ from: "teal", to: "lime", deg: 105 }}
          >
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
            <Paper shadow="xl" radius="md" p="lg">
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
