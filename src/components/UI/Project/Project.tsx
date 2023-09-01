import { useEffect, useState } from 'react'
import ProjectArticle from '@/components/UI/Project/ProjectArticle'
import Modal from '@/components/UI/Modal/Modal'
// import Button from '@/components/UI/Button/Button'
import { ProjectDataType } from '@/api/type'
import useModal from '@/hooks/useModal'
import { getProjectData } from '@/api/firebaseApis'

const Project = () => {
  const [projectData, setProjectData] = useState<ProjectDataType[]>([])
  const { showModal, openModal, closeModal, content } = useModal()

  useEffect(() => {
    const getData = async () => {
      try {
        const dataQuery = await getProjectData()
        setProjectData(dataQuery)
      } catch (error) {
        openModal('데이터를 불러오는데 실패했습니다.')
      }
    }
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
