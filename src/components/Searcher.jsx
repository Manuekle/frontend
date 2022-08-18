/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import React from 'react';

// Icons
import Search from '../assets/svg/search';
import Close from '../assets/svg/close';

function Searcher(props) {
  return (
    <div>
      <div>
        <section className="absolute bg-white top-0 right-0 flex justify-center h-full border">
          <div className="flex flex-col">
            <div className="grid grid-cols-2 gap-56 border p-5">
              <div className="col-span-1 flex justify-start gap-3 items-center">
                <span>
                  <Search color="black" />
                </span>
                <span>
                  <h1 className="text-md font-normal">¿Que buscas?</h1>
                </span>
              </div>
              <div className="col-span-1 flex justify-end items-center pt-2">
                <span>
                  <button
                    type="button"
                    className="relative"
                    onClick={props.onClick}
                  >
                    <Close fill="black" />
                  </button>
                </span>
              </div>
            </div>
            <hr className="border-zinc-200 dark:border-zinc-800 border-1 rounded-full" />
            {/* Empty */}
            <section className="mt-80 flex items-center justify-center">
              <div className="flex flex-col gap-8">
                <h1 className="text-center text-md font-normal">
                  Su carrito está vacío
                </h1>
                <button className="py-4 px-8 bg-black rounded-md">
                  <h1 className="text-sm font-bold text-white tracking-widest uppercase">
                    Empezar a Comprar
                  </h1>
                </button>
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Searcher;
