import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import { saveShippingAddress } from "../actions/cartActions";

import StepsCheckout from "../components/StepsCheckout";

import Loader from "../assets/svg/loader";

function ShippingPage() {
  const [formData, setFormData] = useState(false);

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const dispatch = useDispatch();

  let navigate = useNavigate();

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [phone, setPhone] = useState(shippingAddress.phone);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const [message, setMessage] = useState(shippingAddress.message);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({
        address,
        city,
        phone,
        postalCode,
        country,
        message,
      })
    );
    setTimeout(() => {
      setFormData(false);
    }, 1000);
    navigate("/payment");
  };

  return (
    <>
      <section className="grid place-items-center h-auto xl:px-0 lg:px-0 md:px:0 px-4 pb-24">
        <div className="border-2 border-zinc-200 dark:border-white p-8 xl:mb-28 xl:mt-12 mt-12 mb-12 rounded-lg shadow-lg">
          <StepsCheckout step1 step2 />
          <div className="border-2 border-zinc-200 rounded-md dark:border-white p-8 mt-8">
            <h1 className="text-black dark:text-white text-3xl font-bold mb-2">
              Dirección de envío
            </h1>
            <hr />
            <form className="pt-2" onSubmit={submitHandler}>
              <section className="grid grid-cols-3 gap-4 mt-4">
                <div className="col-span-3 lg:col-span-2 flex flex-col gap-1">
                  <label className="pl-1 text-black dark:text-white text-sm font-bold uppercase tracking-widest">
                    Dirección:
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={address ? address : ""}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Eje: Calle 9 de Julio #123"
                    className="font-bold relative text-black placeholder-zinc-400 dark:placeholder-zinc-800 dark:text-white bg-white dark:bg-black border-2 border-zinc-300 dark:border-zinc-800 rounded-md py-3 pl-4 w-full"
                  />
                </div>
                <div className="col-span-3 lg:col-span-1 flex flex-col gap-1">
                  <label className="pl-1 text-black dark:text-white text-sm font-bold uppercase tracking-widest">
                    Telefono:
                  </label>
                  <input
                    type="phone"
                    id="phone"
                    name="phone"
                    value={phone ? phone : ""}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Eje: 3121234567"
                    className="font-bold relative text-black placeholder-zinc-400 dark:placeholder-zinc-800 dark:text-white bg-white dark:bg-black border-2 border-zinc-300 dark:border-zinc-800 rounded-md py-3 pl-4 w-full"
                  />
                </div>
                <div className="col-span-3 lg:col-span-1 flex flex-col gap-1">
                  <label className="pl-1 text-black dark:text-white text-sm font-bold uppercase tracking-widest">
                    País:
                  </label>
                  <select
                    selected={country ? country : ""}
                    value={country ? country : ""}
                    onChange={(e) => setCountry(e.target.value)}
                    className="font-bold relative text-black placeholder-zinc-400 dark:placeholder-zinc-800 dark:text-white bg-white dark:bg-black border-2 border-zinc-300 dark:border-zinc-800 rounded-md py-3 pl-4 w-full"
                  >
                    <option disabled value="">
                      Seleccione el país
                    </option>
                    <option value="colombia">Colombia</option>
                  </select>
                </div>
                <div className="col-span-3 lg:col-span-1 flex flex-col gap-1">
                  <label className="pl-1 text-black dark:text-white text-sm font-bold uppercase tracking-widest">
                    Ciudad:
                  </label>
                  <select
                    selected={city ? city : ""}
                    value={city ? city : ""}
                    onChange={(e) => setCity(e.target.value)}
                    className="font-bold relative text-black placeholder-zinc-400 dark:placeholder-zinc-800 dark:text-white bg-white dark:bg-black border-2 border-zinc-300 dark:border-zinc-800 rounded-md py-3 pl-4 w-full"
                  >
                    <option disabled value="">
                      Indique su ciudad
                    </option>
                    <option value="popayan">Popayan</option>
                  </select>
                </div>
                <div className="col-span-3 lg:col-span-1 flex flex-col gap-1">
                  <label className="pl-1 text-black dark:text-white text-sm font-bold uppercase tracking-widest">
                    Codigo Postal:
                  </label>
                  <input
                    id="postalCode"
                    name="postalCode"
                    type="number"
                    value={postalCode ? postalCode : ""}
                    onChange={(e) => setPostalCode(e.target.value)}
                    placeholder="Eje: 12345"
                    className="font-bold relative text-black placeholder-zinc-400 dark:placeholder-zinc-800 dark:text-white bg-white dark:bg-black border-2 border-zinc-300 dark:border-zinc-800 rounded-md py-3 pl-4 w-full"
                  />
                </div>
                <div className="col-span-3 lg:col-span-3 flex flex-col gap-1">
                  <label className="pl-1 text-black dark:text-white text-sm font-bold uppercase tracking-widest">
                    Mensaje para el vendedor:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    as="textarea"
                    rows="4"
                    value={message ? message : ""}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Eje: Quiero que te contacten"
                    className="font-bold relative text-black placeholder-zinc-400 dark:placeholder-zinc-800 dark:text-white bg-white dark:bg-black border-2 border-zinc-300 dark:border-zinc-800 rounded-md py-3 pl-4 w-full"
                  />
                </div>
                <div className="col-span-3 lg:col-span-3 flex flex-col gap-1">
                  <button
                    type="submit"
                    className="bg-black dark:bg-white w-full rounded-lg"
                  >
                    {!formData && (
                      <h1 className="text-white dark:text-black text-md font-bold py-4">
                        Continuar
                      </h1>
                    )}
                    {formData && (
                      <Loader className="fill-white dark:fill-black" />
                    )}
                  </button>
                </div>
              </section>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ShippingPage;
