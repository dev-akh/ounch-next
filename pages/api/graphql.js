import { ApolloServer, gql } from 'apollo-server-micro';
import Cors from 'micro-cors';
import typeDefs from '@/graphql/schema';
import resolvers from '@/graphql/resolvers';

const cors = Cors();

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

const startServer = apolloServer.start();

export default cors(async function handler(req,res) {
    if(req.method === 'OPTIONS') {
        res.end;
        return false;
    }
    await startServer;

    await apolloServer.createHandler({ path: '/api/graphql' })(req,res);
});
