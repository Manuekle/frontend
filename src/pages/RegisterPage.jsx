import React from "react";
import { Link } from "react-router-dom";

import User from "../assets/svg/user";
import Email from "../assets/svg/email";
import Password from "../assets/svg/password";

function RegisterPage() {
  return (
    <section className="grid place-items-center h-auto xl:px-0 lg:px-0 md:px:0 px-4">
      <div className="border-2 border-black dark:border-white p-8 xl:mb-28 xl:mt-28 mt-12 mb-12 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 gap-4">
          <span>
            <h1 className="text-black dark:text-white text-xl font-bold text-center tracking-widest uppercase">
              CREAR CUENTA
            </h1>
          </span>
          <span className="pb-8">
            <p className="text-black dark:text-white text-sm font-normal text-center tracking-wide">
              Hola, registrate para poder obtener tus mangas favoritos
            </p>
          </span>
          <span className="relative">
            <input
              type="text"
              className="font-bold relative text-black placeholder-zinc-400 dark:placeholder-zinc-800 dark:text-white bg-white dark:bg-black border-2 border-zinc-300 dark:border-zinc-800 rounded-md py-3 pl-12 w-full"
              placeholder="Nombre de usuario"
            />
            <span className="absolute top-3 bottom-0 left-3 pt-0.5">
              <User className="fill-gray-300 dark:fill-zinc-800" />
            </span>
          </span>
          <span className="relative">
            <input
              type="email"
              className="font-bold relative text-black placeholder-zinc-400 dark:placeholder-zinc-800 dark:text-white bg-white dark:bg-black border-2 border-zinc-300 dark:border-zinc-800 rounded-md py-3 pl-12 w-full"
              placeholder="Correo electrónico"
            />
            <span className="absolute top-3 bottom-0 left-3 pt-0.5">
              <Email className="fill-gray-300 dark:fill-zinc-800" />
            </span>
          </span>
          <span className="relative">
            <input
              type="password"
              className="font-bold relative text-black placeholder-zinc-400 dark:placeholder-zinc-800 dark:text-white bg-white dark:bg-black border-2 border-zinc-300 dark:border-zinc-800 rounded-md py-3 pl-12 w-full"
              placeholder="Contraseña"
            />
            <span className="absolute top-3 bottom-0 left-3 pt-0.5">
              <Password className="fill-gray-300 dark:fill-zinc-800" />
            </span>
          </span>
          <span className="relative">
            <input
              type="password"
              className="font-bold relative text-black placeholder-zinc-400 dark:placeholder-zinc-800 dark:text-white bg-white dark:bg-black border-2 border-zinc-300 dark:border-zinc-800 rounded-md py-3 pl-12 w-full"
              placeholder="Confirmar contraseña"
            />
            <span className="absolute top-3 bottom-0 left-3 pt-0.5">
              <Password className="fill-gray-300 dark:fill-zinc-800" />
            </span>
          </span>
          <span className="pt-2 flex justify-center">
            <button className="bg-black dark:bg-white py-4 w-full rounded-lg">
              <h1 className="text-white dark:text-black text-md font-bold">
                Iniciar Sesión
              </h1>
            </button>
          </span>
          <span className="pt-8">
            <p className="text-black dark:text-white text-sm font-normal text-center tracking-wide">
              ¿Ya tienes una cuenta?{" "}
              <Link
                to="/account/login"
                className="font-bold text-black dark:text-white text-sm"
              >
                Inicia de sesión
              </Link>
            </p>
          </span>
        </div>
      </div>
    </section>
  );
}

export default RegisterPage;
