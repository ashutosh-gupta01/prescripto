import React, { useContext } from 'react'
import LoginAdmin from './pages/LoginAdmin'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import Sidbar from './components/Sidbar';
import { Route, Routes } from 'react-router-dom';
import DashBoard from './pages/Admin/DashBoard';
import AllApointments from './pages/Admin/AllApointments';
import AddDoctor from './pages/Admin/AddDoctor';
import DoctorList from './pages/Admin/DoctorList';
import { DoctorContext } from './context/DoctorContext';
import DoctoDashboard from './pages/Doctor/DoctoDashboard';
import DoctorAppointments from './pages/Doctor/DoctorAppointments';
import DoctorProfile from './pages/Doctor/DoctorProfile';

const App = () => {

  const {aToken} = useContext(AdminContext)
  const {dToken} = useContext(DoctorContext)

  return aToken || dToken ? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer/>
      <Navbar/>
      <div className='flex items-start'>
        <Sidbar/>
        <Routes>
          {/* Admin Route */}
          <Route path='/' element={<></>}></Route>
          <Route path='/admin-dashboard' element={<DashBoard/>}></Route>
          <Route path='/all-appointment' element={<AllApointments/>}></Route>
          <Route path='/add-doctor' element={<AddDoctor/>}></Route>
          <Route path='/doctor-list' element={<DoctorList/>}></Route>

          {/* Doctor Route */}
          <Route path='/doctor-dashboard' element={<DoctoDashboard/>}></Route>
          <Route path='/doctor-appointments' element={<DoctorAppointments/>}></Route>
          <Route path='/doctor-profile' element={<DoctorProfile/>}></Route>
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <LoginAdmin/>
      <ToastContainer/>
    </>
  )
}

export default App
