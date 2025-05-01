import './index.css'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { BusinessNewsUi, EntertainmentNewsUi, HealthNewsUi, LatestNewsUi, Login, NationalNewsUi, OnboardingFormUi, ScienceNewsUi, SignUp, SportNewsUi, TechnologyNewsUi, WorldNewsUi } from './pages'
import { AppSidebar } from "@/components/app-sidebar";
import { useEffect, useState } from 'react';

function UserLayout() {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const userEmail = localStorage.getItem('email');
    if (userEmail) {
      setEmail(userEmail);
    }
  }, []);
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className='w-full'>
        <div className="flex flex-row items-center justify-between gap-4 pt-7 px-4">
          {/* Sidebar Trigger */}
          <div className="flex-shrink-0">
            <SidebarTrigger />
          </div>

          {/* Welcome Message */}
          <div className="xs:block text-sm text-gray-700 whitespace-nowrap">
            Welcome, <span className="font-semibold">{email || 'Guest'}</span>
          </div>

          {/* Search + Profile */}
          <div className="flex items-center gap-3 flex-grow justify-end">
            {/* Full Search Bar on sm+ */}
            <div className="hidden sm:flex items-center bg-white rounded-full px-3 py-1 max-w-xs w-full">
              <input
                type="text"
                placeholder="Search"
                className="flex-1 bg-transparent outline-none text-sm text-gray-800"
              />
              <div className="bg-[#2B366F] p-2 rounded-full flex items-center justify-center ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
                  />
                </svg>
              </div>
            </div>

            {/* Icon-only search for small screens */}
            <div className="sm:hidden bg-[#2B366F] p-2 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
                />
              </svg>
            </div>

            {/* Profile Section */}
            <div className="hidden sm:flex relative flex-shrink-0">
              <img
                src="/profile.svg"
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover"
              />
              <img
                src="/settings.svg"
                alt="Settings"
                className="w-5 h-5 absolute -bottom-1 -right-1"
              />
            </div>
          </div>
        </div>
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


      </Routes>
    </BrowserRouter>
  )
}

export default App
