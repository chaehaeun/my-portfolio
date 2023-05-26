import { useEffect, useState } from 'react'
import ProjectArticle from '@/components/UI/Project/ProjectArticle'
import Button from '@/components/UI/Button/Button'
import { dbService } from '@/firebase-config'
import { collection, getDocs, query } from 'firebase/firestore'

const Project = () => {
  const [aboutData, setAboutData] = useState<any>([])

  const getData = async () => {
    try {
      const projectQuery = query(collection(dbService, 'project'))

      const querySnapshot = await getDocs(projectQuery)
      const dataQuery = querySnapshot.docs.map(doc => doc.data())

      setAboutData(dataQuery)
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
        {aboutData.map((data: any, index: number) => (
          <ProjectArticle key={index} data={data} />
        ))}
      </div>
      <Button label="Show More" align="center" />
    </>
  )
}

export default Project
