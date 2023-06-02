import { useEffect, useState } from 'react'
import ProjectArticle from '@/components/UI/Project/ProjectArticle'
// import Button from '@/components/UI/Button/Button'
import { dbService } from '@/firebase-config'
import { DocumentData, collection, getDocs, query } from 'firebase/firestore'

interface DataType extends DocumentData {
  projects: string
  date: string
  description: string
  techStack: string[]
  tag: string[]
  github?: string
  notion?: string
  imgURL: string
  deploy?: string
}

const Project = () => {
  const [projectData, setProjectData] = useState<DataType[]>([])

  const getData = async () => {
    try {
      const projectQuery = query(collection(dbService, 'project'))

      const querySnapshot = await getDocs(projectQuery)
      const dataQuery = querySnapshot.docs.map(doc => doc.data() as DataType)
      dataQuery.sort((a, b) => {
        return b.id - a.id
      })
      setProjectData(dataQuery)
    } catch (error) {
      console.error('에러에러에러')
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div className="grid grid-cols-1 gap-4 gap-y-7 md:grid-cols-2">
        {projectData.map((data, index) => (
          <ProjectArticle key={index} data={data} />
        ))}
      </div>
      {/* <Button label="Show More" align="center" /> */}
    </>
  )
}

export default Project
