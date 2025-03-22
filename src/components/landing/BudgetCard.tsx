import React from "react";

export const BudgetCard: React.FC = () => {
  return (
    <div className="w-full max-w-[656px] bg-[rgba(145,59,255,0.3)] px-[30px] py-8 rounded-[30px]">
      <div className="text-white text-[29px] font-medium mb-5">
        Approximate Budget
      </div>
      <div className="flex items-center gap-[15px]">
        <svg
          width="49"
          height="49"
          viewBox="0 0 49 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.5 3.0625V8.90167M24.5 40.0977V45.9368M12.8013 34.2394C12.8013 35.7935 13.4186 37.2839 14.5175 38.3828C15.6164 39.4817 17.1068 40.099 18.6609 40.099H28.3996C30.4681 40.099 32.4518 39.2773 33.9144 37.8147C35.3771 36.3521 36.1988 34.3683 36.1988 32.2998C36.1988 30.2314 35.3771 28.2476 33.9144 26.785C32.4518 25.3224 30.4681 24.5007 28.3996 24.5007H20.6004C18.532 24.5007 16.5482 23.679 15.0856 22.2164C13.623 20.7537 12.8013 18.77 12.8013 16.7015C12.8013 14.633 13.623 12.6493 15.0856 11.1867C16.5482 9.72404 18.532 8.90234 20.6004 8.90234H30.3392C31.8932 8.90234 33.3837 9.51969 34.4825 10.6186C35.5814 11.7175 36.1988 13.2079 36.1988 14.7619"
            stroke="white"
            strokeWidth="3"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
        </svg>
        <div className="text-white text-5xl font-medium">700-1000</div>
      </div>
      <div className="bg-[rgba(16,76,186,0.4)] text-center mt-[38px] px-[25px] py-8 rounded-[30px]">
        <div className="text-[19px]">
          <span className="text-white">Do you already have requirements? </span>
          <span className="text-[#A765FB]">Schedule a call </span>
          <span className="text-white">for a detailed estimate</span>
        </div>
      </div>
    </div>
  );
};
