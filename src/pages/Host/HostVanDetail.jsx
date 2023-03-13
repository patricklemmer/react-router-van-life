// Imports
// React imports
import React, { Suspense } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  defer,
  Await,
  useLoaderData,
} from 'react-router-dom';

// Data import
import { getHostVans } from '../../api';

export function loader({ params }) {
  return defer({ van: getHostVans(params.id) });
}

function HostVanDetail() {
  const loaderData = useLoaderData();

  const activeStyles = {
    color: '#161616',
    textDecoration: 'underline',
    fontWeight: 'bold',
    opacity: 1,
  };

  return (
    <section className="p-4 grid">
      <Link to=".." relative="path" className="back-button flex justify-start">
        &larr; <span>Back to all vans</span>
      </Link>

      <Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={loaderData.van}>
          {(currentVan) => (
            <div className="host-van-detail-layout-container">
              <div className="host-van-detail flex">
                <img src={currentVan.imageUrl} className="w-1/2" />
                <div className="host-van-detail-info-text">
                  <i className={`van-type van-type-${currentVan.type}`}>
                    {currentVan.type}
                  </i>
                  <h3>{currentVan.name}</h3>
                  <h4>{currentVan.price}€/day</h4>
                </div>
              </div>

              <nav className="mt-6 mb-4 grid gap-2 items-center justify-start text-sm opacity-80 xxs:flex xxs:gap-4 sm:gap-10 sm:max-w-xl sm:mx-auto">
                <NavLink
                  to="."
                  end
                  className="py-1 px-2 rounded-md font-bold opacity-70 xs:py-2 xs:px-4"
                  style={({ isActive }) => (isActive ? activeStyles : null)}
                >
                  Details
                </NavLink>
                <NavLink
                  to="pricing"
                  className="py-1 px-2 rounded-md font-bold opacity-70 xs:py-2 xs:px-4"
                  style={({ isActive }) => (isActive ? activeStyles : null)}
                >
                  Pricing
                </NavLink>
                <NavLink
                  to="photos"
                  className="py-1 px-2 rounded-md font-bold opacity-70 xs:py-2 xs:px-4"
                  style={({ isActive }) => (isActive ? activeStyles : null)}
                >
                  Photos
                </NavLink>
              </nav>
              <Outlet context={{ currentVan }} />
            </div>
          )}
        </Await>
      </Suspense>
    </section>
  );
}

export default HostVanDetail;
