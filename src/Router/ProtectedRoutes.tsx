import LoginPage from "../Components/login/LoginPage/LoginPage"
import Register from "../Components/Register/Register"

const ProtectedRoutes = [
    {
        path : '/login',
        element : <LoginPage/>
    },{
        path : '/register',
        element : <Register />
    }
]

export default ProtectedRoutes