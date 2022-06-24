import { Button, Center, Container, Stack, Text } from "@mantine/core";
import { PlusIcon } from "@radix-ui/react-icons";
import React from "react";
import styled from "styled-components";
const Aside = styled.div`
  width: 350px;
  padding: 20px;
  height: 100vh;
`;
const SideApp = styled.div`
  &:hover {
    border-block: 1px solid lightgray;
    margin-bottom: 20px;
  }
`;

function QuickLinks() {
  return (
    <Aside>
      <Container mb={10}>
        <Text mb={6}>Quick Actions</Text>
        <Stack>
          <Button color="green" variant="light" leftIcon={<PlusIcon />}>
            Top Up
          </Button>
          <Button color="green" variant="light" leftIcon={<PlusIcon />}>
            Add Payment
          </Button>
          <Button color="green" variant="light" leftIcon={<PlusIcon />}>
            Add Savings
          </Button>
          <Button color="green" variant="light" leftIcon={<PlusIcon />}>
            Apply Loan
          </Button>
        </Stack>
      </Container>
      <Container>
        <Text underline weight="normal" my={6}>
          Sacco Statistics
        </Text>
      </Container>
      <Center>
        <Stack>
          <SideApp>
            <Text weight="lighter">Total Savings</Text>
            <Text>397927323</Text>
          </SideApp>
          <SideApp>
            <Text weight="lighter">Total Loans</Text>
            <Text>992927320320</Text>
          </SideApp>
          <SideApp>
            <Text weight="lighter">Total Members</Text>
            <Text>79</Text>
          </SideApp>
        </Stack>
      </Center>
    </Aside>
  );
}

export default QuickLinks;
