import React from "react";

import Facebook from "../assets/svg/facebook";
import Instagram from "../assets/svg/instagram";
import Whatsapp from "../assets/svg/whatsapp";

function FooterComponent() {
  return (
    <footer className="bg-black py-4">
      <div className="container mx-auto grid grid-cols-6 gap-40 pt-10 pb-8">
        <div className="col-span-2 flex flex-col">
          <h1 className="text-white font-bold tracking-widest uppercase text-sm">
            POLÍTICAS
          </h1>
          <br />
          <p className="text-white text-sm">Términos & Condiciones</p>
          <p className="text-white text-sm">Envíos</p>
        </div>
        <div className="col-span-2 flex flex-col">
          <h1 className="text-white font-bold tracking-widest uppercase text-sm">
            Contáctanos
          </h1>
          <br />
          <p className="text-white text-sm">
            Suscríbete para recibir lanzamientos, descuentos, y contenido curado
            para nuestros lectores.
          </p>
        </div>
        <div className="col-span-2 flex flex-col">
          <h1 className="text-white font-bold tracking-widest uppercase text-sm">
            SÍGUENOS
          </h1>
          <br />
          <p className="text-white text-sm">Síguenos en nuestras redes sociales</p>
          <div className="flex flex-row pt-4">
            <span             
              className="rounded-l-md border-r-1 border-gray-100 p-4 border"
            >
              <Facebook fill="white" color="white" />
            </span>
            <span             
              className="border-l-0 border-r-0 border-gray-100 p-4 border"
            >
              <Instagram fill="white" color="white" />
            </span>
            <span             
              className="rounded-r-md border-l-1 border-gray-100 p-4 border"
            >
              <Whatsapp fill="white" color="white" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
