import {
  AboutSection,
  ContactSection,
  Footer,
  Header,
  MainSection,
  ProjectSection,
  ToTopBtn,
} from '@/components'
import { useCallback, useRef } from 'react'

interface RefsMap {
  main: React.RefObject<HTMLDivElement>
  about: React.RefObject<HTMLDivElement>
  project: React.RefObject<HTMLDivElement>
  contact: React.RefObject<HTMLDivElement>
}

type SectionKey = keyof RefsMap

function App() {
  const refs = {
    main: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    project: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  }

  const scrollTo = useCallback(
    (section: SectionKey) => {
      refs[section].current?.scrollIntoView({ behavior: 'smooth' })
    },
    [refs],
  )

  const clickHandler = {
    scrollToMain: () => scrollTo('main'),
    scrollToAbout: () => scrollTo('about'),
    scrollToProject: () => scrollTo('project'),
    scrollToContact: () => scrollTo('contact'),
  }

  return (
    <>
      <Header clickHandler={clickHandler} />
      <ToTopBtn scrollToTop={clickHandler.scrollToMain} />
      <MainSection ref={refs.main} />
      <AboutSection ref={refs.about} />
      <ProjectSection ref={refs.project} />
      <ContactSection ref={refs.contact} />
      <Footer />
    </>
  )
}

export default App
