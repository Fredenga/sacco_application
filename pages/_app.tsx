import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { NotificationsProvider } from "@mantine/notifications";
import { setContext } from "@apollo/client/link/context";
import { Provider } from "react-redux";
import { persistor, store } from "../state/store";
import { PersistGate } from "redux-persist/integration/react";

const httplink = createHttpLink({
  uri: "http://localhost:4000/graphql",
  // credentials: "same-origin",
});
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httplink),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <NotificationsProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </NotificationsProvider>
    </ApolloProvider>
  );
}

export default MyApp;
