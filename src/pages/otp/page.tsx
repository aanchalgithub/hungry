import React from 'react'
import { MainWrapper } from '../../wrapper/MainWrapper'
import { ToastContainer } from 'react-toastify'
import Otp from '../../Components/OTP/Otp'

export default function page() {
  return (
    <>
           <ToastContainer />
            <MainWrapper>
                <Otp />
            </MainWrapper>
    </>
  )
}
