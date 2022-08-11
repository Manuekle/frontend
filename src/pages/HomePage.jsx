import React from 'react';

import Landing from "../components/Landing";
import Buy from "../components/Buy";

function HomePage() {
  return (
    <section className="container mx-auto">
      <Landing/>
      <Buy/>
    </section>
  );
}

export default HomePage;