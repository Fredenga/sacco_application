import { apolloClient } from "../../../pages/_app";
import {
  GET_ESCROW,
  GET_USER_TRANSACTIONS,
} from "../transactions/transactionQuery";

class TransactionsService {
  async getEscrow(userId: string) {
    try {
      const { data } = await apolloClient.query({
        query: GET_ESCROW,
        variables: { input: userId },
      });
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getUserTransactions(userId: string) {
    try {
      const { data } = await apolloClient.query({
        query: GET_USER_TRANSACTIONS,
        variables: { input: userId },
      });
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default new TransactionsService();
