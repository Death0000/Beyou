import { createBrowserRouter } from 'react-router'
import LandingPage from './pages/LandingPage'
import AuthPage from './pages/AuthPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PlatformLayout from './pages/platform/PlatformLayout'
import Dashboard from './pages/platform/Dashboard'
import Discover from './pages/platform/Discover'
import Ideas from './pages/platform/Ideas'
import Messages from './pages/platform/Messages'
import Community from './pages/platform/Community'
import Profile from './pages/platform/Profile'

export const router = createBrowserRouter([
  { path: '/', Component: LandingPage },
  { path: '/auth', Component: AuthPage },
  { path: '/about', Component: AboutPage },
  { path: '/contact', Component: ContactPage },
  {
    path: '/platform',
    Component: PlatformLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: 'discover', Component: Discover },
      { path: 'ideas', Component: Ideas },
      { path: 'messages', Component: Messages },
      { path: 'community', Component: Community },
      { path: 'profile', Component: Profile },
    ],
  },
])
