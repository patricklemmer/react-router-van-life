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
import { getVan } from '../../api/firebase';

export function loader({ params }) {
  return defer({ van: getVan(params.id) });
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
      <Link
        to=".."
        relative="path"
        className="back-button flex justify-start font-bold ml-4 mb-4 sm:ml-12 sm:mb-12"
      >
        &larr; <span className="ml-2">Back to all vans</span>
      </Link>

      <Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={loaderData.van}>
          {(currentVan) => (
            <div className=" py-6 px-3 flex flex-col max-w-3xl mx-auto sm:px-6 lg:px-8">
              <img src={currentVan.imageUrl} className="rounded-md mb-6" />
              <i
                className={`van-type van-type-${currentVan.type} mb-6 max-w-[100px] sm:max-w-[200px]`}
              >
                {currentVan.type}
              </i>
              <h3 className="text-xl font-bold text-left mb-4">
                {currentVan.name}
              </h3>
              <h4 className="van-price text-left mb-3">
                <span className="font-bold">{currentVan.price}€</span>/day
              </h4>

              <nav className="mt-6 mb-4 grid gap-2 items-center justify-center text-sm opacity-80 xxs:flex xxs:gap-4 sm:gap-10 sm:max-w-xl sm:mx-auto">
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
