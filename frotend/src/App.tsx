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

        {/* Shop pages */}
        <Route path="/shop/brands" element={<Brands />} />
        <Route path="/shop/batteries" element={<Batteries />} />
        <Route path="/shop/inverters" element={<Inverters />} />
        <Route path="/shop/solar-panels" element={<SolarPanels />} />
        <Route path="/shop/solar-kits" element={<SolarKits />} />
        <Route path="/shop/our-store" element={<OurStore />} />
        <Route path="/shop/projects" element={<Projects />} />

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
