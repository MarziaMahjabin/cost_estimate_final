import React from "react";
import { Header } from "@/components/landing/Header";
import { ThankYouSection } from "@/components/landing/ThankYouSection";
import { PrototypeSection } from "@/components/landing/PrototypeSection";
import { EstimateForm } from "@/components/landing/EstimateForm";

const Index = () => {
  return (
    <div className="w-full min-h-[screen] bg-[#050D36]">
      <div className="max-w-[1440px] mx-auto px-[50px] max-md:px-[30px] max-sm:px-5">
        <Header />
        <ThankYouSection />
        <div className="flex justify-between gap-[30px] mt-[50px] max-md:flex-col">
          <PrototypeSection />
          <div className="flex-1 max-w-[599px]">
            <EstimateForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
