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
    <footer className="footer flex justify-between items-center gap-4 bg-neutral text-neutral-content">
      <aside className="flex flex-1 items-center gap-3 pl-4">
        <img src={UpliftLogo} alt="Uplift Code Camp Logo" width={24} />
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
      <nav className="flex items-center gap-4 text-neutral-300">
        {footerLinks}
      </nav>
    </footer>
  );
}

export default FooterView;
