import { ApolloClient, InMemoryCache } from "@apollo/client";
const client = new ApolloClient({
    uri: 'https://api-eu-west-2.hygraph.com/v2/clkwe2leq041o01uk4rcv91js/master',
    cache: new InMemoryCache(),
  });
export default client;  