/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import StepsCheckout from '../components/StepsCheckout';
import { savePaymentMethod } from '../actions/cartActions';

import Loader from '../assets/svg/loader';

import Paypal from '../assets/svg/ilustrations/paypal';
import Nequi from '../assets/svg/ilustrations/nequi';

function PaymentPage() {
  const [formData, setFormData] = useState(false);

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const dispatch = useDispatch();

  const [paymentMethod, setPaymentMethod] = useState('');

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    setTimeout(() => {
      setFormData(false);
    }, 1000);
    navigate('/placeorder');
  };

  return (
    <section className="grid place-items-center h-auto xl:px-0 lg:px-0 md:px:0 px-4 pb-24">
      <div className="bg-light-200 dark:bg-dark-200 p-8 xl:mb-28 xl:mt-12 mt-12 mb-12 rounded-lg shadow-lg">
        <StepsCheckout step1 step2 step3 />
        <div className="border-2 border-zinc-200 rounded-md dark:border-zinc-800 p-8 mt-8">
          <h1 className="text-black dark:text-white text-3xl font-bold mb-2">
            Selecciona el método de pago
          </h1>
          <hr className="border-zinc-200 dark:border-zinc-800 border-1 rounded-full" />
          <form className="pt-2" onSubmit={submitHandler}>
            <section className="grid grid-cols-3 gap-4 mt-4 ">
              <div className="col-span-3 lg:col-span-1 border-2 border-zinc-200 dark:border-zinc-800 rounded-md p-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="PayPal"
                  selected
                  className="cursor-pointer"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <label className="flex items-center">Paypal</label>
              </div>
              <div className="col-span-3 lg:col-span-1 border-2 border-zinc-200 dark:border-zinc-800 rounded-md p-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Nequi"
                  disabled
                  className="cursor-pointer"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <label className="flex items-center">Nequi</label>
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
  );
}

export default PaymentPage;
