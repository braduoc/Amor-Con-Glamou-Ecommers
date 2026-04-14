import { Instagram, Facebook, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white mt-20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* BRAND */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Amor Con Glamour
            </h2>

            <p className="text-neutral-400 text-sm leading-relaxed">
              Arreglos de regalo elegantes y personalizados para tus momentos especiales.
            </p>
          </div>

          {/* LINKS
          <div>
            <h3 className="font-semibold mb-4">Enlaces</h3>

            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Sobre Nosotros
                </a>
              </li>

              <li>
                <a href="#productos" className="hover:text-white transition-colors">
                  Productos
                </a>
              </li>

              <li>
                <a href="#contacto" className="hover:text-white transition-colors">
                  Contacto
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Política de Privacidad
                </a>
              </li>
            </ul>
          </div> */}

          {/* CONTACT + SOCIAL */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>

            <p className="text-neutral-400 text-sm mb-4">
              Escríbenos directamente o visita nuestras redes sociales
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex space-x-4">

              {/* WHATSAPP */}
              <a
                href="https://wa.me/56982823533?text=Hola,%20me%20interesa%20hacer%20un%20pedido"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-all hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              {/* TIKTOK */}
              <a
                href="https://www.tiktok.com/@amorconglamoor?_r=1&_t=ZM-91XIBDehZ51"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neutral-800 hover:bg-neutral-700 rounded-full flex items-center justify-center transition-all hover:scale-105"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/amorconglamour?igsh=cDhwN2d0bmk2azFu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neutral-800 hover:bg-neutral-700 rounded-full flex items-center justify-center transition-all hover:scale-105"
              >
                <Instagram className="w-5 h-5" />
              </a>

              {/* FACEBOOK */}
              <a
                href="https://www.facebook.com/share/1CAJbtgdLP/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neutral-800 hover:bg-neutral-700 rounded-full flex items-center justify-center transition-all hover:scale-105"
              >
                <Facebook className="w-5 h-5" />
              </a>

            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-neutral-800 mt-10 pt-6 text-center text-sm text-neutral-500">
          <p>
            © {new Date().getFullYear()} Amor Con Glamour. Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}