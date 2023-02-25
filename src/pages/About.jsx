// Imports
// React imports
import React from 'react';
import { Link } from 'react-router-dom';

// Asset imports
import bgImg from '../assets/images/about-hero.jpg';

function About() {
  return (
    <div>
      <img src={bgImg} alt="About page Hero image" />
      <section className="w-3/4 mx-auto grid gap-6 py-12 px-2 mb-4 text-left xxs:mb-2 xs:px-4 xs:max-w-screen-md">
        <h1 className="text-3xl font-extrabold leading-7 sm:text-4xl">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <p className="font-medium leading-6 sm:text-lg">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p className="font-medium leading-6 sm:text-lg">
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
      </section>
      <div className="w-3/4 mx-auto flex flex-col gap-6 py-6 px-4 bg-skin-bg-about-cta rounded-md xs:max-w-[600px] xxs:gap-8 xs:py-8 xs:px-6">
        <div className="text-left font-semibold leading-7 xxs:text-xl sm:text-2xl">
          <h2>Your destination is waiting.</h2>
          <h2>Your van is ready.</h2>
        </div>
        <div className="text-left">
          <Link
            to="/vans"
            className="text-white text-[0.7rem] py-2 px-4 rounded-md bg-black cursor-pointer xxs:text-sm xs:text-base sm:text-lg"
          >
            Explore our vans
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
