// Imports
// React imports
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container pt-8 pb-10 px-4 text-left text-white xxs:pt-8 xxs:pb-12 xxs:px-8 sm:pt-10 sm:pb-14 sm:px-10">
      <section className="grid gap-4 sm:max-w-2xl sm:mx-auto">
        <h1 className="font-extrabold text-xl tracking-wider xxs:text-2xl sm:text-4xl">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="font-medium leading-5 tracking-wide mb-8 xxs:text-md sm:text-lg">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <div className="flex justify-center items-center max-w-8/12 mx-auto xxs:w-8/12">
          <Link
            to="vans"
            className="w-full bg-amber-500 py-2 px-4 rounded-md font-bold text-center xxs:text-lg sm:text-xl"
          >
            Find your van
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
