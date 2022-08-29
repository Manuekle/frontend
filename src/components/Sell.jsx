/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';

import CartSell from '../assets/svg/cartSell';
import Delivery from '../assets/svg/delivery';
import Pay from '../assets/svg/pay';
import Truck from '../assets/svg/truck';

function Sell() {
  return (
    <>
      <section className="flex flex-col pt-20">
        <h1 className="flex text-black dark:text-white text-4xl font-bold justify-center">
          ¿CÓMO COMPRAR?
        </h1>
        <div className="grid grid-cols-4 gap-12 pt-20 lg:px-40 px-4">
          <div className="lg:col-span-1 flex flex-col gap-4">
            <span className="flex justify-center">
              <CartSell className="fill-black dark:fill-white" />
            </span>
            <h2 className="text-black dark:text-white text-2xl font-bold text-center">
              HAZ TU PEDIDO
            </h2>
            <p className="text-black dark:text-white text-base text-center">
              Añade tus productos favoritos a tu carrito de compras
            </p>
          </div>
          <div className="lg:col-span-1 flex flex-col gap-4 ">
            <span className="flex justify-center">
              <Pay className="fill-black dark:fill-white" />
            </span>
            <h2 className="text-black dark:text-white text-2xl font-bold text-center">
              REALIZA EL PAGO
            </h2>
            <p className="text-black dark:text-white text-base text-center">
              Haz el pago mediante transferencia bancaria o PayPal
            </p>
          </div>
          <div className="lg:col-span-1 flex flex-col gap-4 ">
            <span className="flex justify-center">
              <Truck className="fill-black dark:fill-white" />
            </span>
            <h2 className="text-black dark:text-white text-2xl font-bold text-center">
              HACEMOS EL ENVÍO
            </h2>
            <p className="text-black dark:text-white text-base text-center">
              Mediante Empresas de Mensajería
            </p>
          </div>
          <div className="lg:col-span-1 flex flex-col gap-4 ">
            <span className="flex justify-center">
              <Delivery className="fill-black dark:fill-white" />
            </span>
            <h2 className="text-black dark:text-white text-2xl font-bold text-center">
              RECIBE TU COMPRA
            </h2>
            <p className="text-black dark:text-white text-base text-center">
              ¡Y disfrútala!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sell;
