import React, { Suspense } from 'react';
import { Link, defer, Await, useLoaderData } from 'react-router-dom';
import { BsStarFill } from 'react-icons/bs';
import { getHostVans } from '../../api/firebase';

export function loader() {
  return defer({ vans: getHostVans() });
}

export default function Dashboard() {
  const loaderData = useLoaderData();

  function renderVanElements(vans) {
    const hostVansEls = vans.map((van) => (
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
          <p className="sm:text-lg">${van.price}/day</p>
        </div>
      </div>
    ));

    return (
      <div className="host-vans-list">
        <section>{hostVansEls}</section>
      </div>
    );
  }

  return (
    <>
      <section className="host-dashboard-earnings bg-orange-200 py-8 px-4 md:px-8 lg:px-16 flex justify-between items-center">
        <div className="info">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Welcome!
          </h1>
          <p className="text-sm md:text-base text-gray-600 mb-1">
            Income last <span className="font-semibold">30 days</span>
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">{`$2,260`}</h2>
        </div>
        <Link
          to="income"
          className="text-sm md:text-base text-yellow-900 hover:text-yellow-800 font-medium"
        >
          Details
        </Link>
      </section>
      <section className="host-dashboard-reviews bg-orange-100 py-6 px-4 md:px-8 lg:px-16 flex items-center">
        <h2 className="text-lg md:text-xl font-semibold text-gray-900 mr-2">
          Review score
        </h2>
        <BsStarFill className="star text-yellow-500 text-xl md:text-3xl" />
        <p className="text-base md:text-lg text-gray-600 ml-2">
          <span className="font-semibold">5.0</span>/5
        </p>
        <Link
          to="reviews"
          className="text-sm md:text-base text-yellow-900 hover:text-yellow-800 font-medium ml-auto"
        >
          Details
        </Link>
      </section>
      <section className="host-dashboard-vans py-8 px-4 md:px-8 lg:px-16">
        <div className="top flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Your listed vans
          </h2>
          <Link
            to="vans"
            className="text-sm md:text-base text-yellow-900 hover:text-yellow-800 font-medium"
          >
            View all
          </Link>
        </div>
        <Suspense fallback={<h3>Loading...</h3>}>
          <Await
            resolve={loaderData.vans}
            className="host-vans-list grid gap-6 md:gap-8 lg:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {renderVanElements}
          </Await>
        </Suspense>
      </section>
    </>
  );
}

{
  /* <>
      <section className="host-dashboard-earnings">
        <div className="info">
          <h1>Welcome!</h1>
          <p>
            Income last <span>30 days</span>
          </p>
          <h2>$2,260</h2>
        </div>
        <Link to="income">Details</Link>
      </section>
      <section className="host-dashboard-reviews">
        <h2>Review score</h2>

        <BsStarFill className="star" />

        <p>
          <span>5.0</span>/5
        </p>
        <Link to="reviews">Details</Link>
      </section>
      <section className="host-dashboard-vans">
        <div className="top">
          <h2>Your listed vans</h2>
          <Link to="vans">View all</Link>
        </div>
        <Suspense fallback={<h3>Loading...</h3>}>
          <Await resolve={loaderData.vans}>{renderVanElements}</Await>
        </Suspense>
      </section>
    </> */
}

{
  /* <div className="host-van-single" key={van.id}>
<img src={van.imageUrl} alt={`Photo of ${van.name}`} />
<div className="host-van-info">
  <h3>{van.name}</h3>
  <p>${van.price}/day</p>
</div>
<Link to={`vans/${van.id}`}>View</Link>
</div> */
}
