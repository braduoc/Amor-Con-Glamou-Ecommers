import React from 'react'
import { Button } from './ui/button';
import { MessageCircle } from 'lucide-react';

export const Cover = () => {
  return (
     <section
        className="
      relative
      flex items-center
      min-h-[700px]
      lg:min-h-[700px]
      bg-[url('/images/portada.jpeg')]
      bg-cover bg-center
      lg:bg-none
    "
      >
        {/* 🌑 Overlay SOLO en mobile */}
        <div className="absolute inset-0 bg-black/60 lg:hidden"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start lg:items-center mx-2 lg:mx-24">

            {/* 📝 IZQUIERDA - TEXTO */}
            <div className="text-center lg:text-left ">

              <h1 className="
              
  text-5xl lg:text-7xl 
  font-bold 
  text-white lg:text-neutral-900 
  mb-6
  drop-shadow-lg lg:drop-shadow-none
    font-[Playfair_Display] 
    tracking-wideç
    mx-2
">Regalos que Expresan Amor</h1>

              <p className="
            text-xl  lg:text-2xl px-8 lg:px-0
           text-white lg:text-neutral-900 
            mb-8
            drop-shadow-md lg:drop-shadow-none
          ">
                Arreglos de regalo elegantes y personalizados, entregados con el corazón.
                Cada detalle cuenta.
              </p>

              <div className="flex flex-row gap-3 sm:gap-4 justify-center lg:justify-start flex-wrap">

                <Button
                  onClick={() => {
                    document.getElementById('categoria')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  size="lg"
                  className="
               bg-neutral-900 border-2 border-neutral-100 hover:bg-neutral-100 hover:text-neutral-900 hover:border-neutral-900 text-neutral-100 
                px-8 py-6 text-xl rounded-full
                shadow-lg hover:shadow-xl transition
              "
                >
                  Explorar Categorias
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="
                border-2
                border-green-600 text-green-600
                hover:bg-green-100 hover:text-neutral-900
                px-8 py-6 text-xl rounded-full
                shadow-md hover:shadow-lg transition
              "
                >
                  <a
                    href="https://wa.me/1234567890?text=Hola,%20me%20interesa%20hacer%20un%20pedido"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="w-6 h-6" />
                    Contactar
                  </a>
                </Button>
              </div>
            </div>

            {/* 🖼 DERECHA */}
            <div className="hidden lg:block">
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="/images/portada.jpeg"
                  alt="Regalos personalizados"
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
  )
}
