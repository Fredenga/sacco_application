import { apolloClient } from "../../../pages/_app";
import { GET_ESCROW } from "../transactions/transactionQuery";

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
}
export default new TransactionsService();
