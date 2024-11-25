import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";

export default function RecipesSection({ t }) {
  const recipes = [
    {
      id: 1,
      title: "Apple Pie",
      description: "Classic American apple pie recipe",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      title: "Banana Pudding",
      description: "Creamy banana pudding recipe",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      title: "Chocolate Milkshake",
      description: "Rich chocolate milkshake recipe",
      image: "/placeholder.svg",
    },
    {
      id: 4,
      title: "Bread Pudding",
      description: "Traditional bread pudding recipe",
      image: "/placeholder.svg",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl font-bold mb-8">{t("recipes.title")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative aspect-video">
              <Image
                src={recipe.image}
                alt={recipe.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-2">{recipe.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{recipe.description}</p>
              <Link href={`/recipes/${recipe.id}`}>
                <Button type="primary"
ghost
className="w-full">
                  {t("common.readMore")}
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

