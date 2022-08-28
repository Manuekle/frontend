/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import { saveShippingAddress } from '../actions/cartActions';

import StepsCheckout from '../components/StepsCheckout';

import Loader from '../assets/svg/loader';

function ShippingPage() {
  const [formData, setFormData] = useState(false);

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const dispatch = useDispatch();

  const navigate = useNavigate();

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
        message
      })
    );
    setTimeout(() => {
      setFormData(false);
    }, 1000);
    navigate('/payment');
  };

  return (
    <section className="grid place-items-center h-auto xl:px-0 lg:px-0 md:px:0 px-4 pb-24">
      <div className="bg-light-200 dark:bg-dark-200 p-8 xl:mb-28 xl:mt-12 mt-12 mb-12 rounded-lg shadow-lg">
        <StepsCheckout step1 step2 />
        <div className="border-2 border-zinc-200 rounded-md dark:border-zinc-800 p-8 mt-8">
          <h1 className="text-black dark:text-white text-3xl font-bold mb-2">
            Dirección de envío
          </h1>
          <hr className="border-zinc-200 dark:border-zinc-800 border-1 rounded-full" />
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
                  value={address || ''}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Eje: Calle 9 de Julio #123"
                  className="font-bold relative text-black placeholder-zinc-400 dark:placeholder-zinc-400 dark:text-white bg-zinc-200 dark:bg-zinc-800 rounded-md py-3 pl-4 w-full"
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
                  value={phone || ''}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Eje: 3121234567"
                  className="font-bold relative text-black placeholder-zinc-400 dark:placeholder-zinc-400 dark:text-white bg-zinc-200 dark:bg-zinc-800 rounded-md py-3 pl-4 w-full"
                />
              </div>
              <div className="col-span-3 lg:col-span-1 flex flex-col gap-1">
                <label className="pl-1 text-black dark:text-white text-sm font-bold uppercase tracking-widest">
                  País:
                </label>
                <select
                  selected={country || ''}
                  value={country || ''}
                  onChange={(e) => setCountry(e.target.value)}
                  className="font-bold relative text-black placeholder-zinc-400 dark:placeholder-zinc-400 dark:text-white bg-zinc-200 dark:bg-zinc-800 rounded-md py-3 pl-4 w-full"
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
                  selected={city || ''}
                  value={city || ''}
                  onChange={(e) => setCity(e.target.value)}
                  className="font-bold relative text-black placeholder-zinc-400 dark:placeholder-zinc-400 dark:text-white bg-zinc-200 dark:bg-zinc-800 rounded-md py-3 pl-4 w-full"
                >
                  <option disabled value="">
                    Indique su ciudad
                  </option>
                  <option value="Aguachica">Aguachica</option>
                  <option value="Apartado">Apartadó</option>
                  <option value="Arauca">Arauca</option>
                  <option value="Armenia">Armenia</option>
                  <option value="Barrancabermeja">Barrancabermeja</option>
                  <option value="Barranquilla">Barranquilla</option>
                  <option value="Bello">Bello</option>
                  <option value="Bogotá">Bogotá D.C.</option>
                  <option value="Bucaramanga">Bucaramanga</option>
                  <option value="Buenaventura">Buenaventura</option>
                  <option value="Buga">Buga</option>
                  <option value="Cali">Cali</option>
                  <option value="Cartago">Cartago</option>
                  <option value="Cartagena">Cartagena</option>
                  <option value="Caucasia">Caucasia</option>
                  <option value="Cerete">Cereté</option>
                  <option value="Chia">Chia</option>
                  <option value="Cienaga">Ciénaga</option>
                  <option value="Cucuta">Cúcuta</option>
                  <option value="Dosquebradas">Dosquebradas</option>
                  <option value="Duitama">Duitama</option>
                  <option value="Envigado">Envigado</option>
                  <option value="Facatativa">Facatativá</option>
                  <option value="Florencia">Florencia</option>
                  <option value="Floridablanca">Floridablanca</option>
                  <option value="Fusagasuga">Fusagasugá</option>
                  <option value="Girardot">Girardot</option>
                  <option value="Giron">Girón</option>
                  <option value="Ibague">Ibagué</option>
                  <option value="Ipiales">Ipiales</option>
                  <option value="Itagui">Itagüí</option>
                  <option value="Jamundi">Jamundí</option>
                  <option value="Lorica">Lorica</option>
                  <option value="Los Patios">Los Patios</option>
                  <option value="Magangue">Magangué</option>
                  <option value="Maicao">Maicao</option>
                  <option value="Malambo">Malambo</option>
                  <option value="Manizales">Manizales</option>
                  <option value="Medellin">Medellín</option>
                  <option value="Melgar">Melgar</option>
                  <option value="Monteria">Montería</option>
                  <option value="Neiva">Neiva</option>
                  <option value="Ocana">Ocaña</option>
                  <option value="Paipa">Paipa</option>
                  <option value="Palmira">Palmira</option>
                  <option value="Pamplona">Pamplona</option>
                  <option value="Pasto">Pasto</option>
                  <option value="Pereira">Pereira</option>
                  <option value="Piedecuesta">Piedecuesta</option>
                  <option value="Pitalito">Pitalito</option>
                  <option value="Popayan">Popayán</option>
                  <option value="Quibdo">Quibdó</option>
                  <option value="Riohacha">Riohacha</option>
                  <option value="Rionegro">Rionegro</option>
                  <option value="Sabanalarga">Sabanalarga</option>
                  <option value="Sahagun">Sahagún</option>
                  <option value="Santa Marta">Santa Marta</option>
                  <option value="Sincelejo">Sincelejo</option>
                  <option value="Soacha">Soacha</option>
                  <option value="Sogamoso">Sogamoso</option>
                  <option value="Soledad">Soledad</option>
                  <option value="Tibu">Tibú</option>
                  <option value="Tulua">Tuluá</option>
                  <option value="Tumaco">Tumaco</option>
                  <option value="Tunja">Tunja</option>
                  <option value="Turbo">Turbo</option>
                  <option value="Valledupar">Valledupar</option>
                  <option value="Villa de Leyva">Villa de leyva</option>
                  <option value="Villa del Rosario">Villa del Rosario</option>
                  <option value="Villavicencio">Villavicencio</option>
                  <option value="Yopal">Yopal</option>
                  <option value="Zipaquira">Zipaquirá</option>
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
                  value={postalCode || ''}
                  onChange={(e) => setPostalCode(e.target.value)}
                  placeholder="Eje: 12345"
                  className="font-bold relative text-black placeholder-zinc-400 dark:placeholder-zinc-400 dark:text-white bg-zinc-200 dark:bg-zinc-800 rounded-md py-3 pl-4 w-full"
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
                  value={message || ''}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Eje: Quiero que te contacten"
                  className="font-bold relative text-black placeholder-zinc-400 dark:placeholder-zinc-400 dark:text-white bg-zinc-200 dark:bg-zinc-800 rounded-md py-3 pl-4 w-full"
                />
              </div>
              <div className="col-span-3 lg:col-span-3 flex flex-col gap-1">
                <button
                  type="submit"
                  className="bg-zinc-300 dark:bg-zinc-800 w-full rounded-lg"
                >
                  {!formData && (
                    <h1 className="text-black dark:text-white text-md font-bold py-4">
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
  );
}

export default ShippingPage;
