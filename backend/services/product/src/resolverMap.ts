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
    createProduct({}, { input }) {
      return content.create(input);
    },
    deleteProduct({}, { id }) {
      return content.findByPk(id).then((el: any) => el.destroy());
    }
  }
};

export default resolverMap;
