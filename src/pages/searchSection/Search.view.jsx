import React from "react";
import { FaCircle } from "react-icons/fa";
import Cards from "../../components/Cards/Cards.view";

function SearchView({ conceptItems }) {
  const conceptCards = conceptItems.items.map((item) => {
    return (
      <Cards
        key={item.title}
        title={item.title}
        label={item.label}
        subtitle={item.subtitle}
        image={item.image}
        link={item.link}
      />
    );
  });

  return (
    <section
      className="bg-[#222831] text-slate-200 flex flex-col justify-center items-center p-20 h-screen"
      id="search"
    >
      <div className="flex flex-col items-center mb-16">
        <div className="my-8 animate-bounce text-[#94FFD8]">
          <FaCircle />
        </div>
        <p className="text-4xl font-bold bg-gradient-to-r from-[#FF76CE] via-[#94FFD8] to-[#FDFFC2] bg-clip-text text-transparent">
          {conceptItems.category}
        </p>
        <p>Learn how search works</p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {conceptCards}
      </div>
    </section>
  );
}

export default SearchView;
