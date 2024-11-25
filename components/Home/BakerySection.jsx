import Image from "next/image";
import Link from "next/link";

export default function BakerySection({ t }) {
  const products = [
    { id: 1, name: "Bread", image: "/placeholder.svg" },
    { id: 2, name: "Cakes", image: "/placeholder.svg" },
    { id: 3, name: "Croissant", image: "/placeholder.svg" },
    { id: 4, name: "Cupcake", image: "/placeholder.svg" },
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <h2 className="text-3xl font-bold mb-8">{t("bakery.title")}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/bakery/${product.id}`}
            className="group relative aspect-square overflow-hidden rounded-lg"
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-white text-xl font-semibold">
                {t(`bakery.products.${product.name.toLowerCase()}`)}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

