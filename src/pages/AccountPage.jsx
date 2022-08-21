/* eslint-disable no-nested-ternary */
/* eslint-disable react/button-has-type */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';

function ProfilePage() {
  const [name, setName] = useState('');

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [phone, setPhone] = useState(shippingAddress.phone);
  const [country, setCountry] = useState(shippingAddress.country);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // console.log(userInfo);

  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    } else {
      setName(userInfo.name);
    }
    // if (!userInfo) {
    //   history.push("/login");
    // } else {
    //   if (!user || !user.name || success || userInfo._id !== user._id) {
    //     dispatch({ type: USER_UPDATE_PROFILE_RESET });
    //     dispatch(getUserDetails("profile"));
    //     dispatch(listMyOrders());
    //   } else {
    //     setName(user.name);
    //     setEmail(user.email);
    //   }
    // }
  }, [dispatch, userInfo, navigate]);

  return (
    <>
      <section>
        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <h1 className="flex items-center text-black dark:text-white text-md lg:text-3xl font-bold uppercase tracking-widest pb-2 lg:pb-0">
            Bienvenido {name}
          </h1>
        </div>
      </section>
      <hr className="border-zinc-200 dark:border-zinc-800 border-1 rounded-full" />
      <div className="flex flex-col gap-3 mt-4">
        <span className="flex justify-between items-center px-2 py-4">
          <h1 className="text-black dark:text-white text-md font-bold">
            Tus Compras mas recientes
          </h1>
          <h1 className="text-black dark:text-white text-xs font-bold">
            Ver más...
          </h1>
        </span>
      </div>
    </>
  );
}

export default ProfilePage;
