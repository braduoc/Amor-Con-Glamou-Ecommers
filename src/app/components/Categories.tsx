import { motion } from "motion/react";
import { Coffee, Flower2, Gift } from "lucide-react";
import { Arreglo } from "../../types/Arreglo";
import { useNavigate } from "react-router";

interface CategoriesProps {
  arreglos?: Arreglo[];
}

const iconMap: Record<string, any> = {
  Desayunos: Coffee,
  Flores: Flower2,
  Boxes: Gift,
};

export function Categories({ arreglos = [] }: CategoriesProps) {
  const navigate = useNavigate();

  const categorias = Array.from(
    new Set((arreglos ?? []).map((a) => a.categoria).filter(Boolean))
  );

  const getRandomImage = (cat: string) => {
    const items = arreglos.filter((a) => a.categoria === cat);
    if (!items.length) return "/placeholder.jpg";
    return items[Math.floor(Math.random() * items.length)].imagenUrl;
  };

  return (
    <section className="py-20 bg-neutral-100">
      <div className="container mx-auto px-8 max-w-6xl">

        {/* HEADER */}
        <motion.div
          id="categoria"

          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-extrabold mb-4">
            Nuestras Categorías
          </h2>

          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Encuentra el regalo perfecto para cada ocasión especial
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-4">

          {categorias.map((cat, index) => {
            const Icon = iconMap[cat] || Gift;

            return (
              <motion.button
                key={cat}
                onClick={() => navigate(`/categoria/${cat}`)} // 🔥 AQUÍ ESTÁ EL CAMBIO
                className="relative overflow-hidden rounded-3xl shadow-lg transition-all text-left group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                {/* IMAGE */}
                <img
                  src={getRandomImage(cat)}
                  alt={cat}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/40" />

                {/* CONTENT */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">

                    <Icon className="w-8 h-8 mb-2" />

                    <h3 className="text-2xl font-bold">
                      {cat}
                    </h3>

                    <p className="text-sm opacity-80">
                      Explora productos de {cat.toLowerCase()}
                    </p>

                  </div>
                </div>

              </motion.button>
            );
          })}

        </div>
      </div>
    </section>
    
  );
}