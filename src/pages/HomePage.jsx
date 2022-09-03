import React from 'react';

import Promotions from '../components/Promotions';
import News from '../components/News';
import Sell from '../components/Sell';
import Sections from '../components/Sections';
import Best from '../components/Best';

function HomePage() {
  return (
    <section className="container mx-auto mb-20">
      <div>
        <Promotions />
      </div>
      <div>
        <News />
      </div>
      <div>
        <Best />
      </div>
      <div>
        <Sections />
      </div>
      <div>
        <Sell />
      </div>
    </section>
  );
}

export default HomePage;
