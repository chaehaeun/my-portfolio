import Container from '@/components/UI/Container/Container'
import Title from '@/components/UI/Title/Title'
import Project from '@/components/UI/Project/Project'
import Header from '@/components/Header/Header'

function App() {
  return (
    <>
      <Header />
      <Container style={''}>
        <Title sectionName={'Projects'} about={true} />
        <Project />
      </Container>
    </>
  )
}

export default App
