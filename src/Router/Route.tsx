import { createBrowserRouter } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import WithoutProtectedRoutes from "./WithoutProtectedRoutes";

const router = createBrowserRouter([
    ...ProtectedRoutes,
    ...WithoutProtectedRoutes,
])

export default router