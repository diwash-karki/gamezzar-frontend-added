import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layout/DefaultLayout'
import { Home } from './pages/Home/index'
import { Chat } from './pages/Chat/index'
import { Profile } from './pages/Profile/index'
import { Dashboard } from './pages/Dashboard/index'
import LoginPage from './pages/Login/LoginPage'
import SignupPage from './pages/Signup/SignupPage'
import CardUI from './pages/CardUI/CardUI'
import HelpCenter from './pages/Help/HelpCenter'
import ContactUs from './pages/Contact/ContactUs'
import BlogPage from './pages/Blog/BlogPage'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chat" element={<Chat />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/explore' element={<CardUI />} />
        <Route path='/help' element={<HelpCenter />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/blog' element={<BlogPage />} />
      </Route>
    </Routes>
  )
}