import Otp from "../Components/OTP/Otp"
import ProfileView from "../Components/Profile/ProfileView/ProfileView"
import TestingFile from "../Components/TestingFile/TestingFile"
import Menu from "../pages/menu/page"

const WithoutProtectedRoutes = [
    {
        path : '/',
        element : <Menu />
    },
    {
        path : '/profile',
        element : <ProfileView/>
    },
    {
        path : '/menu',
        element : <Menu />
    },
    {
        path : "/test",
        element : <TestingFile />
    },
    {
        path: "/verify-otp",
        element: <Otp />,
      },
]

export default WithoutProtectedRoutes