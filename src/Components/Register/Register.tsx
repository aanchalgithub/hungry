import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { registerFormInitial, registerFormSchema } from './RegisterValidation';
import InputText from '../FormFields/InputText';
import { t } from 'i18next';
import axiosInstance from '../../Axios-Config/Axios-Config';
import { SuccessToast } from '../ToastComponent/SuccessToast';
import { useDispatch } from 'react-redux';
import { SETUSERDATA } from '../../Redux/features/userData/userAction';
import { Link, useNavigate } from 'react-router-dom';
import { ErrorToast } from '../ToastComponent/ErrorToast';

export default function Register() {
  const [isSubmit,setIsSubmit] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {
    handleSubmit,
    formState: { errors },
    register,
    setValue,
    getValues,
    reset,
  } = useForm({
    resolver: yupResolver(registerFormSchema),
    defaultValues: registerFormInitial,
  });

  const registerFormSubmitHandle = async(state:any) =>{
    console.log(state, "register data");
    
    setIsSubmit(false)
    try {
      console.log("entry");
      
      const {data} :any = axiosInstance.post('/complete/profile',state)
      console.log(data,'register datatrhytj');
      console.log(data.success ? data.success===true : data?.success === false,'true');
      
      if(data.success){
          SuccessToast(data?.message)
          dispatch(SETUSERDATA(data))
          reset();
          navigate("/menu");
      }else {
        ErrorToast(data.message);
      }
      return false;
    } catch (error:any) {
      ErrorToast(error.message);
      return false;
    }finally{
      setIsSubmit(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(registerFormSubmitHandle)} >
      <div className=" bg-[#F3F5FA] h-screen md:p-10">
        <div className="store-card max-w-[30rem] !p-6 m-auto h-screen md:h-auto">
        <h1 className="font-bold text-2xl">Complete your profile</h1>
        <p className="text-[#606060] text-lg mb-3">
              We need your name & email in order to complete your profile.
            </p>

        <div className="formItem">
        <InputText
                placeholder={"Enter First Name"}
                name="first_name"
                register={register}
              />
              <div className="errorField">
                {errors.first_name?.message
                  ? t(errors.first_name?.message)
                  : ""}
              </div>
        </div>
        <div className="formItem">
              <InputText
                placeholder={"Enter Last Name"}
                name="last_name"
                register={register}
              />
              <div className="errorField">
                {errors.last_name?.message ? t(errors.last_name?.message) : ""}
              </div>
            </div>
            <div className="formItem">
              <InputText
                placeholder={"Enter Email(optional)"}
                name="email"
                register={register}
              />
              <div className="errorField">
                {errors.email?.message ? t(errors.email?.message) : ""}
              </div>
            </div>
            <Link to='/menu'>
            <button className="bgBlue text-white text-center radius p-3 w-full font-bold">
              Submit
            </button>
            </Link>
        </div>
      </div>
    </form>
  )
}
