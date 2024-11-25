import { LuPhoneCall } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { useTranslation } from "@/app/i18n";
import LanguageSwitcher from "../Buttons/LanguageSwitcher";

const TopHeader = async ({ lng }) => {
  const { t } = await useTranslation(lng, "footer");
  return (
    <>
      <div className="px-10 lg:px-24 pt-2 flex justify-between items-center border-b mb-4">
        <div className="flex items-center gap-3">
          <h6 className="dir_ltr flex items-center mb-3 text-sm md:text-base text-gray-800 hover:text-customTeal">
            <LuPhoneCall className="me-1" />
            <a href="tel:+9620792520259">962-079-1110000</a>
          </h6>
          <h6 className="dir_ltr flex items-center mb-3 text-sm md:text-base text-gray-800 hover:text-customTeal">
            <HiOutlineMail className="me-2" />
            <a href="mailto:info@daysooq.com">info@ibnalnafis.com</a>
          </h6>
        </div>
        <div>
            <LanguageSwitcher lng={lng} />
        </div>
      </div>
    </>
  );
};

export default TopHeader;