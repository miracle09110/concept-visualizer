import React from "react";
import UpliftLogo from "/uplift-favicon-32x32.png";

function FooterView({ links }) {
  const footerLinks = links.map((item) => {
    return (
      <a href={item.link} key={item.link} target="_blank">
        {item.icon}
      </a>
    );
  });

  return (
    <footer className="flex justify-between items-center gap-4 text-neutral-300 text-sm bg-[#222831] border-t border-neutral-700">
      <aside className="flex items-center gap-3 pl-4">
        <img src={UpliftLogo} alt="Uplift Code Camp Logo" width={24} />
        <p className="">Copyright © 2024 - All rights reserved</p>
      </aside>
      <nav className="flex items-center gap-4 text-neutral-300">
        {footerLinks}
      </nav>
    </footer>
  );
}

export default FooterView;
