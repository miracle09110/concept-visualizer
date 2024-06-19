import React from "react";
import FooterView from "./Footer.view";
import UpliftLogo from "/uplift-favicon-32x32.png";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

function UpliftWebsiteLogo() {
  return (
    <div className="bg-neutral-300 p-1 rounded-full">
      <img src={UpliftLogo} alt="Uplift Code Camp" width={16} />
    </div>
  );
}

function FooterController() {
  const iconSize = 24;
  const links = [
    {
      link: "https://www.upliftcodecamp.com/",
      icon: <UpliftWebsiteLogo />,
    },
    {
      link: "https://www.facebook.com/upliftcodecamp",
      icon: <FaFacebook size={iconSize} />,
    },
    {
      link: "https://www.instagram.com/upliftcodecamp",
      icon: <FaInstagram size={iconSize} />,
    },
    {
      link: "https://www.youtube.com/@upliftcodecamp",
      icon: <FaYoutube size={iconSize} />,
    },
  ];

  return <FooterView links={links} />;
}

export default FooterController;
