// Imports
// React imports
import React, { Suspense } from 'react';
import {
  Link,
  useLocation,
  defer,
  Await,
  useLoaderData,
} from 'react-router-dom';

// Data imports
// import { getVans } from '../../api';
import { getVan } from '../../api/firebase';

export function loader({ params }) {
  return defer({ van: getVan(params.id) });
}

function VanDetail() {
  const location = useLocation();
  const loaderData = useLoaderData();

  const search = location.state?.search || '';
  const type = location.state?.type || 'all';

  return (
    <div className="van-detail-container">
      <Link
        to={`../..${search}`}
        relative="path"
        className="back-button flex justify-start font-bold ml-4 mb-4 sm:ml-12 sm:mb-12"
      >
        &larr; <span className="ml-2">Back to {type} vans</span>
      </Link>
      <Suspense fallback={<h2>Loading van...</h2>}>
        <Await resolve={loaderData.van}>
          {(van) => (
            <div className="py-6 px-3 flex flex-col max-w-3xl mx-auto sm:px-6 lg:px-8">
              <img src={van.imageUrl} className="rounded-md mb-6" />
              <i
                className={`van-type ${van.type} selected mb-6 max-w-[100px] sm:max-w-[200px]`}
              >
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
          )}
        </Await>
      </Suspense>
    </div>
  );
}

export default VanDetail;

{
  /* <div className="van-detail-container">
<Link
  to={`../..${search}`}
  relative="path"
  className="back-button flex justify-start"
>
  &larr; <span>Back to {type} vans</span>
</Link>
<Suspense fallback={<h2>Loading van...</h2>}>
  <Await resolve={loaderData.van}>
    {(van) => (
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
    )}
  </Await>
</Suspense>
</div> */
}
