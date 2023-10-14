import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Perform from "../Pages/NewYork/Perform";
import DefaultLayout from "../Layouts";
import Home from "../Pages/home";
import SignUp from "../Pages/NewYork/SignUp";
import Vendors from "../Pages/NewYork/Vendors";
import VendorApplication from "../Pages/NewYork/Vendors/VendorSignup";
import Volunteer from "../Pages/NewYork/Volunteer";
import VolunteerSignUp from "../Pages/NewYork/Volunteer/SignUp";

export const NavRoutes = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<DefaultLayout/>}>
            <Route index element={<Home/>} />
            <Route path="/NewYork/Perform" element={<Perform />} />
            <Route path="/NewYork/Perform/SignUp" element={<SignUp />} />
            <Route path="/NewYork/Vendor" element={<Vendors />} />
            <Route path="/NewYork/Vendor/SignUp" element={<VendorApplication />} />
            <Route path="/NewYork/Volunteer" element={<Volunteer />} />
            <Route path="/NewYork/Volunteer/SignUp" element={<VolunteerSignUp />} />
        </Route>
    )
)