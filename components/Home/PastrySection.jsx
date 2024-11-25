import Image from "next/image";
import Link from "next/link";

export default function PastrySection({ t }) {
  const pastries = [
    { id: 1, name: "Baklava", image: "/placeholder.svg" },
    { id: 2, name: "Kunafa", image: "/placeholder.svg" },
    { id: 3, name: "Maamoul", image: "/placeholder.svg" },
    { id: 4, name: "Znoud", image: "/placeholder.svg" },
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl font-bold mb-8">{t("pastry.title")}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {pastries.map((pastry) => (
          <Link
            key={pastry.id}
            href={`/pastry/${pastry.id}`}
            className="group relative aspect-square overflow-hidden rounded-lg"
          >
            <Image
              src={pastry.image}
              alt={pastry.name}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-white text-xl font-semibold">
                {t(`pastry.items.${pastry.name.toLowerCase()}`)}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

