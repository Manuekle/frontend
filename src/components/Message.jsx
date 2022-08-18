/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

import { Link } from 'react-router-dom';

import Check from '../assets/svg/check';

function Message() {
  return (
    <>
      <section className="bg-emerald-600 p-2 py-4">
        <div className="grid grid-cols-3 gap-2 px-4">
          <div className="col-span-2 flex flex-row  gap-2">
            <span className="flex items-center">
              <Check fill="white" />
            </span>
            <span className="text-md font-bold text-white flex items-cente">
              ¡Articulo añadido a su cesta!
            </span>
          </div>
          <div className="col-span-1 flex justify-end items-center">
            <Link
              to="/cart"
              className="text-white text-sm font-normal border-b hover:border-b-white border-b-gray-300"
            >
              Ver carrito
            </Link>
          </div>
        </div>
        {/* ¡Articulo añadido a su cesta! */}
      </section>
    </>
  );
}

export default Message;
