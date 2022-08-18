/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prefer-const */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link, useNavigate } from 'react-router-dom';

import User from '../assets/svg/user';
import Email from '../assets/svg/email';
import Password from '../assets/svg/password';
import Loader from '../assets/svg/loader';

import { register } from '../actions/userActions';

function RegisterPage() {
  const dispatch = useDispatch();

  let navigate = useNavigate();

  const [formData, setFormData] = useState(false);

  const userRegister = useSelector((state) => state.userRegister);
  const { error, userInfo } = userRegister;

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
              CREAR CUENTA
            </h1>
          </span>
          <span className="pb-4">
            <p className="text-black dark:text-white text-sm font-normal text-center tracking-wide">
              Hola, registrate para poder obtener tus mangas favoritos
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
              name: '',
              email: '',
              password: '',
              confirmPassword: ''
            }}
            validate={(res) => {
              let error = {};

              // Validacion Nombre
              if (!res.name) {
                error.name = 'Por favor ingresa un nombre';
              } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(res.name)) {
                error.name = 'El nombre solo puede contener letras y espacio';
              }
              // Validacion Email
              if (!res.email) {
                error.email = 'Por favor ingresa un correo electronico';
              } else if (
                !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                  res.email
                )
              ) {
                error.email =
                  'El correo electronico solo puede contener letras, numeros, guiones, puntos y arrobas';
              }

              // Validacion Contraseña
              if (!res.password) {
                error.password = 'Introduzca una contraseña';
              } else if (res.password.length < 6) {
                error.password =
                  'La contraseña debe tener al menos 6 caracteres';
              }

              // Validacion Repetir Contraseña
              if (!res.confirmPassword) {
                error.confirmPassword = 'Repita la contraseña';
              } else if (res.confirmPassword !== res.password) {
                error.confirmPassword = 'Las contraseñas no coinciden';
              }

              return error;
            }}
            onSubmit={(res, { resetForm }) => {
              resetForm();
              setFormData(true);
              dispatch(register(res.name, res.email, res.password));
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
                      type="text"
                      id="name"
                      name="name"
                      className="font-bold relative text-black placeholder-zinc-400 dark:placeholder-zinc-800 dark:text-white bg-white dark:bg-black border-2 border-zinc-300 dark:border-zinc-800 rounded-md py-3 pl-12 w-full"
                      placeholder="Nombre de usuario"
                    />
                    <ErrorMessage
                      name="name"
                      component={() => (
                        <div className="text-red-500 text-xs pl-1 pt-2 font-bold">
                          {errors.name}
                        </div>
                      )}
                    />
                    <span className="absolute top-3 bottom-0 left-3 pt-0.5">
                      <User className="fill-gray-300 dark:fill-zinc-800" />
                    </span>
                  </span>
                  <span className="col-span-1 relative">
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="font-bold relative text-black placeholder-zinc-400 dark:placeholder-zinc-800 dark:text-white bg-white dark:bg-black border-2 border-zinc-300 dark:border-zinc-800 rounded-md py-3 pl-12 w-full"
                      placeholder="Correo electrónico"
                    />
                    <ErrorMessage
                      name="email"
                      component={() => (
                        <div className="text-red-500 text-xs pl-1 pt-2 font-bold">
                          {errors.email}
                        </div>
                      )}
                    />
                    <span className="absolute top-3 bottom-0 left-3 pt-0.5">
                      <Email className="fill-gray-300 dark:fill-zinc-800" />
                    </span>
                  </span>
                  <span className="col-span-1 relative">
                    <Field
                      type="password"
                      id="password"
                      name="password"
                      className="font-bold relative text-black placeholder-zinc-400 dark:placeholder-zinc-800 dark:text-white bg-white dark:bg-black border-2 border-zinc-300 dark:border-zinc-800 rounded-md py-3 pl-12 w-full"
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
                    <span className="absolute top-3 bottom-0 left-3 pt-0.5">
                      <Password className="fill-gray-300 dark:fill-zinc-800" />
                    </span>
                  </span>
                  <span className="col-span-1 relative">
                    <Field
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      className="font-bold relative text-black placeholder-zinc-400 dark:placeholder-zinc-800 dark:text-white bg-white dark:bg-black border-2 border-zinc-300 dark:border-zinc-800 rounded-md py-3 pl-12 w-full"
                      placeholder="Confirmar contraseña"
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component={() => (
                        <div className="text-red-500 text-xs pl-1 pt-2 font-bold">
                          {errors.confirmPassword}
                        </div>
                      )}
                    />
                    <span className="absolute top-3 bottom-0 left-3 pt-0.5">
                      <Password className="fill-gray-300 dark:fill-zinc-800" />
                    </span>
                  </span>
                  <span className="col-span-1 pt-2 flex justify-center">
                    <button
                      type="submit"
                      className="bg-black dark:bg-white w-full rounded-lg"
                    >
                      {!formData && (
                        <h1 className="text-white dark:text-black text-md font-bold py-4">
                          Registrarse
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
              ¿Ya tienes una cuenta?{' '}
              <Link
                to="/account/login"
                className="font-bold text-black dark:text-white text-sm"
              >
                Inicia sesión
              </Link>
            </p>
          </span>
        </div>
      </div>
    </section>
  );
}

export default RegisterPage;
