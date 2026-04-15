import { useMemo } from "react";
import { useNavigate, Link } from "react-router";
import { ProductCard } from "../components/ProductCard";
import { Arreglo } from "../../types/Arreglo";

interface Props {
  arreglos: Arreglo[];
  currentId?: string;
}

export function RelatedCarousel({ arreglos, currentId }: Props) {
  const navigate = useNavigate();

  const related = useMemo(() => {
  const filtered = currentId
    ? arreglos.filter((a) => a.id !== currentId)
    : arreglos;

  return filtered
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item)
    .slice(0, 6);
}, [arreglos, currentId]);
  return (
    <div className="mt-20 pl-8 bg-white py-10 shadow">
      <h2 className="text-2xl font-bold mb-6 ">
        También te puede interesar
      </h2>

      {/* 🔥 CARRUSEL HORIZONTAL */}
      <div className="flex gap-2 overflow-x-auto pb-4 scroll-smooth">
        
        {related.map((item) => (
          <div key={item.id} className="min-w-[330px]">
            <ProductCard
              product={item}
              onClick={() => navigate(`/producto/${item.id}`)}
            />
          </div>
        ))}




      </div>
    </div>
  );
}