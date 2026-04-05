import React from 'react'
import StudentDashboard from './student/Dashboard'
import TeacherDashboard from './teacher/Dashboard'
import AdminDashboard from './admin/Dashboard'
import UserManagement from './admin/UserManagement'
import CourseCreation from './admin/CourseCreation'
import SystemSettings from './admin/SystemSettings'
import Reports from './admin/Reports'
import Auth from './credentials/Auth'
import AdminLayout from './admin/AdminLayout'
import { Routes, Route } from 'react-router-dom'
import Login from './credentials/Login'

function App() {
  return (
    <>
      <Routes>
        {/* auth */}
        <Route path="/" element={<Auth />} />
        <Route path="/login" element={<Login />} />


        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/teacher" element={<TeacherDashboard />} />

        {/* Admin Section with Nested Layout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="courses" element={<CourseCreation />} />
          <Route path="settings" element={<SystemSettings />} />
          <Route path="reports" element={<Reports />} />
        </Route>
      </Routes>
    </>
  )
}

export default App