
import { Button, Center, Container, Stack, Text } from "@mantine/core";
import { NextLink } from "@mantine/next";

import { PlusIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/router";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TotalLoans } from "../pages/loans";
import { TotalSavings } from "../pages/savings";
import userService from "../src/graphql/services/userService";
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

  const router = useRouter();
  const [users, setUsers] = useState<number>(0);

  useEffect(() => {
    const getData = async () => {
      const all = await userService.getUsersTotal();
      setUsers(all.getUsersTotal);
    };
    getData();
  }, []);


  return (
    <Aside>
      <Container mb={10}>
        <Text mb={6}>Quick Actions</Text>
        <Stack>
          <Button color="green" variant="light" leftIcon={<PlusIcon />}>
            Top Up
          </Button>
          <NextLink href="/transactions">
            <Button color="green" variant="light" leftIcon={<PlusIcon />}>
              Add Payment
            </Button>
          </NextLink>
          <NextLink href="/savings">
            <Button
              onClick={() => router.replace("/savings")}
              color="green"
              variant="light"
              leftIcon={<PlusIcon />}
            >
              Add Savings
            </Button>
          </NextLink>
          <NextLink href="/loans">
            <Button
              onClick={() => router.replace("/loans")}
              color="green"
              variant="light"
              leftIcon={<PlusIcon />}
            >
              Apply Loan
            </Button>
          </NextLink>
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
            <Text>Ksh {TotalSavings}</Text>
          </SideApp>
          <SideApp>
            <Text weight="lighter">Total Loans</Text>
            <Text>Ksh {TotalLoans}</Text>
          </SideApp>
          <SideApp>
            <Text weight="lighter">Total Members</Text>
            <Text>{users}</Text>
          </SideApp>
        </Stack>

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
