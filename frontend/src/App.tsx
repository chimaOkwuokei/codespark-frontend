import './index.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { BusinessNewsUi, HeroUi, EntertainmentNewsUi, HealthNewsUi, LatestNewsUi, Login, NationalNewsUi, OnboardingFormUi, ScienceNewsUi, SignUp, SportNewsUi, TechnologyNewsUi, WorldNewsUi, UserLayout, AdminLayout, CreateNewsUi, ProfileDisplayUi, NoMatch } from './pages';
// import ProtectedRedirect from './utils/ProtectedRedirect'
import UserProtectedRoute from './utils/UserProtectedRoute';
import AdminProtectedRoute from './utils/AdminProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<ProtectedRedirect />} /> */}
        
        <Route path="/" element={<HeroUi />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/channel-subscription" element={<OnboardingFormUi />} />
        {/* <Route path="/signin-categories" element={<CategoriesUi />} />
        <Route path="/signin-channel" element={<DeliveryChannelSelectionUi />} /> */}
        {/* Define the User Layout with Nested Routes */}

        <Route path="/user" element={<UserProtectedRoute />}>
          <Route element={<UserLayout />}>
            <Route index element={<Navigate to="latest-news" replace />} />
            <Route path="latest-news" element={<LatestNewsUi />} />
            <Route path="national" element={<NationalNewsUi />} />
            <Route path="world" element={<WorldNewsUi />} />
            <Route path="sports" element={<SportNewsUi />} />
            <Route path="business" element={<BusinessNewsUi />} />
            <Route path="entertainment" element={<EntertainmentNewsUi />} />
            <Route path="technology" element={<TechnologyNewsUi />} />
            <Route path="science" element={<ScienceNewsUi />} />
            <Route path="health" element={<HealthNewsUi />} />
            <Route path="*" element={<NoMatch />} /> {/* Catch-all inside user routes */}
          </Route>
        </Route>
        {/* Define the User Layout with Nested Routes */}
        <Route path="/admin" element={<AdminProtectedRoute />}>
          <Route element={<AdminLayout />}>
            <Route index element={<Navigate to="profile" replace />} />
            <Route path="profile" element={<ProfileDisplayUi />} />
            <Route path="create-news" element={<CreateNewsUi />} />
            <Route path="*" element={<NoMatch />} /> {/* Catch-all inside admin routes */}
          </Route>
        </Route>

        {/* Using path="*"" means "match anything", so this route
          acts like a catch-all for URLs that we don't have explicit
          routes for. */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
