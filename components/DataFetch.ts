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

interface Transactions {
  type: string;
  amount: number;
  from: string;
  to: string;
  toId: string;
  status: string;
  requestId: string;
  userId: string;
}

export const DataFetch = (size?: number) => {
  const [loans, setLoans] = useState<Loans[]>([]);
  const [savings, setSavings] = useState<Savings[]>([]);
  const [tx, setTx] = useState<Transactions[]>([]);

  const [users, setUsers] = useState<number>(0);

  const userId = useSelector((state: RootState) => state.user.user._id);
  useEffect(() => {
    const fetchData = async () => {
      const loanRes = await loansService.getAllLoansByUserId(userId);
      const savingRes = await savingsService.getSavingsByUserId(userId);
      const TxRes = await transactionsService.getUserTransactions(userId);
      setTx(TxRes.getUserTransactions);
      setLoans(loanRes.getAllLoansByUserId.loans),
        setSavings(savingRes.data.getSavingsByUserId);
      const all = await userService.getUsersTotal();
      setUsers(all.getUsersTotal);
    };
    fetchData();
  }, [userId]);
  const myLoans = loans.slice(1, loans.length);
  const mySavings = savings.slice(1, savings.length);
  let transactions;
  transactions = size ? tx.slice(0, size) : tx.slice(0, 5);
  let totalSavings, totalLoans;
  if (savings.length > 0 && loans.length > 0) {
    totalSavings = savings
      .map((saving) => saving.amountSaved)
      .reduce((x, y) => x + y);
    totalLoans = loans.map((loan) => loan.amountPaid).reduce((x, y) => x + y);
  }
  return {
    mySavings,
    myLoans,
    totalSavings,
    totalLoans,
    transactions,
    tx,
    users,
  };
};
