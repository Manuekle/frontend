import React from 'react';

import Promotions from '../components/Promotions';
import News from '../components/News';

function HomePage() {
  return (
    <section className="container mx-auto">
      <div>
        <Promotions />
      </div>
      <div>
        <News />
      </div>
    </section>
  );
}

export default HomePage;
