import { useEffect, useState } from 'react'
import ProjectArticle from '@/components/UI/Project/ProjectArticle'
import Modal from '@/components/UI/Modal/Modal'
// import Button from '@/components/UI/Button/Button'
import { dbService } from '@/firebase-config'
import { DocumentData, collection, getDocs, query } from 'firebase/firestore'
import useModal from '@/hooks/useModal'

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
  const { showModal, openModal, closeModal, content } = useModal()

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
      openModal('데이터를 불러오는데 실패했습니다.')
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div className="grid grid-cols-1 gap-4 gap-y-7 md:grid-cols-2">
        {projectData.length === 0 && <p>데이터가 존재하지 않습니다.</p>}
        {projectData.map((data, index) => (
          <ProjectArticle key={index} data={data} />
        ))}
      </div>
      {/* <Button label="Show More" align="center" /> */}
      {showModal && <Modal onClose={closeModal}>{content}</Modal>}
    </>
  )
}

export default Project
