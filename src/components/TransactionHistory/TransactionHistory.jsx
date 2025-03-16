import css from "./TransactionHistory.module.css";
import React from "react";
import clsx from "clsx";
export default function TransactionHistory({ items }) {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.thead}>
        <tr className={css.tr}>
          <th className={css.td}>Type</th>
          <th className={css.td}>Amount</th>
          <th className={css.td}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tbody}>
        {items.map(({ id, type, amount, currency }, index) => {
          const bgColor = clsx(css.td, index % 2 !== 0 && css.even);
          return (
            <tr key={id} className={bgColor}>
              <td className={css.td}>{type}</td>
              <td className={css.td}>{amount}</td>
              <td className={css.td}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
