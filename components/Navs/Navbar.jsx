"use client";
import React, { useState } from "react";
import { ShopOutlined } from "@ant-design/icons";
import { PiChefHat } from "react-icons/pi";
import { Menu } from "antd";
import { useClientTranslation } from "@/app/i18n/client";
import Image from "next/image";
import logo from "@/public/assets/images/logo1.jpg";
import Link from "next/link";
import { CiBoxList } from "react-icons/ci";
import { LuCakeSlice } from "react-icons/lu";

const Navbar = ({ lng }) => {
  const [current, setCurrent] = useState("home");
  const { t } = useClientTranslation(lng);

  const items = [
    {
      label: t("links.restaurant"),
      key: "restaurant",
      icon: <ShopOutlined />,
      children: [
        {
          label: t("links.sandwichs"),
          key: "restaurant_sandwichs_1",
        },
        {
          label: t("links.boxes"),
          key: "restaurant_boxes_1",
        },
      ],
    },
    {
      label: t("links.bakery"),
      key: "bakery",
      icon: <PiChefHat />,
      children: [
        {
          label: t("links.sandwichs"),
          key: "bakery_sandwichs_1",
        },
        {
          label: t("links.boxes"),
          key: "bakery_boxes_1",
        },
      ],
    },
    {
      label: t("links.pastry"),
      key: "pastry",
      icon: <LuCakeSlice />,
      children: [
        {
          label: t("links.sandwichs"),
          key: "pastry_sandwichs_1",
        },
        {
          label: t("links.boxes"),
          key: "pastry_boxes_1",
        },
      ],
    },
    {
      label: t("links.recipes"),
      key: "recipes",
      icon: <CiBoxList />,
    },
  ];

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <>
      <nav className="px-5 lg:px-6 md:px-12 py-1 xl:px-24 flex items-center justify-between ">
        <Link href="/" className="flex items-center w-44 min-w-fit">
          <Image src={logo} className="w-11 h-11 rounded-full shadow-sm me-2" alt="ibn alnafis logo" />
          <h1 className="text-gray-900 font-semibold text-lg">
            {t("ibn_alnafis")}
          </h1>
        </Link>
        <Menu
          className="w-10 lg:w-96 xl:w-auto border-none dir_ltr"
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
      </nav>
    </>
  );
};

export default Navbar;
