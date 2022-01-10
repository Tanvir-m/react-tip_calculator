import React, { useState } from "react";
import style from "../css/style.module.css";

const Input = (props) => {
  const [inpVal, setinpVal] = useState("");
  const [chooseVal, setchooseVal] = useState("");
  const [customerName, setCustomerName] = useState("");

  const onInputChangeHandler = (e) => {
    const textVal = e.target.value;
    setinpVal(textVal);
  };

  const onSelectChangeHandler = (e) => {
    const textVal = e.target.value;
    setchooseVal(parseInt(textVal));
    // console.log(textVal);
  };

  const onChangeCustomerHandler = (e) => {
    const textVal = e.target.value;
    setCustomerName(textVal);
    // console.log(textVal)
  };

  const addCustomer = () => {
    const tip = (inpVal / 100) * chooseVal;
    const withoutSpaceInp = inpVal.trim();
    const withoutSpaceCus = customerName.trim();
    

    props.tips(tip);

    if (withoutSpaceInp && withoutSpaceCus && chooseVal!="") {
      props.inputValue(tip, customerName);
    }
    setinpVal("");
    setchooseVal("");
    setCustomerName("");
  };
  return (
    <>
      <div className={style.inpDiv}>
        <h2>Enter Your Bill Amount</h2>
        <input
          type="number"
          className={style.inp}
          value={inpVal}
          onChange={onInputChangeHandler}
          placeholder="Enter your bill amount"
        />
        <hr />
      </div>

      <div className={style.inpDiv}>
        <label htmlFor="">How was the service</label>
        <select
          name="select"
          className={style.selec}
          value={chooseVal}
          onChange={onSelectChangeHandler}
        >
          <option value="">Choose... </option>
          <option value="20">Service 1: excellent (20%) </option>
          <option value="10">Service 2: Moderate (10%) </option>
          <option value="5">Service 3: bad (5%) </option>
        </select>

        <input
          type="text"
          className={style.inp2}
          value={customerName}
          onChange={onChangeCustomerHandler}
          placeholder="Customer name"
        />
        <button className={style.btn} onClick={addCustomer}>
          Add Customer
        </button>
      </div>
    </>
  );
};

export default Input;
