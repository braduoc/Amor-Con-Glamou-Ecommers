import React from 'react'
import { Button } from './ui/button'
import { MessageCircle } from 'lucide-react'

export const ContactToUs = () => {
  return (
    <section id="contacto" className="py-20 bg-neutral-900">
        <div className="max-w-4xl mx-12 px-4 text-center">

          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Listo para hacer un regalo especial?
          </h2>

          <p className="text-xl text-rose-50 mb-8">
            Contacta con nosotros por WhatsApp y personaliza tu arreglo ideal
          </p>

          <Button
            asChild
            size="lg"
            className="bg-white text-neutral-900 hover:bg-neutral-900 hover:text-white border-2 hover:border-white px-8 py-6 text-lg rounded-full"
          >
            <a
              href="https://wa.me/56982823533?text=Hola,%20me%20interesa%20hacer%20un%20pedido"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Iniciar Conversación
            </a>
          </Button>

        </div>
      </section>
  )
}
