import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { AuthProvider} from "./lib/auth";
// import ProtectedRoute from "./components/ProtectedRoute";

// Public
import Home from "./pages/Home";

// Shop pages
import Batteries from "./pages/shop/Batteries";
import Inverters from "./pages/shop/Inverters";
import SolarPanels from "./pages/shop/SolarPanels";
import SolarKits from "./pages/shop/SolarKits";
import OurStore from "./pages/shop/OurStore";
import Brands from "./pages/shop/Brands";
import Projects from "./pages/shop/Projects";
import Faq from "./pages/Faq";
import AboutUs from "./pages/AboutUs";
import OurBlog from "./pages/OurBlog";
import ContactUs from "./pages/ContactUs";
import NewArrivals from "./pages/shop/allproducts/NewArrivals";
import TopSellersProducts  from "./pages/shop/allproducts/TopSellersProducts";
import KitsBundles from "./pages/shop/allproducts/KitsBandles";
import BatteryAccessories from "./pages/shop/allproducts/BatteryAccessories";
import PowerStations from "./pages/shop/allproducts/PowerStations";
import MobileRv from "./pages/shop/allproducts/MobileRv";
import EvChargers from "./pages/shop/allproducts/EvChargers";
import Wiring from "./pages/shop/allproducts/Wiring";
import SolarPanelCleaning from "./pages/shop/allproducts/SolarPanelCleaning";
import MountingOptions from "./pages/shop/allproducts/MountingOptions";
import SystemComponents from "./pages/shop/allproducts/SystemComponents";
import HighEfficiencyAppliances from "./pages/shop/allproducts/HighEfficiencyAppliances";
import ChargeControllers from "./pages/shop/allproducts/ChargeControllers";
import CampingAndOutdoors from "./pages/shop/shopbyproject/CampingAndOutdoors";
import EvCharging from "./pages/shop/shopbyproject/EvCharging";
import Homesteading from "./pages/shop/shopbyproject/Homesteading";
import MarineAndBoating from "./pages/shop/shopbyproject/MarineAndBoating";
import MobileAndAdventure from "./pages/shop/shopbyproject/MobileAndAdventure";
import MountingSolutions from "./pages/shop/shopbyproject/MountingSolutions";
import SurvivalPreparedness from "./pages/shop/shopbyproject/SurvivalPreparedness";
import BatteryBackup from "./pages/shop/shopbyproject/BatteryBackup";
import RapidShutdown from "./pages/shop/allproducts/RapidShutdown";

// Auth pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";


// const queryClient = new QueryClient();

export default function App() {
  return (
    // <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      {/* <AuthProvider> */}
      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/support" element={<Faq />} />
        <Route path="/discover-more/faq" element={<Faq />} />
        <Route path="/discover-more/about-us" element={<AboutUs />} />
        <Route path="/discover-more/contact-us" element={<ContactUs />} />
        <Route path="/discover-more/our-blog" element={<OurBlog />} />

        {/* Shop pages */}
        <Route path="/shop/brands" element={<Brands />} />
        <Route path="/shop/batteries" element={<Batteries />} />
        <Route path="/shop/inverters" element={<Inverters />} />
        <Route path="/shop/solar-panels" element={<SolarPanels />} />
        <Route path="/shop/solar-kits" element={<SolarKits />} />
        <Route path="/shop/our-store" element={<OurStore />} />
        <Route path="/shop/projects" element={<Projects />} />
        {/* Shop by project pages */}
        <Route path="/shop/products/new-arrivals" element={<NewArrivals />} />
        <Route path="/shop/products/top-sellers" element={<TopSellersProducts />} />
        <Route path="/shop/products/kits-bundles" element={<KitsBundles />} />
        <Route path="/shop/products/portable-power-stations" element={<PowerStations />} />
        <Route path="/shop/products/battery-accessories" element={<BatteryAccessories />} />
        <Route path="/shop/products/mobile-rv" element={<MobileRv />} />
        <Route path="/shop/products/ev-chargers" element={<EvChargers />} />
        <Route path="/shop/products/wiring" element={<Wiring />} />
        <Route path="/shop/products/solar-panel-cleaning" element={<SolarPanelCleaning />} />
        <Route path="/shop/products/mounting-options" element={<MountingOptions />} />
        <Route path="/shop/products/system-components" element={<SystemComponents />} />
        <Route path="/shop/products/high-efficiency-appliances" element={<HighEfficiencyAppliances />} />
        <Route path="/shop/products/charge-controllers" element={<ChargeControllers />} />
        <Route path="/shop/products/rapid-shutdown-equipment" element={<RapidShutdown />} />
        {/* Shop By Project */}
        <Route path="/shop/projects/camping-outdoors" element={<CampingAndOutdoors />} />
        <Route path="/shop/projects/ev-charging" element={<EvCharging />} />
        <Route path="/shop/projects/homesteading" element={<Homesteading />} />
        <Route path="/shop/projects/marine-boating" element={<MarineAndBoating />} />
        <Route path="/shop/projects/mobile-adventure" element={<MobileAndAdventure />} />
        <Route path="/shop/projects/mounting-solutions" element={<MountingSolutions />} />
        <Route path="/shop/projects/survival-preparedness" element={<SurvivalPreparedness />} />
        <Route path="/shop/projects/battery-backup" element={<BatteryBackup />} />

        {/* Auth Routes */}
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/Register" element={<Register />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        <Route path="/auth/reset-password" element={<ResetPassword />} />

        {/* Protected */}
        {/* User & Marketer */}
        {/* <Route element={<ProtectedRoute allowedRoles={["USER", "MARKETER"]} />}>
              <Route element={<DashboardLayout />}>
                <Route path="/welcome" element={<DashboardPage />} />
                <Route path="/trade" element={<BotsPage />} />
                <Route path="/exchanges" element={<ExchangesPage />} />
                <Route path="/profile" element={<UserProfilePage />} />
                <Route path="/deposit" element={<UserDepositsPage />} />
                <Route path="/withdraw" element={<WithrawalsPage />} />
                <Route path="/history" element={<HistoryPage />} />
              </Route>
            </Route> */}

        {/* Admin-only */}
        {/* <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
              <Route element={<AdminLayout />}>
                <Route path="/admin" element={<AdminDashboardPage />} />
                <Route path="/admin/users" element={<UsersPage />} />
                <Route path="/admin/marketers" element={<MarketersPage />} />
                <Route path="/admin/trades" element={<TradesPage />} />
                <Route path="/admin/deposits" element={<DepositsPage />} />
                <Route path="/admin/settings" element={<SettingsPage />} />
                <Route path="/admin/profile" element={<ProfilePage />} />
              </Route>
            </Route> */}

        {/* CATCH-ALL ROUTE FOR 404 ERRORS */}
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
      {/* </AuthProvider> */}
    </BrowserRouter>
    // </QueryClientProvider>
  );
}
