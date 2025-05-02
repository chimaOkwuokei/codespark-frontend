import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BusinessNewsUi, HeroUi, EntertainmentNewsUi, HealthNewsUi, LatestNewsUi, Login, NationalNewsUi, OnboardingFormUi, ScienceNewsUi, SignUp, SportNewsUi, TechnologyNewsUi, WorldNewsUi, UserLayout, AdminLayout, CreateNewsUi, ProfileDisplayUi } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* TODO: Protect the routes */}
        <Route path="/" element={<HeroUi />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/channel-subscription" element={<OnboardingFormUi />} />
        {/* <Route path="/signin-categories" element={<CategoriesUi />} />
        <Route path="/signin-channel" element={<DeliveryChannelSelectionUi />} /> */}
        {/* Define the User Layout with Nested Routes */}
        <Route path="/user" element={<UserLayout />}>
          <Route path="latest-news" element={<LatestNewsUi />} />
          <Route path="national" element={<NationalNewsUi />} />
          <Route path="world" element={<WorldNewsUi />} />
          <Route path="sports" element={<SportNewsUi />} />
          <Route path="business" element={<BusinessNewsUi />} />
          <Route path="entertainment" element={<EntertainmentNewsUi />} />
          <Route path="technology" element={<TechnologyNewsUi />} />
          <Route path="science" element={<ScienceNewsUi />} />
          <Route path="health" element={<HealthNewsUi />} />
          {/* <Route path="events" element={<Student />} /> */}
          {/* <Route path="loan-form" element={<LoanEntryForm />} />
          <Route path="schedule" element={<SchedulePage />} />
          <Route path="profile" element={<Profile />} /> */}
        </Route>

        {/* Define the User Layout with Nested Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="profile" element={<ProfileDisplayUi />} />
          <Route path="create-news" element={<CreateNewsUi />} />
        </Route>


      </Routes>
    </BrowserRouter>
  )
}

export default App
