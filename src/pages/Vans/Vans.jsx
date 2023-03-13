// Imports
// React imports
import React, { useState, Suspense } from 'react';
import {
  Link,
  useSearchParams,
  useLoaderData,
  defer,
  Await,
} from 'react-router-dom';

// Other imports
import { getVans } from '../../api';

export function loader() {
  return defer({ vans: getVans() });
}

function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dataPromise = useLoaderData();

  const typeFilter = searchParams.get('type');

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  function renderVanElements(vans) {
    const displayedVans = typeFilter
      ? vans.filter((van) => van.type === typeFilter)
      : vans;

    const vanElements = displayedVans.map((van) => {
      return (
        <div key={van.id} className="van-card grid justify-items-start">
          <Link
            to={`${van.id}/${van.name}`}
            state={{
              search: `?${searchParams.toString()}`,
              type: typeFilter,
            }}
          >
            <img
              src={van.imageUrl}
              alt="Van image"
              className="rounded-md mb-2"
            />
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
      <>
        <div className="flex flex-wrap gap-2 text-sm justify-center mb-6">
          <button
            onClick={() => handleFilterChange('type', 'simple')}
            className={`van-type simple ${
              typeFilter === 'simple' ? 'selected' : ''
            }`}
          >
            Simple
          </button>
          <button
            onClick={() => handleFilterChange('type', 'rugged')}
            className={`van-type rugged ${
              typeFilter === 'rugged' ? 'selected' : ''
            }`}
          >
            Rugged
          </button>
          <button
            onClick={() => handleFilterChange('type', 'luxury')}
            className={`van-type luxury ${
              typeFilter === 'luxury' ? 'selected' : ''
            }`}
          >
            Luxury
          </button>
          {/* Renders "Clear filter" btn only of any filter is currently applied */}
          {typeFilter ? (
            <button onClick={() => handleFilterChange('type', null)}>
              Clear filter
            </button>
          ) : null}
        </div>
        <div className="grid grid-cols-1 gap-6 xs:grid-cols-2 xs:gap-8 md:grid-cols-3 md:gap-10">
          {vanElements}
        </div>
      </>
    );
  }

  return (
    <div className="pt-8 pb-12 px-5 sm:pt-16 sm:max-w-4xl sm:mx-auto">
      <h1 className="text-left font-extrabold text-lg mb-6 xxs:text-xl xs:text-2xl xs:mb-7 sm:text-4xl sm:mb-10">
        Explore our van options
      </h1>
      <Suspense fallback={<h2>Loading vans...</h2>}>
        <Await resolve={dataPromise.vans}>{renderVanElements}</Await>
      </Suspense>
    </div>
  );
}

export default Vans;
