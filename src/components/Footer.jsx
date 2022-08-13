import React from "react";

import Facebook from "../assets/svg/facebook";
import Instagram from "../assets/svg/instagram";
import Whatsapp from "../assets/svg/whatsapp";

function Footer() {
  return (
    <footer className="bg-white dark:bg-black py-4 border-t-2 border-t-black dark:border-t-white">
      <div className="container mx-auto grid grid-cols-6 gap-8 xl:gap-40 pt-10 pb-8 px-4">
        <div className="col-span-6 xl:col-span-2 flex flex-col">
          <h1 className="dark:text-white text-black font-bold tracking-widest uppercase text-sm">
            POLÍTICAS
          </h1>
          <br />
          <p className="dark:text-white text-black text-sm">Términos & Condiciones</p>
          <p className="dark:text-white text-black text-sm">Envíos</p>
        </div>
        <div className="col-span-6 xl:col-span-2 flex flex-col">
          <h1 className="dark:text-white text-black font-bold tracking-widest uppercase text-sm">
            Contáctanos
          </h1>
          <br />
          <p className="dark:text-white text-black text-sm">
            Suscríbete para recibir lanzamientos, descuentos, y contenido curado
            para nuestros lectores.
          </p>
        </div>
        <div className="col-span-6 xl:col-span-2 flex flex-col">
          <h1 className="dark:text-white text-black font-bold tracking-widest uppercase text-sm">
            SÍGUENOS
          </h1>
          <br />
          <p className="dark:text-white text-black text-sm">Síguenos en nuestras redes sociales</p>
          <div className="flex flex-row pt-4">
            <span             
              className="rounded-l-lg border-r-2 dark:border-white border-black p-4 border-2"
            >
              <Facebook className="dark:fill-white fill-black dark:text-white text-black" />
            </span>
            <span             
              className="border-l-0 border-r-0 dark:border-white border-black p-4 border-2"
            >
              <Instagram className="dark:fill-white fill-black dark:text-white text-black" />
            </span>
            <span             
              className="rounded-r-lg border-l-2 dark:border-white border-black p-4 border-2"
            >
              <Whatsapp className="dark:fill-white fill-black dark:text-white text-black" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
