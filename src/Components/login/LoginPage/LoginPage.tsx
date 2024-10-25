import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { Link, useNavigate } from "react-router-dom";
import ReactFlagsSelect from "react-flags-select";
import { countries, customLabels, dialcodes } from "../../../utils/countries";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { initialLoginState, loginSchema } from "./LoginValidation";
import InputMobileNumber from "../../FormFields/InputMobileNo";
import { interfaceLoginState } from "../../../interface/LoginInterface";
import LoginApi from "../../../api/LoginApi";

export default function LoginPage() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const [selectedPhoneCode, setSelectedPhoneCode] = useState("GB");
  console.log(selectedPhoneCode, "selected phone code");
  const navigate = useNavigate()
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: initialLoginState,
  });

  const onSubmitHandler = async (state: interfaceLoginState) => {
    setLoading(true)
    const dailcodeData = {
      ...state,
      phone_code: dialcodes.filter((obj: any) => {
        return obj.isoCode === selectedPhoneCode;
      })[0]?.dialCode,
    };
    console.log(dailcodeData,'Aanchal DialCode data');
    
    setLoading(await LoginApi(dailcodeData, navigate));
    

  };

  return (
    <>
      <div className=" bg-[#F3F5FA] h-screen md:p-10">
        <div className="store-card max-w-[30rem]  m-auto h-screen md:h-auto">
          <Link to="/menu" className="px-2 block md:hidden">
            <img src="/images/back-icon.svg" />
          </Link>
          <div className="p-2">
            <h1 className="font-bold text-2xl">Hey there!</h1>
            <p className="text-[#606060] text-lg mb-3">
              Login or create an account for a faster order experience
            </p>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
              <div className="formItem">
                <div className="formControl">
                  <div className="flex gap-2 items-center">
                    <ReactFlagsSelect
                      selected={selectedPhoneCode}
                      onSelect={(code: any) => setSelectedPhoneCode(code)}
                      searchable={true}
                      fullWidth={false}
                      countries={countries}
                      customLabels={customLabels}
                      showSelectedLabel={false}
                      showSecondarySelectedLabel={false}
                      placeholder={+91}
                      className="input-btn"
                      selectButtonClassName="selected-input"
                      selectedSize={14}
                      optionsSize={14}
                    />
                    <span className="text-[#AEAEAE] font-semibold">|</span>
                    <InputMobileNumber
                      placeholder="Enter Phone Number"
                      name="mobileNumber"
                      register={register}
                    ></InputMobileNumber>
                  </div>
                </div>
                <div className="errorField">
                  {errors.mobileNumber?.message
                    ? t(errors.mobileNumber?.message)
                    : ""}
                </div>
              </div>
              <button className="bgBlue text-white text-center radius p-3 w-full font-bold">
                Next
              </button>
            </form>
            <p className="text-[#030027] mt-2 mb-4">
              By clicking, I accept the{" "}
              <Link to="" className="underline">
                terms of service
              </Link>{" "}
              and{" "}
              <Link to="" className="underline">
                privacy policy.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
