import { GraphQLResolveInfo } from "graphql";
import { IResolvers } from "graphql-tools";
import { Context } from "./models";
import { content } from "./data";
import uuid from "uuid";
import fs from "fs";
import path from "path";

const resolverMap: IResolvers = {
  Query: {
    products(_: void, args: void, ctx: Context, info: GraphQLResolveInfo) {
      return content.findAll();
    }
  },
  Mutation: {
    createProduct({}, { input }) {
      const encoding = input.img;
      const base64Image = encoding.split(";base64,").pop();
      const name = uuid.v1();
      fs.writeFile(
        path.join(__dirname, "/public/images/", `${name}.jpg`),
        base64Image,
        "base64",
        (err: any) => {
          console.log(err);
        }
      );
      return content.create({
        ...input,
        img: `${name}.jpg`
      });
    },
    deleteProduct({}, { id }) {
      content
        .findByPk(id)
        .then(({ img }: { img: string }) =>
          fs.unlink(path.join(__dirname, "/public/images/", img), err =>
            console.log(err)
          )
        );
      return content.findByPk(id).then((el: any) => el.destroy());
    },
    product({}, {id}) {
      console.log(id)
      return content.findByPk(id);
    }
  }
};

export default resolverMap;
