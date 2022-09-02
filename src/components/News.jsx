/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/button-has-type */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
/* eslint-disable react/no-array-index-key */
/* eslint-disable func-names */
/* eslint-disable no-underscore-dangle */
/* eslint-disable array-callback-return */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { listProducts } from '../actions/productActions';

import Loader from '../assets/svg/loader';
import Error from './Error';

import Arrow from '../assets/svg/arrow';

import Card from './Card';

function News() {
  const dispatch = useDispatch();
  const location = useLocation();

  const keyword = location.search;

  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;

  const productsWithDate = products
    .map((product) => {
      const date = new Date(product.createdAt);
      const dateString = date.toLocaleDateString();
      return { ...product, createdAt: dateString };
    })
    .reverse();

  const time = new Date();
  const day = time.getDate();
  const month = time.getMonth() + 1;
  const year = time.getFullYear();
  const today = `0${month}/${day}/${year}`;

  const OFFSET_TO_UTC = new Date().getTimezoneOffset();

  const parseDateString = (dateString, sep) => {
    const parts = dateString.split(sep);
    return parts.map((n) => Number(n));
  };

  const localizeDate = (pattern, parts) =>
    pattern.reduce((acc, pat, i) => {
      switch (pat) {
        case 'm':
          return Object.assign(acc, { month: parts[i] });
        case 'd':
          return Object.assign(acc, { day: parts[i] });
        case 'y':
          return Object.assign(acc, { year: parts[i] });
        default:
          return acc;
      }
    }, {});

  const toDate = (localized) =>
    new Date(
      localized.year,
      localized.month - 1,
      localized.day,
      0,
      0 - OFFSET_TO_UTC,
      0
    );

  const parseDate = (pattern, sep, dateString) =>
    toDate(localizeDate(pattern, parseDateString(dateString, sep)));

  const filterByDatePattern = (pattern, sep) =>
    function (createdAt, list) {
      return list.filter((item) => {
        const itemDate = parseDate(pattern, sep, item.createdAt);
        return itemDate >= createdAt;
      });
    };
  const dateNow = parseDate(['m', 'd', 'y'], '/', `${today}`);

  const dias = [
    'domingo',
    'lunes',
    'martes',
    'miércoles',
    'jueves',
    'viernes',
    'sábado'
  ];

  const numeroDia = new Date(today).getDay();

  const nombreDia = dias[numeroDia];

  const dates = parseDate(['m', 'd', 'y'], '/', '08/27/2022');

  const [available, setAvailable] = useState(dates);

  const onlyUSUntil = filterByDatePattern(['m', 'd', 'y'], '/');
  const filter = onlyUSUntil(available, productsWithDate);

  const setDate = () => {
    if (nombreDia === 'martes') {
      setAvailable(dateNow);
    }
  };

  // console.log(available);

  useEffect(() => {
    dispatch(listProducts(keyword));
    setDate();
  }, [dispatch, keyword]);

  // // console.log(filter);
  return (
    <>
      {loading ? (
        <div className="grid place-items-center h-96">
          <Loader
            width="200px"
            height="200px"
            className="fill-black dark:fill-white"
          />
        </div>
      ) : error ? (
        <div className="grid place-items-center h-auto my-8 lg:my-44">
          <Error />
        </div>
      ) : (
        <>
          {filter.length > 0 ? (
            <section className="pt-28 lg:px-0 px-6">
              <div className="grid grid-cols-3 items-center">
                <h1 className="col-span-2 flex justify-start text-zinc-800 dark:text-zinc-100 font-bold lg:text-4xl text-2xl pb-8 capitalize">
                  Novedades de la semana
                </h1>
              </div>
              {/* <div className="relative grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 px-4 xl:px-0">
          {filter.map((product) => (
            <Card product={product} />
          ))}
        </div> */}
              <>
                <Splide
                  hasTrack={false}
                  options={{
                    type: 'loop',
                    pagination: false,
                    perPage: 5,
                    perMove: 1,
                    rewindByDrag: false,
                    speed: 1000,
                    autoplay: true,
                    gap: '2em',
                    arrows: true,
                    fade: true
                  }}
                >
                  <SplideTrack>
                    {filter.map((product) => (
                      <SplideSlide>
                        <Card product={product} />
                      </SplideSlide>
                    ))}
                  </SplideTrack>

                  <div className="splide__arrows grid grid-cols-2">
                    <button className="pt-8 col-span-1 flex justify-start splide__arrow--prev">
                      <Arrow
                        className="dark:fill-white fill-black"
                        style={{
                          transform: 'rotate(360deg)'
                        }}
                      />
                    </button>
                    <button className="pt-8 col-span-1 flex justify-end splide__arrow--next">
                      <Arrow
                        className="dark:fill-white fill-black"
                        style={{
                          transform: 'rotate(180deg)'
                        }}
                      />
                    </button>
                  </div>
                </Splide>
              </>
            </section>
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
}

export default News;
