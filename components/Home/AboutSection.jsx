import Image from "next/image";

export default function AboutSection({ t }) {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl font-bold mb-8">{t("about.title")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            {t("about.description")}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="relative aspect-square">
              <Image
                src={`/placeholder.svg`}
                alt={`About image ${i}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

