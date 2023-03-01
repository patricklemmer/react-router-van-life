// Imports
// React imports
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Vans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch('/api/vans')
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vanElements = vans.map((van) => {
    return (
      <div key={van.id} className="van-card grid justify-items-start">
        <Link to={`/vans/${van.id}/${van.name}`}>
          <img src={van.imageUrl} alt="Van image" className="rounded-md mb-2" />
          <div className="grid justify-items-start gap-2 mb-1">
            <h3 className="font-bold xxs:text-lg xs:text-xl">{van.name}</h3>
            <p className="text-[0.9rem] xxs:text-base xs:text-lg">
              {van.price}€<span>/day</span>
            </p>
            <i className={`van-type ${van.type} selected text-sm text-left`}>
              {van.type}
            </i>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <div className="pt-8 pb-12 px-5 sm:pt-16 sm:max-w-4xl sm:mx-auto">
      <h1 className="text-left font-extrabold text-lg mb-6 xxs:text-xl xs:text-2xl xs:mb-7 sm:text-4xl sm:mb-10">
        Explore our van options
      </h1>
      <div className="grid grid-cols-1 gap-6 xs:grid-cols-2 xs:gap-8 md:grid-cols-3 md:gap-10">
        {vanElements}
      </div>
    </div>
  );
}

export default Vans;
