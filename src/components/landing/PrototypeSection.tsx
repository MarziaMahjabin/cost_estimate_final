import React from "react";
import { SummaryTags } from "./SummaryTags";
import { BudgetCard } from "./BudgetCard";

const summaryTags = [
  "Fintech",
  "Full-released version",
  "Tablet app",
  "Phone number",
  "I have my own design",
  "Shopify",
  "Geolocation service",
  "Advanced: routes, directions",
];

export const PrototypeSection: React.FC = () => {
  return (
    <section className="flex-1">
      <h2 className="text-[#EEE] text-[23px] font-semibold mb-[30px]">
        PROTOTYPE
      </h2>
      <div className="text-[#F9F9F9] text-5xl font-semibold mb-[25px] max-md:text-[40px] max-sm:text-[32px]">
        MVP
      </div>
      <p className="text-white text-[22px] font-medium mb-10 max-md:text-xl max-sm:text-lg">
        An MVP is like a first draft of a digital product. It's made for testing
        and getting feedback so that the final version can be better. It helps
        companies figure out if their idea is worth spending more time and money
        on by gathering feedback from real users.
      </p>
      <div className="mb-[30px]">
        <h3 className="text-[#EEE] text-[32px] font-medium mb-2.5">
          Timeline:
        </h3>
        <div className="text-white text-[22px] font-semibold">5-7 Weeks</div>
      </div>
      <div className="mb-[30px]">
        <h3 className="text-[#EEE] text-[32px] font-medium mb-5">Summary:</h3>
        <SummaryTags tags={summaryTags} />
      </div>
      <BudgetCard />
    </section>
  );
};
