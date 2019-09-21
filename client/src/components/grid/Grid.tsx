import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import classNames from "classnames";
import s from "./grid.module.scss";
import img from "../assets/img/800px.jpg";
import emptySvg from "../assets/img/empty.svg";

export const data = gql`
  query data {
    content {
      albumId
      id
      title
      url
      thumbnailUrl
    }
  }
`;

export function Grid() {
  const strFormatt = (s: string): string => s.slice(0, s.length / 2);

  return (
    <Query query={data}>
      {({ loading, data }: any) => {
        if (loading) return null;
        const { content } = data;
        return (
          <div className={classNames(s.wrapper)}>
            <aside className={classNames(s.leftBar)}></aside>
            <div className={classNames(s.itemBox)}>
              {content.map((itm: any) => (
                <div className={classNames(s.item, s.itemCard)} key={itm.id}>
                  <figure className={classNames(s.itemFigure)}>
                    <img src={img} alt="image" />
                    <figcaption className={classNames(s.itemDescription)}>
                      <div className={classNames(s.itemTopLine)}>
                        <span
                          className={classNames(s.itemNum)}
                        >{`# ${itm.id}`}</span>
                        <p className={classNames(s.itemName)}>
                          {strFormatt(itm.title)}
                        </p>
                        <p className={s.views}>Просмотров: 1000</p>
                        <footer className={s.itemFooter}>
                          <p className={s.svgBox}>
                            <img src={emptySvg} alt="" />
                          </p>
                          <p className={s.rating}>8.5</p>
                          <p className={s.votes}>({itm.id} голосов)</p>
                        </footer>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        );
      }}
    </Query>
  );
}
