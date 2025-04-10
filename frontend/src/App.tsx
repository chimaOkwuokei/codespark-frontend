import './index.css'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { Login, SignUp } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/" element={<SignUp />} />

        {/* Define the User Layout with Nested Routes */}
        {/* <Route path="/user" element={<UserLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="loan-form" element={<LoanEntryForm />} />
          <Route path="schedule" element={<SchedulePage />} />
          <Route path="profile" element={<Profile />} />
        </Route> */}


      </Routes>
    </BrowserRouter>
  )
}

export default App
