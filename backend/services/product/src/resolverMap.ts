import { GraphQLResolveInfo } from "graphql";
import { IResolvers } from "graphql-tools";
import { Context } from "./models";
import { content } from "./data";
import fs from "fs";

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
    },
    singleUpload(parent, { file }) {
      const { stream, filename, mimetype, encoding } = file;
      const base64Image = encoding.split(";base64,").pop();
      fs.writeFile("out.jpg", base64Image, "base64", function(err: any) {
        console.log(err);
      });
      return { filename, mimetype, encoding };
    }
  }
};

export default resolverMap;
