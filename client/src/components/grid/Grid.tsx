import React, { useState, useCallback } from "react";
import classNames from "classnames";
import s from "./grid.module.scss";
import img from "../assets/img/800px.jpg";
import emptySvg from "../assets/img/empty.svg";

export function Grid() {
  const [items, setItems] = useState([{ id: 1, title: 2 }]);

  useState(async () => {
    const data = await fetch(
      "https://jsonplaceholder.typicode.com/albums/1/photos"
    )
      .then(response => response.json())
      .then(json => json);

    setItems(data);
  });

  const strFormatt = (s: string): string => s.slice(0, s.length / 2);

  return items.length ? (
    <div className={classNames(s.wrapper)}>
      <aside className={classNames(s.leftBar)}></aside>
      <div className={classNames(s.itemBox)}>
        {items.splice(0, items.length / 200).map((itm: any) => (
          <div className={classNames(s.item, s.itemCard)} key={itm.id}>
            <figure className={classNames(s.itemFigure)}>
              <img src={img} alt="image" />
              <figcaption className={classNames(s.itemDescription)}>
                <div className={classNames(s.itemTopLine)}>
                  <span className={classNames(s.itemNum)}>{`# ${itm.id}`}</span>
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
  ) : null;
}
