import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import WorkPage from './pages/WorkPage'
import ProjectsPage from './pages/ProjectsPage'
import SkillsPage from './pages/SkillsPage'
import ContactPage from './pages/ContactPage'

function AppLayout() {
  const location = useLocation()
  return (
    <div className="min-h-dvh bg-bg-primary flex flex-col">
      <div className="max-w-md sm:max-w-lg lg:max-w-4xl mx-auto w-full flex-1 flex flex-col relative lg:ml-44 lg:px-6">
        <Header />
        <main className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}
