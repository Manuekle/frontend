import React from "react";

import { Link } from "react-router-dom";

import UserShipping from "../assets/svg/userShipping";
import Locate from "../assets/svg/locate";
import Coin from "../assets/svg/coin";
import Card from "../assets/svg/card";
import Bill from "../assets/svg/bill";
import ShippingTime from "../assets/svg/shippingTime";

function StepsCheckout({ step1, step2, step3, step4 }) {
  return (
    <>
      <section className="p-2 flex flex-row gap-20 justify-center">
        {/* login */}
        <div className="grid grid-cols-1 place-items-center gap-3">
          {step1 ? (
            <>
              <span className="col-span-1 bg-green-600 py-2 px-2 rounded-full">
                <UserShipping className="fill-white" />
              </span>
              <span className="col-span-1">
                <h1 className="text-black dark:text-white font-bold text-sm">
                  Iniciar Sesión
                </h1>
              </span>
            </>
          ) : (
            <>
              <span className="col-span-1 bg-black dark:bg-white py-2 px-2 rounded-full">
                <UserShipping className="fill-white dark:fill-zinc-800" />
              </span>
              <span className="col-span-1">
                <h1 className="text-zinc-400 dark:text-zinc-400 font-bold text-sm">
                  Iniciar Sesión
                </h1>
              </span>
            </>
          )}
        </div>

        {/* locate */}
        <div className="grid place-items-center gap-3">
          {step2 ? (
            <>
              <span className="col-span-1 bg-green-600 py-2 px-2 rounded-full">
                <Locate className="fill-white" />
              </span>
              <span className="col-span-1">
                <Link
                  to="/shipping"
                  className="text-black dark:text-white font-bold text-sm"
                >
                  Dirección de envío
                </Link>
              </span>
            </>
          ) : (
            <>
              <span className="col-span-1 bg-black dark:bg-white py-2 px-2 rounded-full">
                <Locate className="fill-white dark:fill-zinc-800" />
              </span>
              <span className="col-span-1">
                <h1 className="text-zinc-400 dark:text-zinc-400 font-bold text-sm">
                  Dirección de envío
                </h1>
              </span>
            </>
          )}
        </div>

        {/* payment */}
        <div className="grid place-items-center gap-3">
          {step3 ? (
            <>
              <span className="col-span-1 bg-green-600 py-2 px-2 rounded-full">
                <Card className="fill-white" />
              </span>
              <span className="col-span-1">
                <Link
                  to="/payment"
                  className="text-black dark:text-white font-bold text-sm"
                >
                  Método de pago
                </Link>
              </span>
            </>
          ) : (
            <>
              <span className="col-span-1 bg-black dark:bg-white py-2 px-2 rounded-full">
                <Card className="fill-white dark:fill-zinc-800" />
              </span>
              <span className="col-span-1">
                <h1 className="text-zinc-400 dark:text-zinc-400 font-bold text-sm">
                  Método de pago
                </h1>
              </span>
            </>
          )}
        </div>

        {/* bill */}
        <div className="grid place-items-center gap-3">
          {step4 ? (
            <>
              <span className="col-span-1 bg-green-600 py-2 px-2 rounded-full">
                <ShippingTime className="fill-white" />
              </span>
              <span className="col-span-1">
                <h1 className="text-black dark:text-white font-bold text-sm">
                  Realizar pedido
                </h1>
              </span>
            </>
          ) : (
            <>
              <span className="col-span-1 bg-black dark:bg-white py-2 px-2 rounded-full">
                <ShippingTime className="fill-white dark:fill-zinc-800" />
              </span>
              <span className="col-span-1">
                <h1 className="text-zinc-400 dark:text-zinc-400 font-bold text-sm">
                  Realizar pedido
                </h1>
              </span>
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default StepsCheckout;
