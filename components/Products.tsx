import React, { useEffect, useState } from "react";
import styled from "styled-components";
import loansService from "../src/graphql/services/loansService";

interface Data {
  name: string;
  guarantor: boolean;
  interestRate: number;
  maxLoan: number;
  repayPeriod: number;
}

const Productss = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  font-size: 30px;
  margin: auto;
  margin-bottom: 5px;
  margin-top: 5px;
`;

const List = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  padding: 30px;
`;

const ListItem = styled.div`
  width: 300px;
  height: 400px;
  box-shadow: 0px 0px 5px 5px lightgray;
  margin: 10px;
  border-radius: 10px;
  padding: 10px;
`;

const Text = styled.li`
  padding: 10px;
  font-size: larger;

  list-style: circle;
`;

function Products() {
  const [loans, setLoans] = useState<Data[]>([]);

  useEffect(() => {
    const fetchLoans = async () => {
      const data = await loansService.getAllLoanTypes();

      setLoans(data.getAllLoanTypes);
    };
    fetchLoans();
  }, []);
  return (
    <Productss>
      <Title>Our loan products</Title>
      <List>
        {loans.map((product) => (
          <ListItem key={product.name}>
            <Title>{product.name} loan</Title>
            <Text>
              {product.guarantor
                ? "Requires guarantors if amount borrowed exceeds savings balance"
                : "No guarantors required"}
            </Text>
            <Text>{product.interestRate}% interest rate</Text>
            <Text>
              Maximum loan offer is upto {product.maxLoan}% of savings
            </Text>
            <Text>Repayment period of upto {product.repayPeriod} months</Text>
          </ListItem>
        ))}
      </List>
    </Productss>
  );
}

export default Products;
