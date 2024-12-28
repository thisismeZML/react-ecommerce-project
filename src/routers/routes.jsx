import { createBrowserRouter } from "react-router-dom";
import publicRoute from "./publicRoute";
import authRoute from "./authRoute";

const router = createBrowserRouter([
    ...publicRoute,
    ...authRoute,
])

export default router;