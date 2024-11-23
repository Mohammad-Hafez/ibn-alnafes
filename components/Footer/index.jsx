import { useTranslation } from "@/app/i18n";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

const Footer = async ({ lng }) => {
  const { t } = await useTranslation(lng);
  return (
    <>
      <footer className="w-full border-t pt-20 bg-customTeal flex flex-col items-center justify-center gap-8 mt-auto">
        <ul className="flex items-center justify-between w-full sm:w-4/5 md:w-3/5 px-5 md:px-0">
          <li className="w-fit capitalize">
            <Link
              href={"/"}
              className="text-customNude text-base font-semibold"
            >
              {t("links.home")}
            </Link>
          </li>
          <li className="w-fit capitalize">
            <Link
              href={"/"}
              className="text-customNude text-base font-semibold"
            >
              {t("links.restaurant")}
            </Link>
          </li>
          <li className="w-fit capitalize">
            <Link
              href={"/"}
              className="text-customNude text-base font-semibold"
            >
              {t("links.bakery")}
            </Link>
          </li>
          <li className="w-fit capitalize">
            <Link
              href={"/"}
              className="text-customNude text-base font-semibold"
            >
              {t("links.pastry")}
            </Link>
          </li>
          <li className="w-fit capitalize">
            <Link
              href={"/"}
              className="text-customNude text-base font-semibold"
            >
              {t("links.recipes")}
            </Link>
          </li>
        </ul>
        <div>
          <div className="socialLinks flex text-customNude items-center gap-8 justify-center mb-8">
            <FaInstagram size={28} className="cursor-pointer" />
            <FaSquareFacebook size={28} className="cursor-pointer" />
          </div>
          <h2 className="text-lg md:text-xl lg:text-2xl text-customNude font-semibold">
            {t("title")}
          </h2>
        </div>
        <div className="copyright border-0 border-t border-gray-50 border-opacity-15 w-full mt-auto">
          <p className="text-gray-50 text-opacity-20 text-center text-xl py-1">{t("copyright")}</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
