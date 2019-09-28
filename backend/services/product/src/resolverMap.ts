import { GraphQLResolveInfo } from "graphql";
import { IResolvers } from "graphql-tools";
import { Context } from "./models";
import {client} from './config';

const resolverMap: IResolvers = {
  Query: {
    products(_: void, args: void, ctx: Context, info: GraphQLResolveInfo) {
      return (async () => {
        await client.connect();
        const res = await client.query('SELECT id, name, age, img FROM public.products;');
        await client.end();
        return res.rows;
      })();
    }
  }
};

export default resolverMap;
