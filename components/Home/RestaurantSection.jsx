import Image from "next/image";
import Link from "next/link";

export default function RestaurantSection({ t }) {
  const categories = [
    { id: 1, name: "Falafel", image: "/placeholder.svg" },
    { id: 2, name: "Arabic Breakfast", image: "/placeholder.svg" },
    { id: 3, name: "Pizza Manakish", image: "/placeholder.svg" },
    { id: 4, name: "Arabic Breakfast", image: "/placeholder.svg" },
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <h2 className="text-3xl font-bold mb-8">{t("restaurant.title")}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/restaurant/${category.id}`}
            className="group relative aspect-square overflow-hidden rounded-lg"
          >
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-white text-xl font-semibold text-center">
                {t(`restaurant.categories.${category.name.toLowerCase()}`)}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

