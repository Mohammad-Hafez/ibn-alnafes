"use server";
import { cookies } from "next/headers";

export async function changeLanguage(newLang) {
  cookies().set("i18next", newLang); // تحديث الكوكيز باللغة الجديدة
  return { success: true, lang: newLang }; // يمكن استخدام هذا للردّ على الطلب
}
