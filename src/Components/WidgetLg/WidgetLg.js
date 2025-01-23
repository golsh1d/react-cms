import React from "react";
import "./WidgetLg.css";
import { useState , useEffect} from "react";

export default function WidgetLg() {
  const [transactions , setTransactions] = useState([]);

  useEffect(() => {
      fetch('http://localhost:3000/transactions/')
      .then(res => res.json())
      .then(data => {
        setTransactions(data)
      })
    } , [])

  return (
    <div className="widgetlg">
      <div className="widgetlg-title">Latest Transactions</div>

      <table className="widgetlg-table">
        <tr className="widgetlg-tr">
          <th className="widgetlg-th">Customer</th>
          <th className="widgetlg-th">Date</th>
          <th className="widgetlg-th">Amount</th>
          <th className="widgetlg-th">Status</th>
        </tr>

        {transactions.map((transaction) => (
          <tr key={transaction.id} className="widgetlg-user">
            <td className="widgetlg-td widgetlg-user-first-td">
              <img src={transaction.img} alt="" className="widgetlg-img" />
              <span className="widgetlg-user-name">{transaction.userName}</span>
            </td>
            <td className="widgetlg-td">
              <span className="widgetlg-date">{transaction.date}</span>
            </td>
            <td className="widgetlg-td">
              <span className="widgetlg-amount">{transaction.amount}</span>
            </td>
            <td className="widgetlg-td">
              <button
                className="widgetlg-btn"
                style={{ color: transaction.btnColor }}
              >
                {transaction.status}
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}