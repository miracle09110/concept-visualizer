import React from "react";
import style from "./sort.module.css";
import Cards from "../../components/Cards/Cards.view";
import { RxBarChart } from "react-icons/rx";

function SortView({ conceptItems }) {
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
      className="bg-[#222831] text-slate-200 flex items-center p-20"
      id="sort"
    >
      <div className="w-8/12 mx-auto flex items-center">
        <div className="flex-1 flex flex-col gap-8">
          <span className="text-neutral-200">
            <RxBarChart size={60} />
          </span>
          <div>
            <p className="text-4xl font-bold bg-gradient-to-r  from-[#FF76CE] via-[#94FFD8] to-[#FDFFC2] bg-clip-text text-transparent">
              {conceptItems.category}
            </p>
            <p>Learn how sorting works</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-4">
          {conceptCards}
        </div>
      </div>
    </section>
  );
}

export default SortView;
