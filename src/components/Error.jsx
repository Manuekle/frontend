/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

import { Link } from 'react-router-dom';

import Server from '../assets/svg/ilustrations/errorServer';

function Error() {
  return (
    <>
      <section className="rounded-lg border-2 border-black dark:border-white p-8">
        <div className="grid grid-cols-2 lg:gap-1 gap-4">
          <span className="col-span-2 lg:col-span-1 flex flex-col gap-2">
            <h1 className="text-black dark:text-white font-bold text-6xl">
              Oops!
            </h1>
            <h1 className="text-black dark:text-white font-bold text-xl">
              Bueno, esto es inesperado...
            </h1>
            <h1 className="text-black dark:text-white font-bold text-sm">
              Error 500
            </h1>
            <h1 className="text-black dark:text-white font-normal text-sm">
              ¡Se ha producido un error y estamos trabajando para solucionarlo!
              <br />
              Estaremos en funcionamiento en breve.
            </h1>
            <Link to="/">
              <button className="bg-black dark:bg-white text-white font-bold py-2 px-4 rounded-lg">
                <h1 className="text-white dark:text-black">
                  Volver a la página principal
                </h1>
              </button>
            </Link>
          </span>
          <span className="col-span-2 lg:col-span-1 flex justify-center items-center">
            {/* <h1 className="text-black dark:text-white font-bold text-lg">
              Bueno, esto es inesperado.
            </h1> */}
            <Server className="fill-black dark:fill-white" />
          </span>
        </div>
      </section>
    </>
  );
}

export default Error;
