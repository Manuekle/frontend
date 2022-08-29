import React from 'react';

import Promotions from '../components/Promotions';
import News from '../components/News';
import Sell from '../components/Sell';

function HomePage() {
  return (
    <section className="container mx-auto">
      <div>
        <Promotions />
      </div>
      <div>
        <News />
      </div>
      <div>
        <Sell />
      </div>
    </section>
  );
}

export default HomePage;
