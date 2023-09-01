import Modal from '@/components/UI/Modal/Modal'
import ProjectArticle from '@/components/UI/Project/ProjectArticle'
import { useCallback, useEffect, useState } from 'react'
// import Button from '@/components/UI/Button/Button'
import { getProjectData } from '@/api/firebaseApis'
import { ProjectDataType } from '@/api/type'
import Button from '@/components/UI/Button/Button'
import useModal from '@/hooks/useModal'
import { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore'

const ITEMS_PER_PAGE = 4

const Project = () => {
  const [projectData, setProjectData] = useState<ProjectDataType[]>([])
  const [lastDoc, setLastDoc] =
    useState<QueryDocumentSnapshot<DocumentData> | null>(null)
  const [hasMoreData, setHasMoreData] = useState<boolean>(true)
  const { showModal, openModal, closeModal, content } = useModal()

  const loadMoreData = useCallback(async () => {
    try {
      if (!hasMoreData) return
      const result = await getProjectData(ITEMS_PER_PAGE, lastDoc)

      if (result.data.length < ITEMS_PER_PAGE) {
        setHasMoreData(false)
      }
      setProjectData(prevData => [...prevData, ...result.data])
      setLastDoc(result.lastDocument)
    } catch (error) {
      openModal('데이터를 불러오는데 실패했습니다.')
    }
  }, [hasMoreData, lastDoc, openModal])

  // TODO : 모달 상태를 recoil로 중앙에서 관리하도록 변경
  useEffect(() => {
    loadMoreData()
  }, [])

  const loadNextData = () => {
    loadMoreData() // 데이터를 더 불러옵니다.
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-4 gap-y-7 md:grid-cols-2">
        {projectData.length === 0 && <p>데이터가 존재하지 않습니다.</p>}
        {projectData.map((data, index) => (
          <ProjectArticle key={index} data={data} />
        ))}
      </div>
      {hasMoreData && (
        <Button label="Show More" align="center" onClick={loadNextData} />
      )}
      {showModal && <Modal onClose={closeModal}>{content}</Modal>}
    </>
  )
}

export default Project
