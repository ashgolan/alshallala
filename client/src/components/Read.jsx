import React from "react";
import "./reads.css";
export default function StrartingRead({ transaction }) {
  const data =
    transaction &&
    transaction.data.map((data) => {
      return (
        <div className="reads-container">
          <div>
            <label style={{ width: "100%", color: "whitesmoke" }}>
              {data.name}
            </label>
          </div>
          <div style={{ display: "flex", flexDirection: "row-reverse" }}>
            <label>{data.read1}</label>
            <label>{data.read2}</label>
            <label
              style={{
                width: "10%",
                backgroundColor: "brown",
              }}
            >
              {+data.read2 - +data.read1}
            </label>
            <label>{data.read3}</label>
            <label
              style={{
                width: "10%",
                backgroundColor: "brown",
              }}
            >
              {+data.read3 - +data.read2}
            </label>
          </div>
        </div>
      );
    });
  return <div style={{ width: "90%" }}>{data}</div>;
}
