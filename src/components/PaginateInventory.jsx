/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React from 'react';

import { Link } from 'react-router-dom';
import Arrow from '../assets/svg/arrow';

function PaginateInventory({ pages, page, keyword }) {
  if (keyword) {
    keyword = keyword.split('?keyword=')[1].split('&')[0];
  }

  return (
    pages > 1 && (
      <div className="flex flex-row justify-center items-centered gap-4 pt-8 pb-6">
        {/* previus */}
        {page > 1 && (
          <Link
            to={`/dashboard/inventory/?keyword=${keyword}&page=${page - 1}`}
          >
            <button className="bg-zinc-200 dark:bg-zinc-800 p-4 rounded-lg shadow-lg">
              <Arrow className="dark:fill-white fill-black" />
            </button>
          </Link>
        )}
        {/* number of pages */}
        {[...Array(pages).keys()].map((x) => (
          <Link
            to={`/dashboard/inventory/?keyword=${keyword}&page=${x + 1}`}
            key={x + 1}
            className={`bg-zinc-200 dark:bg-zinc-800 p-4 rounded-lg shadow-lg ${
              x + 1 === page ? 'bg-zinc-400 dark:bg-dark-100' : ''
            }`}
          >
            <h1 className="font-bold dark:text-white text-black px-2">
              {x + 1}
            </h1>
          </Link>
        ))}
        {/* next */}
        {page < pages && (
          <Link
            to={`/dashboard/inventory/?keyword=${keyword}&page=${page + 1}`}
          >
            <button className="bg-zinc-200 dark:bg-zinc-800 p-4 rounded-lg shadow-lg">
              <Arrow
                className="dark:fill-white fill-black"
                style={{
                  transform: 'rotate(180deg)'
                }}
              />
            </button>
          </Link>
        )}
      </div>
    )
  );
}

export default PaginateInventory;
