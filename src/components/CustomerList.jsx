import React, { useState } from 'react';
import style from '../css/style.module.css';

const CustomerList = (props) => {
  const [totalCustomer, setTotalCustomer] = useState(0);
  const [totalTips, setTotalTips] = useState(0);

  const { customerList } = props;
  const listItems = customerList.map((list, index) => (
    <li key={index}>{list}</li>
  ));

  const calculateTip = () => {
    setTotalCustomer(customerList.length);
    setTotalTips(props.totalTips);
  };
  return (
    <>
      <h1>Customer List</h1>
      <hr />

      <ul>{listItems}</ul>
      <hr />
      <button className={style.btn2} onClick={calculateTip}>
        Calculate Tip and Customer
      </button>
      <hr />
      <table style={{ width: '100%', border: '1px solid black' }}>
        <thead>
          <tr>
            <th style={{ width: '70%', border: '1px solid black' }}>
              Total Customer
            </th>
            <th style={{ width: '30%', border: '1px solid black' }}>Tip</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ width: '70%', border: '1px solid black' }}>
              {totalCustomer}
            </td>
            <td style={{ width: '30%', border: '1px solid black' }}>
              {totalTips}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default CustomerList;
