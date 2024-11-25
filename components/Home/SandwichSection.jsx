import Image from "next/image";
import { ShoppingCart } from 'lucide-react';
import { Button } from "antd";

export default function SandwichSection({ t }) {
  const sandwiches = [
    {
      id: 1,
      name: "Classic Club",
      price: "5.99",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Veggie Delight",
      price: "4.99",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      name: "Chicken Supreme",
      price: "6.99",
      image: "/placeholder.svg",
    },
    {
      id: 4,
      name: "Tuna Mix",
      price: "5.49",
      image: "/placeholder.svg",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl font-bold mb-8">{t("sandwich.title")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sandwiches.map((sandwich) => (
          <div
            key={sandwich.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative aspect-square">
              <Image
                src={sandwich.image}
                alt={sandwich.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-2">{sandwich.name}</h3>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">${sandwich.price}</span>
                <Button >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {t("common.addToCart")}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

