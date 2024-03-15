import { useState } from "react";
import Hero from "../../ui/Hero/Hero";
import NewArrivalsHero from "../../ui/Hero/NewArrivalsHero";
import Racquets from "../../ui/Hero/Racquets/Racquets";

function Home() {
  return (
    <div>
      <Hero />
      <NewArrivalsHero />
      <Racquets />
    </div>
  );
}

export default Home;
