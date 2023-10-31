import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Perform from "../Pages/NewYork/Perform";
import DefaultLayout from "../Layouts";
import Home from "../Pages/home";
import SignUp from "../Pages/NewYork/SignUp";
import Vendors from "../Pages/NewYork/Vendors";
import VendorApplication from "../Pages/NewYork/Vendors/VendorSignup";
import Volunteer from "../Pages/NewYork/Volunteer";
import VolunteerSignUp from "../Pages/NewYork/Volunteer/SignUp";
import SanDiegoHome from "../Pages/SanDiego";
import HoustonHome from "../Pages/Houston";
import NewYorkHome from "../Pages/NewYork";

export const NavRoutes = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<DefaultLayout/>}>
            <Route index element={<Home/>} />
            <Route path="/NewYork" element={<NewYorkHome />} />
            <Route path="/NewYork/Perform" element={<Perform />} />
            <Route path="/NewYork/Perform/SignUp" element={<SignUp />} />
            <Route path="/NewYork/Vendor" element={<Vendors />} />
            <Route path="/NewYork/Vendor/SignUp" element={<VendorApplication />} />
            <Route path="/NewYork/Volunteer" element={<Volunteer />} />
            <Route path="/NewYork/Volunteer/SignUp" element={<VolunteerSignUp />} />
            <Route path="/SanDiego" element={<SanDiegoHome />} />
            <Route path="/SanDiego/Perform" element={<Perform />} />
            <Route path="/SanDiego/Perform/SignUp" element={<SignUp />} />
            <Route path="/SanDiego/Vendor" element={<Vendors />} />
            <Route path="/SanDiego/Vendor/SignUp" element={<VendorApplication />} />
            <Route path="/SanDiego/Volunteer" element={<Volunteer />} />
            <Route path="/SanDiego/Volunteer/SignUp" element={<VolunteerSignUp />} />
            <Route path="/Houston" element={<HoustonHome />} />
            <Route path="/Houston/Perform" element={<Perform />} />
            <Route path="/Houston/Perform/SignUp" element={<SignUp />} />
            <Route path="/Houston/Vendor" element={<Vendors />} />
            <Route path="/Houston/Vendor/SignUp" element={<VendorApplication />} />
            <Route path="/Houston/Volunteer" element={<Volunteer />} />
            <Route path="/Houston/Volunteer/SignUp" element={<VolunteerSignUp />} />
        </Route>
    )
)