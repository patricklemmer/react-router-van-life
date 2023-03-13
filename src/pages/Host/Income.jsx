// Imports
// React imports
import React from 'react';

function Income() {
  const transactionsData = [
    { amount: 720, date: "Jan 3, '23", id: '1' },
    { amount: 560, date: "Dec 12, '22", id: '2' },
    { amount: 980, date: "Dec 3, '22", id: '3' },
  ];
  return (
    <section className="">
      <h1>Income</h1>
      <p>
        Last <span>30 days</span>
      </p>
      <h2>$2,260</h2>
      <img
        className="gaph"
        src="../src/assets/images/income-graph.png"
        alt="Income graph"
      />
      <div className="">
        <h3>Your transactions (3)</h3>
        <p>
          Last <span>30 days</span>
        </p>
      </div>
      <div className="">
        {transactionsData.map((item) => (
          <div key={item.id} className="">
            <h3>${item.amount}</h3>
            <p>{item.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Income;
