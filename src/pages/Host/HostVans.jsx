import React, { Suspense } from 'react';
import { Link, defer, useLoaderData, Await } from 'react-router-dom';
import { getHostVans } from '../../api';

export function loader() {
  return defer({ vans: getHostVans() });
}

function HostVans() {
  const loaderData = useLoaderData();

  function renderVanElements(vans) {
    const hostVansEls = vans.map((van) => (
      <Link to={van.id} key={van.id} className="host-van-link-wrapper">
        <div
          className="host-van-single p-4 my-10 mx-4 bg-white rounded-md border border-neutral-100 grid gap-4 xs:flex xs:my-6 xs:mx-12 sm:max-w-xl sm:mx-auto"
          key={van.id}
        >
          <img
            src={van.imageUrl}
            alt={`Photo of ${van.name}`}
            className="rounded-md xs:w-32"
          />
          <div className="host-van-info grid gap-2 text-left xs:flex xs:flex-col xs:flex-grow xs:justify-center xs:items-start xs:gap-0">
            <h3 className="font-bold text-base xs:text-2 sm:text-2xl">
              {van.name}
            </h3>
            <p className="sm:text-lg">{van.price}€/day</p>
          </div>
        </div>
      </Link>
    ));

    return (
      <div className="host-vans-list">
        <section className="pb-2 xs:pb-12">{hostVansEls}</section>
      </div>
    );
  }

  return (
    <section>
      <h1 className="host-vans-title pt-6 px-4 text-xl text-left font-bold xs:text-3xl xs:pt-8 xs:pb-10 sm:text-4xl sm:max-w-2xl sm:mx-auto">
        Your listed vans
      </h1>
      <Suspense fallback={<h2>Loading vans...</h2>}>
        <Await resolve={loaderData.vans}>{renderVanElements}</Await>
      </Suspense>
    </section>
  );
}

export default HostVans;
