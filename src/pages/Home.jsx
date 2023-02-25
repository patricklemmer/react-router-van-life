// Imports
// React imports
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container min-h-[350px] flex flex-col gap-8 text-white py-8 px-4">
      <section className="text-left flex flex-col gap-4 xs:max-w-[600px] xs:mx-auto">
        <h1 className="text-2xl font-extrabold leading-7 sm:text-4xl">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="font-medium leading-6 sm:text-lg">
          Add adventure to your life by joining the #vanlife movement. <br />
          Rent the perfect van to make your perfect road trip.
        </p>
      </section>
      <div>
        <Link
          to="vans"
          className="text-white text-[0.9rem] inline-block w-full font-bold py-2 px-4 rounded-md bg-skin-bg-accent cursor-pointer xxs:text-sm xxs:max-w-[250px] xs:max-w-[350px] xs:text-base sm:text-lg"
        >
          Find your van
        </Link>
      </div>
    </div>
  );
}

export default Home;
