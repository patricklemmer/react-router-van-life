// Imports
// React imports
import React from 'react';
import { Link } from 'react-router-dom';

// Asset imports
import bgImg from '../assets/images/about-hero.jpg';

function About() {
  return (
    <div className="pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div
          className="h-screen md:h-auto bg-cover bg-center md:rounded-md md:ml-6"
          style={{ backgroundImage: `url(${bgImg})` }}
        ></div>
        <section className="pt-6 pb-10 px-4 text-left grid gap-4 sm:max-w-2xl sm:mx-auto">
          <h1 className="font-extrabold text-xl tracking-wider xxs:text-2xl sm:text-4xl">
            Don’t squeeze in a sedan when you could relax in a van.
          </h1>
          <p className="font-medium leading-5 tracking-wide mb-8 xxs:text-md sm:text-lg">
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉){' '}
            <br /> <br />
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
          <div className="bg-orange-400 rounded-md py-6 px-4 mx-auto text-left w-3/4 grid gap-6 xs:gap-8 sm:max-w-md sm:mx-auto">
            <h2 className="text-lg font-bold xs:text-2xl">
              Your destination is waiting.
              <br />
              Your van is ready.
            </h2>
            <Link
              to="/vans"
              className="max-w-1/2 bg-black text-white text-[0.6rem] py-2 px-4 rounded-md font-bold text-center xxs:max-w-[280px] xxs:text-md xs:text-base sm:text-lg"
            >
              Explore our vans
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;

{
  /* <div className="pb-10">
<img src={bgImg} alt="About page Hero image" />
<section className="pt-6 pb-10 px-4 text-left grid gap-4 sm:max-w-2xl sm:mx-auto">
  <h1 className="font-extrabold text-xl tracking-wider xxs:text-2xl sm:text-4xl">
    Don’t squeeze in a sedan when you could relax in a van.
  </h1>
  <p className="font-medium leading-5 tracking-wide mb-8 xxs:text-md sm:text-lg">
    Our mission is to enliven your road trip with the perfect travel van
    rental. Our vans are recertified before each trip to ensure your
    travel plans can go off without a hitch. (Hitch costs extra 😉) <br />{' '}
    <br />
    Our team is full of vanlife enthusiasts who know firsthand the magic
    of touring the world on 4 wheels.
  </p>
</section>
<div className="bg-orange-400 rounded-md py-6 px-4 mx-auto text-left w-3/4 grid gap-6 xs:gap-8 sm:max-w-md sm:mx-auto">
  <h2 className="text-lg font-bold xs:text-2xl">
    Your destination is waiting.
    <br />
    Your van is ready.
  </h2>
  <Link
    to="/vans"
    className="max-w-1/2 bg-black text-white text-[0.6rem] py-2 px-4 rounded-md font-bold text-center xxs:max-w-[280px] xxs:text-md xs:text-base sm:text-lg"
  >
    Explore our vans
  </Link>
</div>
</div> */
}
