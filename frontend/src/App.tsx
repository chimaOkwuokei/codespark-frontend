import './index.css'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { BusinessNewsUi, EntertainmentNewsUi, HealthNewsUi, LatestNewsUi, Login, NationalNewsUi, OnboardingFormUi, ScienceNewsUi, SignUp, SportNewsUi, TechnologyNewsUi, WorldNewsUi } from './pages'
import { AppSidebar } from "@/components/app-sidebar";

function UserLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className='w-full'>
        <SidebarTrigger />
        <Outlet /> {/* Nested routes will render here */}
      </main>
    </SidebarProvider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* TODO: Protect the routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<SignUp />} />
        <Route path="/channel-subscription" element={<OnboardingFormUi />} />
        {/* <Route path="/signin-categories" element={<CategoriesUi />} />
        <Route path="/signin-channel" element={<DeliveryChannelSelectionUi />} /> */}
        {/* Define the User Layout with Nested Routes */}
        <Route path="/user" element={<UserLayout />}>
          <Route path="latest-news" element={<LatestNewsUi />} />
          <Route path="national" element={<NationalNewsUi />} />
          <Route path="worlds" element={<WorldNewsUi />} />
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


      </Routes>
    </BrowserRouter>
  )
}

export default App
