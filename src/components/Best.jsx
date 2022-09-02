/* eslint-disable react/self-closing-comp */
import React from 'react';

function Best() {
  const img = 'https://pbs.twimg.com/media/FOuv4FWUcAES64P.jpg';
  return (
    <section className="flex flex-col pt-20">
      <h1 className="flex text-zinc-800 dark:text-zinc-100 text-4xl capitalize font-bold justify-start">
        Descubre lo mejor
      </h1>
      <div className="grid grid-cols-6 gap-8 px-16 pt-10">
        <div className="col-span-3 rounded-md bg-dark-200 shadow-lg">
          <div className="grid grid-cols-2">
            <div className="col-span-1 flex justify-start p-8 relative">
              <span className="flex flex-col gap-7">
                <h1 className="text-zinc-800 tracking-widest dark:text-zinc-300 font-bold uppercase">
                  Por compras superiores a $150.000
                </h1>
                <p className="text-zinc-300 uppercase tracking-widest dark:text-zinc-100 font-bold text-3xl">
                  MANGAS HASTA UN 5% OFF
                </p>
                <span className="flex justify-start">
                  <button
                    type="button"
                    className="bg-sky-500 rounded-md px-10 py-2"
                  >
                    <h1 className="text-zinc-50 font-bold text-xs">Ver más</h1>
                  </button>
                </span>
              </span>
            </div>
            <div className="col-span-1 flex justify-end">
              <img
                src={img}
                alt="Libros hasta un 30% off"
                className="rounded-r-md object-cover"
              />
            </div>
          </div>
        </div>
        <div className="col-span-3 rounded-md bg-dark-200 shadow-lg">
          <div className="grid grid-cols-2">
            <div className="col-span-1 flex justify-start p-8 relative">
              <span className="flex flex-col gap-7">
                <h1 className="text-zinc-800 tracking-widest dark:text-zinc-300 font-bold uppercase">
                  Por compras superiores a $300.000
                </h1>
                <p className="text-zinc-300 uppercase tracking-widest dark:text-zinc-100 font-bold text-3xl">
                  MANGAS HASTA UN 10% OFF
                </p>
                <span className="flex justify-start">
                  <button
                    type="button"
                    className="bg-sky-500 rounded-md px-10 py-2"
                  >
                    <h1 className="text-zinc-50 font-bold text-xs">Ver más</h1>
                  </button>
                </span>
              </span>
            </div>
            <div className="col-span-1 flex justify-end">
              <img
                src={img}
                alt="Libros hasta un 30% off"
                className="rounded-r-md object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Best;
