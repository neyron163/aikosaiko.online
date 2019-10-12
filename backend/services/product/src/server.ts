import { ApolloServer } from "apollo-server-express";
import compression from "compression";
import cors from "cors";
import express from "express";
import depthLimit from "graphql-depth-limit";
import { createServer } from "http";
import bodyParser from 'body-parser';
import schema from "./schema";
import path from 'path';

const app = express();
const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(7)]
});
app.use("*", cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json({limit: '10mb'}));
app.use(compression());
server.applyMiddleware({ app, path: "/graphql" });

const httpServer = createServer(app);

httpServer.listen(
  { port: 4001 },
  // tslint:disable-next-line:no-console
  (): void =>
    console.log(
      `\n🚀      GraphQL is now running on http://localhost:4001/graphql`
    )
);
