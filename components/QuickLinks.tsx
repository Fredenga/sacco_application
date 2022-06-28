import { gql, useQuery } from "@apollo/client";
import { Button, Center, Container, Stack, Text, Title } from "@mantine/core";
import { PlusIcon } from "@radix-ui/react-icons";
import React from "react";
import styled from "styled-components";
import { DataFetch } from "./DataFetch";
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
  const { loading, error, data } = useQuery(GET_SACCO_STATS);

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
        {loading && <Title order={5}>loading</Title>}
        {!loading && !error && (
          <Stack>
            <SideApp>
              <Text weight="lighter">Total Savings</Text>
              <Text>Ksh {data?.getTotalSavings}</Text>
            </SideApp>
            <SideApp>
              <Text weight="lighter">Total Loans</Text>
              <Text>Ksh {data?.getTotalLoans}</Text>
            </SideApp>
            <SideApp>
              <Text weight="lighter">Total Members</Text>
              <Text>{data?.getUsersTotal}</Text>
            </SideApp>
          </Stack>
        )}
      </Center>
    </Aside>
  );
}

export default QuickLinks;

const GET_SACCO_STATS = gql`
  query stats {
    getTotalLoans
    getTotalSavings
    getUsersTotal
  }
`;
