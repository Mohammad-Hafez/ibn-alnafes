"use client";

import { useClientTranslation } from "@/app/i18n/client";
import { Button, Input } from "antd";

export default function ContactSection({lng}) {
    const { t } =  useClientTranslation(lng);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {t("contact.title")}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                {t("contact.name")}
              </label>
              <Input
                id="name"
                name="name"
                required
                placeholder={t("contact.namePlaceholder")}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                {t("contact.email")}
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder={t("contact.emailPlaceholder")}
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              {t("contact.message")}
            </label>
            <Input.TextArea
              id="message"
              name="message"
              required
              rows={4}
              placeholder={t("contact.messagePlaceholder")}
            />
          </div>
          <Button type="primary" htmlType="submit" className="w-full">
            {t("contact.submit")}
          </Button>
        </form>
      </div>
    </section>
  );
}
