import React from "react";
import { useForm } from "react-hook-form";

interface EstimateFormData {
  fullName: string;
  email: string;
  phone: string;
  description: string;
  acceptTerms: boolean;
}

export const EstimateForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EstimateFormData>();

  const onSubmit = (data: EstimateFormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="bg-[rgba(132,35,255,0.08)] shadow-[0px_0px_32px_7px_rgba(255,255,255,0.15)] p-10 rounded-[40px] border-[3px] border-[#913BFF] max-md:p-[30px] max-sm:p-5">
      <h2 className="text-[#F9F9F9] text-3xl font-medium mb-2.5">
        Get a Detailed Estimate
      </h2>
      <p className="text-white text-base font-medium mb-10">
        After you submit the form, our business analyst will reach out to
        discuss the estimate in detail.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[30px]"
      >
        <div className="flex flex-col gap-2.5">
          <label className="text-[#F9F9F9] text-[26px] font-medium">
            Full Name<span className="text-[#D96570]">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border bg-transparent text-[#913BFF] text-lg pb-2.5 border-[#913BFF]"
            {...register("fullName", { required: true })}
          />
        </div>

        <div className="flex flex-col gap-2.5">
          <label className="text-[#F9F9F9] text-[26px] font-medium">
            Email<span className="text-[#D96570]">*</span>
          </label>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full border bg-transparent text-[#913BFF] text-lg pb-2.5 border-[#913BFF]"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
        </div>

        <div className="flex flex-col gap-2.5">
          <label className="text-[#F9F9F9] text-[26px] font-medium">
            Phone<span className="text-[#D96570]">*</span>
          </label>
          <div className="flex items-center gap-2.5 border pb-2.5 border-[#913BFF]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/954dcd30419a388e55f4779db599e58cb42b84b6"
              alt="Flag"
              className="w-[22px] h-[16px]"
            />
            <span className="text-white text-[26px]">+90</span>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="flex-1 bg-transparent text-[#913BFF] text-base"
              {...register("phone", { required: true })}
            />
          </div>
        </div>

        <p className="text-white text-base">
          We'll call you ASAP or{" "}
          <span className="text-[#913BFF]">Schedule a Call</span>
        </p>

        <div className="flex flex-col gap-2.5">
          <label className="text-[#F9F9F9] text-[26px] font-medium">
            Describe Your Project
          </label>
          <textarea
            placeholder="Enter your comment"
            className="w-full border bg-transparent text-[#B8B6BB] text-lg min-h-[100px] pb-2.5 border-[#B8B6BB]"
            {...register("description")}
          />
        </div>

        <p className="text-white text-base">
          Share your project goal with our experts
        </p>

        <div className="text-center p-[30px] rounded-[25px] border-[dashedpx] border-[#913BFF]">
          <div className="flex items-center justify-center gap-1 text-white text-[22px] cursor-pointer">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.25 9V26.25C11.25 29.565 13.935 32.25 17.25 32.25C20.565 32.25 23.25 29.565 23.25 26.25V7.5C23.25 5.43 21.57 3.75 19.5 3.75C17.43 3.75 15.75 5.43 15.75 7.5V23.25C15.75 24.075 16.425 24.75 17.25 24.75C18.075 24.75 18.75 24.075 18.75 23.25V9H21V23.25C21 25.32 19.32 27 17.25 27C15.18 27 13.5 25.32 13.5 23.25V7.5C13.5 4.185 16.185 1.5 19.5 1.5C22.815 1.5 25.5 4.185 25.5 7.5V26.25C25.5 30.81 21.81 34.5 17.25 34.5C12.69 34.5 9 30.81 9 26.25V9H11.25Z"
                fill="#913BFF"
              />
            </svg>
            <span>Attach file</span>
          </div>
          <div className="text-white text-[13px] mt-2.5">
            <span>
              No more than three files may be attached up to 3 Mb each.
            </span>
            <br />
            <span>Formats: doc, docx, pdf, ppt, pptx.</span>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <input
            type="checkbox"
            className="w-5 h-5"
            {...register("acceptTerms", { required: true })}
          />
          <p className="text-base">
            <span className="text-white">I accept </span>
            <span className="text-[#913BFF]">privacy policy and cookies</span>
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-[-15px] left-[30px]">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.2666 25.3654L12.9666 25.7654L13.3666 26.0654L16.0333 28.0654L16.4333 28.3654L16.7333 27.9654L26.7333 14.632L27.0333 14.232L26.6333 13.932L23.9666 11.932L23.5666 11.632L23.2666 12.032L13.2666 25.3654Z"
                stroke="white"
              />
            </svg>
          </div>
          <div className="bg-[#3779F1] text-white text-lg font-medium text-center px-5 py-[15px] rounded-[25px]">
            15% SALE
          </div>
          <div className="text-white text-[13px] font-bold text-center mt-[5px]">
            <span>Enjoy a </span>
            <span className="font-bold">15% discount </span>
            <span>by simply submitting a form.</span>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#913BFF] text-[#F9F9F9] text-[22px] font-semibold mt-5 py-3 rounded-lg"
        >
          Request For Detailed Estimate
        </button>
      </form>
    </div>
  );
};
