import './index.css'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { LatestNewsUi, Login, SignUp } from './pages'
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

        <Route path="/login" element={<Login />} />
        <Route path="/" element={<SignUp />} />

        {/* Define the User Layout with Nested Routes */}
        <Route path="/user" element={<UserLayout />}>
          <Route path="latest-news" element={<LatestNewsUi />} />
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
