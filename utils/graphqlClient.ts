import { GraphQLClient } from 'graphql-request';
import { getSdk } from '../generated/graphql';


const endpoint = `${process.env.NEXT_PUBLIC_SERVER_URL}`; 

export const graphQLClient = new GraphQLClient(endpoint, {
  credentials: 'include', 
});

export const sdk = getSdk(graphQLClient);
