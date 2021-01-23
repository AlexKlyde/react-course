import React from 'react';
import moment from 'moment';

const Transaction = ({ from, to, amount, rate, time }) => {
  const formatDate = moment(time).format('DD MMM');
  const formatTime = moment(time).format('HH:mm');
  const formatAmount = new Intl.NumberFormat('en-GB').format(amount)
 
  return (
    <li className="transaction">
      <span className="transaction__date">{formatDate}</span>
      <span className="transaction__time">{formatTime}</span>
      <span className="transaction__assets">{from} → {to}</span>
      <span className="transaction__rate">{rate}</span>
      <span className="transaction__amount">{formatAmount}</span>
    </li>
  ) 
}

export default Transaction;