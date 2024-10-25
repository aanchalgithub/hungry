import { t } from "i18next";
import React, { useEffect, useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import Modal from "react-responsive-modal";
import { countries, customLabels } from "../../utils/countries";
import { Link, useNavigate } from "react-router-dom";
import InputMobileNumber from "../FormFields/InputMobileNo";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import OTPInput from "react-otp-input";
import { CheckValidOtp } from "../../utils/CheckValidOtp";
import OtpVerifyApi from "../../api/OtpVerifyApi";
import { SETUSERDATA } from "../../Redux/features/userData/userAction";
import { resendOtp } from "../../api/resendOtp";
import LoginApi from "../../api/LoginApi";

export default function Otp() {
    const { t } = useTranslation();
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);
    const [openDltModal, setOpenDltModal] = useState(false);
    const onOpenDltModal = () => setOpenDltModal(true);
    const onCloseDltModal = () => setOpenDltModal(false);
    const [phoneNo, setPhoneNo] = useState(
      sessionStorage.getItem("yop-phone") || ""
    );
    const [selectedPhoneCode, setSelectedPhoneCode] = useState("GB");
    useEffect(() =>{
        if(sessionStorage.getItem("yop-phone") === null){
          navigate('/login')
        }
    },[navigate])

    const handleSubmit = async(e:any) =>{
        e.preventDefault()      
        setIsSubmit(true)  
        if(CheckValidOtp(otp)){
          console.log('check');
          
            setLoading(true)
            const data = await OtpVerifyApi(otp)
          dispatch(SETUSERDATA(data.user_data))
            if(data.user_data.is_profile_complete == 0){
              navigate('/register',{
                replace: true
              })
            }else{
              navigate('/',{
                replace : true
              })
            }
            setLoading(false)
        }
    }

    useEffect(()=>{
      if(isSubmit){
        if(!CheckValidOtp(otp)){
          setError(t("VerifyOtp.error"))
        }else{
          setError("")
        }
      }
    },[otp,isSubmit])

    const resendOtpHandler = async() =>{
      setLoading(true)
      await resendOtp()
      setLoading(false)
    }

    const handleEditOnclick = async () => {
      let state = { mobileNumber: phoneNo };
      if (phoneNo) {
        sessionStorage.setItem("yop-phone", phoneNo);
        setOpenDltModal(false);
        setLoading(true);
        setLoading(await LoginApi(state, navigate));
      }
    };
  return (
    <>
    <div className=" bg-[#F3F5FA] h-screen md:p-10">
        <div className="store-card max-w-[30rem] h-screen md:h-auto !p-6 m-auto">
        <h1 className="font-bold text-2xl mb-2">Verify with OTP sent to</h1>
        <p className=" text-lg">{sessionStorage.getItem("yop-phone")}</p>
        <div className="mt-5 mb-7">
        <div className="mb-3">
                <Link
                  to="/login"
                  className=" text-base font-bold  text-[#1466FA] cursor-pointer"
                >
                  Change Number
                </Link>
              </div>
              <OTPInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                inputType="tel"
                renderInput={(props) => <input {...props} />}
                containerStyle="justify-between gap-2"
                inputStyle="!border border-black !w-full rounded-sm p-3 py-4 !rounded-[13px] font-bold"
              />
              <div className="errorField">{error}</div>
        </div>
        <button
              type="button"
              onClick={handleSubmit}
              className="bgBlue text-white text-center radius p-3 w-full font-bold"
            >
              Continue
            </button>
            <p
              className=" mt-2 mb-4 text-center  font-bold  text-[#1466FA] cursor-pointer"
              onClick={resendOtpHandler}
            >
              Resend OTP
            </p>
        </div>
    </div>
    
      <Modal
        open={openDltModal}
        onClose={onCloseDltModal}
        center
        classNames={{
          modal: "rounded-md min-w-80",
        }}
      >
        <div>
          <h2 className="text-xl mt-2 mb-3 font-semibold">
            {t("VerifyOtp.newNumber")}
          </h2>
          <div className="mt-10 mb-5 relative border border-[#34558B] rounded-[10px] p-4">
            <label className="absolute left-5 -top-3 bg-white textBlue">
              Mobile Number
            </label>
            <div className="flex gap-2">
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
                className="otp-input p-0"
                selectButtonClassName="selected-input p-0 border-none"
                selectedSize={14}
              />
              <span className="text-[#AEAEAE] font-semibold">|</span>
              <input
                placeholder="Enter Phone Number"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
              />
            </div>
          </div>

          <div className="flex gap-2 justify-between">
            <button
              onClick={() => setOpenDltModal(false)}
              className="border border-[#34558B] rounded-md textBlue font-semibold w-full p-3"
            >
              {t("VerifyOtp.cancel")}
            </button>
            <button
              onClick={handleEditOnclick}
              className="bgBlue rounded-md text-white font-semibold w-full p-3"
            >
              {t("VerifyOtp.update")}
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
