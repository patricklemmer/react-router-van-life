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
    <section class="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold mb-4">Income</h1>
      <p class="mb-6">
        Last <span class="font-bold">30 days</span>
      </p>
      <h2 class="text-4xl font-bold text-green-500 mb-8">$2,260</h2>
      <img
        class="mx-auto"
        src="../src/assets/images/income-graph.png"
        alt="Income graph"
      />
      <div class="mt-12">
        <h3 class="text-2xl font-bold mb-4">Your transactions (3)</h3>
        <p class="mb-6">
          Last <span class="font-bold">30 days</span>
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-white rounded-md border border-neutral-100 px-4 py-2">
            <h3 class="text-xl font-bold mb-2">$350</h3>
            <p class="text-gray-600">Apr 14, 2023</p>
          </div>

          <div class="bg-white rounded-md border border-neutral-100 px-4 py-2">
            <h3 class="text-xl font-bold mb-2">$900</h3>
            <p class="text-gray-600">Apr 8, 2023</p>
          </div>

          <div class="bg-white rounded-md border border-neutral-100 px-4 py-2">
            <h3 class="text-xl font-bold mb-2">$1,010</h3>
            <p class="text-gray-600">Apr 1, 2023</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Income;

{
  /* <section className="">
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
</section> */
}
