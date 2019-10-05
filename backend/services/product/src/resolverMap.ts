import { GraphQLResolveInfo } from "graphql";
import { IResolvers } from "graphql-tools";
import { Context } from "./models";
import { content } from "./data";


const resolverMap: IResolvers = {
  Query: {
    products(_: void, args: void, ctx: Context, info: GraphQLResolveInfo) {
      return content.findAll();
    }
  },
  Mutation: {
    createProduct(root, {
      input
  }) {
      return content.create(input);
  }
  }
};

export default resolverMap;
