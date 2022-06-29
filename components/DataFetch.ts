import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import loansService from "../src/graphql/services/loansService";
import savingsService from "../src/graphql/services/savingsService";
import transactionsService from "../src/graphql/services/transactionsService";
import userService from "../src/graphql/services/userService";
import { RootState } from "../state/store";

interface Loans {
  amount: number;
  amountPaid: number;
  userId: string;
  loanTypeId: string;
  guarantor: boolean;
  processing: boolean;
  amountRemaining: number;
  _id: string;
}
export interface Savings {
  _id: string;
  name: string;
  type: string;
  amountSaved: number;
  amountAimed: number;
  userId: string;
  bankId: string;
  frozen: boolean;
  amountLoanable: number;
}


export interface Transactions {

  _id: string;
  type: string;
  amount: number;
  from: string;
  to: string;
  toId: string;
  status: string;

  userId: string;
}

export const DataFetch = (size?: number) => {
  const [loans, setLoans] = useState<Loans[]>([]);
  const [savings, setSavings] = useState<Savings[]>([]);

  const userId = useSelector((state: RootState) => state.user.user._id);
  useEffect(() => {
    const fetchData = async () => {
      const loanRes = await loansService.getAllLoansByUserId(userId);
      const savingRes = await savingsService.getSavingsByUserId(userId);

      setLoans(loanRes.getAllLoansByUserId.loans),
        setSavings(savingRes.data.getSavingsByUserId);
    };
    fetchData();
  }, [userId]);
  const myLoans = loans.slice(1, loans.length);

  const mySavings = savings.slice(1, savings.length);


  return {
    mySavings,
    myLoans,
  };
};
