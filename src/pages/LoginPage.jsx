/* eslint-disable no-shadow */
/* eslint-disable prefer-const */
/* eslint-disable react/no-unstable-nested-components */
import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { Link, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { login } from '../actions/userActions';

import Email from '../assets/svg/email';
import Password from '../assets/svg/password';
import Loader from '../assets/svg/loader';

function LoginPage() {
  const [formData, setFormData] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [userInfo, navigate]);

  return (
    <section className="grid place-items-center h-auto xl:px-0 lg:px-0 md:px:0 px-4">
      <div className="bg-light-200 dark:bg-dark-200 p-8 xl:mb-28 xl:mt-12 mt-12 mb-12 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 gap-4">
          <span>
            <h1 className="text-black dark:text-white text-xl font-bold text-center tracking-widest uppercase">
              INICIO DE SESIÓN
            </h1>
          </span>
          <span className="pb-4">
            <p className="text-black dark:text-white text-sm font-normal text-center tracking-wide">
              Oye, ingresa tus datos para iniciar sesión en tu cuenta
            </p>
            {error && (
              <p className="text-red-500 text-xs pl-1 pt-2 font-bold">
                No se encontró ninguna cuenta activa con las credenciales dadas
              </p>
            )}
          </span>
          {/* init form */}
          <Formik
            initialValues={{
              username: '',
              password: ''
            }}
            validate={(res) => {
              let error = {};

              // Validacion Email
              if (!res.username) {
                error.username = 'Por favor, introduzca un correo electrónico';
              } else if (
                !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                  res.username
                )
              ) {
                error.username =
                  'El correo electrónico solo puede contener letras, números, guiones, puntos y un signo en el momento';
              }
              // Validacion Contraseña
              if (!res.password) {
                error.password = 'Introduzca una contraseña';
              } else if (res.password.length < 6) {
                error.password =
                  'La contraseña debe tener al menos 6 caracteres';
              }
              return error;
            }}
            onSubmit={(res, { resetForm }) => {
              resetForm();
              setFormData(true);
              dispatch(login(res.username, res.password));
              setTimeout(() => {
                setFormData(false);
              }, 1000);
              return res;
            }}
          >
            {({ errors }) => (
              <Form className="pt-2">
                <section className="grid grid-cols-1 gap-4">
                  <span className="col-span-1 relative">
                    <Field
                      type="email"
                      id="username"
                      name="username"
                      className="outline-none font-bold relative text-black placeholder-zinc-400 dark:placeholder-zinc-400 dark:text-white bg-zinc-200 dark:bg-zinc-800 rounded-md py-3 pl-12 w-full"
                      placeholder="Correo electrónico"
                    />
                    <ErrorMessage
                      name="username"
                      component={() => (
                        <div className="text-red-500 text-xs pl-1 pt-2 font-bold">
                          {errors.username}
                        </div>
                      )}
                    />
                    <span className="absolute top-3 bottom-0 left-3 pt-[0.4px]">
                      <Email className="fill-gray-400 dark:fill-zinc-400" />
                    </span>
                  </span>
                  <span className="col-span-1 relative">
                    <Field
                      type="password"
                      id="password"
                      name="password"
                      className="outline-none font-bold relative text-black placeholder-zinc-400 dark:placeholder-zinc-400 dark:text-white bg-zinc-200 dark:bg-zinc-800 rounded-md py-3 pl-12 w-full"
                      placeholder="Contraseña"
                    />
                    <ErrorMessage
                      name="password"
                      component={() => (
                        <div className="text-red-500 text-xs pl-1 pt-2 font-bold">
                          {errors.password}
                        </div>
                      )}
                    />
                    <span className="absolute top-3 bottom-0 left-3">
                      <Password className="fill-gray-400 dark:fill-zinc-400" />
                    </span>
                  </span>
                  <span className="col-span-1 pt-2 flex justify-center">
                    <button
                      type="submit"
                      className="bg-zinc-300 dark:bg-[#F0E9D2] w-full rounded-lg"
                    >
                      {!formData && (
                        <h1 className="text-white dark:text-black text-md font-bold py-4">
                          Iniciar Sesión
                        </h1>
                      )}
                      {formData && (
                        <Loader className="fill-white dark:fill-black" />
                      )}
                    </button>
                  </span>
                </section>
              </Form>
            )}
          </Formik>

          {/* end form */}
          <span className="pt-8">
            <p className="text-black dark:text-white text-sm font-normal text-center tracking-wide">
              ¿No tienes cuenta?{' '}
              <Link
                to="/account/register"
                className="font-bold text-black dark:text-white text-sm"
              >
                Registrate ahora
              </Link>
            </p>
          </span>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
