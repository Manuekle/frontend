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
        <section className="absolute bg-white dark:bg-dark-200 top-0 right-0 flex justify-center h-full rounded-l-xl">
          <div className="flex flex-col">
            <div className="grid grid-cols-2 p-5">
              <div className="col-span-1 flex justify-start gap-3 items-center">
                <span>
                  <Search className="text-black dark:text-white" />
                </span>
                <input
                  type="text"
                  className="text-md font-bold text-black dark:text-white bg-transparent outline-none"
                  placeholder="¿Que buscas?"
                />
              </div>
              <div className="col-span-1 flex justify-end items-center pt-2">
                <span>
                  <button
                    type="button"
                    className="relative"
                    onClick={props.onClick}
                  >
                    <Close className="fill-black dark:fill-white" />
                  </button>
                </span>
              </div>
            </div>
            <hr className="border-zinc-200 dark:border-zinc-800 border-1 rounded-full" />
            {/* Empty */}
            <section className="mt-80 flex items-center justify-center" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Searcher;
