import { useRef } from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import MainSection from '@/components/MainSection/MainSection'
import AboutSection from '@/components/AboutSection/AboutSection'
import ProjectSection from '@/components/ProjectSection/ProjectSection'
import ContactSection from '@/components/ContactSection/ContactSection'
import ToTopBtn from './components/UI/Button/ToTopBtn'

function App() {
  const mainRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const projectRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const scrollToMain = () => {
    mainRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToProject = () => {
    projectRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const clickHandler = {
    scrollToMain,
    scrollToAbout,
    scrollToProject,
    scrollToContact,
  }

  return (
    <>
      <Header clickHandler={clickHandler} />
      <ToTopBtn scrollToTop={scrollToMain} />
      <MainSection ref={mainRef} />
      <AboutSection ref={aboutRef} />
      <ProjectSection ref={projectRef} />
      <ContactSection ref={contactRef} />
      <Footer />
    </>
  )
}

export default App
