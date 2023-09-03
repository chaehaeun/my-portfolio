import { LastDoc, ProjectDataType, getProjectData } from '@/api'
import { Button, Modal, ProjectArticle } from '@/components'
import useModal from '@/hooks/useModal'
import { useCallback, useEffect, useState } from 'react'

const ITEMS_PER_PAGE = 4

const Project = () => {
  const [projectData, setProjectData] = useState<ProjectDataType[]>([])
  const [lastDoc, setLastDoc] = useState<LastDoc>(null)
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
    loadMoreData()
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
