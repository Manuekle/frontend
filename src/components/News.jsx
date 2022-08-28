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
import { listProducts } from '../actions/productActions';

import Card from './Card';

function News() {
  const dispatch = useDispatch();
  const location = useLocation();

  const keyword = location.search;

  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;

  // change createdAt from Date to String -
  const productsWithDate = products
    .map((product) => {
      const date = new Date(product.createdAt);
      const dateString = date.toLocaleDateString();
      return { ...product, createdAt: dateString };
    })
    .reverse();

  // console.log(productsWithDate);

  // const [days, setDays] = useState(null);

  const [productFilter, setProductFilter] = useState([]);

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
      localized.month,
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
  const onlyUSUntil = filterByDatePattern(['m', 'd', 'y'], '/');

  // console.log(onlyUSUntil(new Date(dateNow), productsWithDate));

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
  // console.log(numeroDia);

  const nombreDia = dias[numeroDia];
  // console.log(nombreDia);

  const setDate = () => {
    if (nombreDia === 'jueves') {
      // console.log(onlyUSUntil(new Date(dateNow), productsWithDate));
      setProductFilter(onlyUSUntil(new Date(dateNow), productsWithDate));
    } else {
      console.log('No es jueves');
      setProductFilter([]);
    }
  };

  useEffect(() => {
    dispatch(listProducts(keyword));
    setDate();
    // setProductFilter(onlyUSUntil(new Date(days), productsWithDate));
  }, [dispatch, keyword]);

  // console.log(days);
  // console.log(productFilter);

  return (
    <>
      <section className="pt-20 lg:px-0 px-6">
        <div className="grid grid-cols-3 items-center">
          <h1 className="col-span-2 flex justify-start text-white font-bold lg:text-4xl text-2xl pb-8 capitalize">
            Novedades de la semana
          </h1>
          <h1 className="col-span-1 flex justify-end text-zinc-400 font-bold lg:text-sm text-xs pb-8 tracking-wider">
            Ver mas ...
          </h1>
        </div>
        <div className="col-span-12 lg:col-span-9 p-2 h-auto w-auto">
          <div className="relative grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 px-4 xl:px-0">
            {productFilter.map((product) => (
              <Card product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default News;
