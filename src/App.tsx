import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@/components/theme/ThemeProvider'
import { Layout } from '@/components/layout/Layout'
import { HomePage } from '@/pages/HomePage'
import { PrivacyPage } from '@/pages/PrivacyPage'
import { DriveSmoothPrivacyPage } from '@/pages/DriveSmoothPrivacyPage'
import { TermsPage } from '@/pages/TermsPage'
import { NotFoundPage } from '@/pages/NotFoundPage'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="privacy" element={<PrivacyPage />} />
            <Route
              path="drivesmooth/privacy"
              element={<DriveSmoothPrivacyPage />}
            />
            <Route path="terms" element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
