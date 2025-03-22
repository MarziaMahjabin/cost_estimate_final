import React from "react";

export const ThankYouSection: React.FC = () => {
  return (
    <section className="flex flex-col gap-[25px] mt-[50px] max-sm:mt-[30px]">
      <div className="flex items-center gap-2.5 text-[#913BFF] text-2xl font-semibold">
        <svg
          width="45"
          height="45"
          viewBox="0 0 45 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M32.3438 21.0938H17.4572L23.2538 15.3C23.8022 14.7516 23.8022 13.8656 23.2538 13.3031C22.7039 12.7546 21.8138 12.7546 21.2639 13.3031L13.3087 21.2625C12.9726 21.6 12.8672 22.0641 12.9445 22.5C12.8672 22.9359 12.9726 23.4 13.3087 23.7375L21.2639 31.6969C21.8138 32.2454 22.7039 32.2454 23.2538 31.6969C23.8022 31.1485 23.8022 30.2484 23.2538 29.7L17.4572 23.9062H32.3438C33.12 23.9062 33.75 23.2734 33.75 22.5C33.75 21.7266 33.12 21.0938 32.3438 21.0938Z"
            fill="#913BFF"
          />
        </svg>
        <span>THANK YOU</span>
      </div>
      <h1 className="text-white text-[58px] font-semibold max-md:text-5xl max-sm:text-4xl">
        Your Estimate Is Nearly Ready!
      </h1>
      <div className="text-[22px] font-medium max-md:text-xl max-sm:text-lg">
        <span className="text-[#913BFF]">Schedule A Call</span>
        <span className="text-white">
          {" "}
          To Kickstart Your Project Without Delay. All Estimates Are Approximate
        </span>
      </div>
    </section>
  );
};
