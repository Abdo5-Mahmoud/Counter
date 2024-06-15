import React, { useState } from "react";

function Counter() {
  const [myNumber, setmyNumber] = useState(0);
  let count = myNumber;
  let operation = (e) => {
    if (e.target.name === "add") count++;
    if (e.target.name === "min") count--;
    if (e.target.name === "reset") count = 0;
    // console.log(count);
    setmyNumber(count);
  };
  return (
    <div>
      <div className="number text-center bg-light fs-4 w-25 m-auto my-2 rounded p-1  text-bg-light ">{myNumber}</div>
      <button
        onClick={operation}
        name="add"
        className="btn fst-italic fw-bold bg-info text-bg-dark rounded w-25 m-1"
      >
        +
      </button>
      <button
        onClick={operation}
        name="reset"
        className="btn fst-italic fw-bold bg-info text-bg-dark rounded  w-25 m-1 "
      >
        {/* <i className="fas fa-retweet"></i> */}
        Reset
      </button>
      <button
        onClick={operation}
        name="min"
        className="btn fst-italic fw-bold bg-info text-bg-dark rounded w-25 m-1"
      >
        -
      </button>
    </div>
  );
}

export default Counter;
