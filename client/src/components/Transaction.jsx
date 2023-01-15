import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Read from "./Read";
import "./transaction.css";
export default function Transaction() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getTransactions = async () => {
      const { data } = await axios.get(
        "http://localhost:5000/transactions/63c32eb6c3c8c5658e4b0354"
      );
      console.log(data);
      setData(data);
    };
    getTransactions();
  }, []);

  return (
    <div className="transaction-container">
      <div className="title-welcome">
        <label htmlFor=""> : צהריים טובים</label>
        <label htmlFor="">עלא שעלאן </label>
      </div>
      <select className="select-year" name="" id="">
        <option value="">2022</option>
      </select>
      {data &&
        data.map((transaction) => {
          return <Read transaction={transaction}></Read>;
        })}
    </div>
  );
}
