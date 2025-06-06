import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, Box } from '@mui/material'; // تمت إضافة Box
import Theme from './Styles/Theme';
import NavBar from './Combonents/NavBar/NavBar';
import HeroSection from './Combonents/Hero/HeroSection';
import { AnimatePresence } from 'framer-motion';
import ProjectMain from './Combonents/ProjectsSection/ProjectMain';
import Home from './Pages/Home.jsx';
import Footer from './Combonents/Footer/Footer.jsx';
import ContactFloatingButton from './ContactFloatingButton.jsx';
import AboutPage from './Pages/AboutPage.jsx';
import SkillsPage from './Pages/SkillsPage.jsx';
import ProjectsPage from './Pages/ProjectsPage.jsx';
import ContactPage from './Pages/ContactPage.jsx'
import ScrollToTop from './ScrollToTop.jsx';
function App() {
  return (
    <ThemeProvider theme={Theme}>
      {/* الحاوية الرئيسية مع الخلفية الموحدة */}
      <Box
        sx={{
          minHeight: '100vh', // يشغل ارتفاع الشاشة كاملة
          background:Theme.palette.background.default,    
          //  `
          //   linear-gradient(
          //     135deg,
          //     ${Theme.palette.primary.main} 0%,
          //     ${Theme.palette.background.default} 100%
          //   )`, // تدرج لوني من الثيم
          backgroundAttachment: 'fixed', // ثبات الخلفية عند التمرير
        }}
      >
        <Router>
          <NavBar />
          <ContactFloatingButton/>
          {/* محتوى الصفحات مع هامش علوي لمنع تداخل النافبار */}
          <Box component="main" sx={{ pt: 8 }}>
            <AnimatePresence mode="wait">
              <Routes>
                {/* <ScrollToTop/>     */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage/>} />
                <Route path="/skills" element={<SkillsPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/contact" element={<ContactPage />} />

              </Routes>
            </AnimatePresence>
          </Box>
        </Router>
        <Footer />

      </Box>
    </ThemeProvider>
  );
}

export default App;