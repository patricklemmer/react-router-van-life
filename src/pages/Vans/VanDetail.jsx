// Imports
// React imports
import React, { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';

function VanDetail() {
  const params = useParams();
  const location = useLocation();
  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  const search = location.state?.search || '';
  const type = location.state?.type || 'all';

  return (
    <div className="van-detail-container">
      <Link
        to={`../..${search}`}
        relative="path"
        className="back-button flex justify-start"
      >
        &larr; <span>Back to {type} vans</span>
      </Link>
      {van ? (
        <div className="py-6 px-3 flex flex-col sm:max-w-2xl sm:mx-auto">
          <img src={van.imageUrl} className="rounded-md mb-6" />
          <i className={`van-type ${van.type} selected mb-6 max-w-[100px]`}>
            {van.type}
          </i>
          <h2 className="text-xl font-bold text-left mb-4">{van.name}</h2>
          <p className="van-price text-left mb-3">
            <span className="font-bold">{van.price}€</span>/day
          </p>
          <p className="text-justify leading-6 mb-6">{van.description}</p>
          <button className="link-button max-w-1/2 bg-orange-500 text-white text-[0.9rem] py-2 px-4 rounded-md font-bold text-center xxs:max-w-[280px] xxs:text-md xs:text-base sm:text-lg">
            Rent this van
          </button>
        </div>
      ) : (
        <h2 className="min-h-screen text-left font-bold text-4xl px-6 py-8">
          Loading...
        </h2>
      )}
    </div>
  );
}

export default VanDetail;
