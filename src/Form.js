import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Form = () => {
  let dispatch = useDispatch();
  const [amount, setAmount] = useState("");
  const [fullName, setFullName] = useState("");
  return (
    <>
      <div className="container">
        <h2>Form</h2>
        <div className="row">
          <div className="col-4">
            <input
              className="form-control"
              type="number"
              placeholder="Enter Amount"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            />
          </div>
          <button
            className="btn btn-primary col-2"
            onClick={() => {
              dispatch({ type: "deposit", payload: amount });
              setAmount("");
            }}
          >
            Deposit
          </button>
          <button
            className="btn btn-primary mx-2 col-2"
            onClick={() => {
              dispatch({ type: "withdraw", payload: amount });
              setAmount("");
            }}
          >
            Withdraw
          </button>
        </div>
        <div className="row mt-2">
          <div className="col-4">
            <input
              className="form-control"
              type="text"
              placeholder="Enter Full Name"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
              }}
            />
          </div>
          <button
            className="btn btn-primary col-2"
            onClick={() => {
              dispatch({ type: "nameUpdate", payload: fullName });
              setFullName("");
            }}
          >
            Update
          </button>
          <button
            className="btn btn-danger col-2 mt-2"
            onClick={() => {
              dispatch({ type: "reset" });
            }}
          >
            Reset
          </button>
          <button className="btn btn-danger col-2 mt-2" onClick={()=> {
            dispatch({type: "addname" , payload: "venki"})
          }}>
            adding Name
          </button>
        </div>
      </div>
    </>
  );
};

export default Form;
