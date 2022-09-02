/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import NormaSection from './NormaSection';
import IvreaSection from './IvreaSection';
import PaniniSection from './PaniniSection';
import EccSection from './EccSection';
import KamiteSection from './KamiteSection';

function Sections() {
  return (
    <>
      <section className="flex flex-col pt-20 px-4 lg:px-0">
        <h1 className="flex text-zinc-800 dark:text-zinc-100 text-4xl capitalize font-bold justify-start">
          Las mejores editoriales
        </h1>
        <div className="grid grid-cols-5 gap-8 pt-10">
          <div className="col-span-5 lg:col-span-1">
            <NormaSection />
          </div>
          <div className="col-span-5 lg:col-span-1">
            <IvreaSection />
          </div>
          <div className="col-span-5 lg:col-span-1">
            <PaniniSection />
          </div>{' '}
          <div className="col-span-5 lg:col-span-1">
            <EccSection />
          </div>
          <div className="col-span-5 lg:col-span-1">
            <KamiteSection />
          </div>
        </div>
      </section>
    </>
  );
}

export default Sections;
