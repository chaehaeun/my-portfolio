import { AboutDataType, ProjectDataType } from '@/api/type'
import { dbService } from '@/firebase-config'
import { collection, getDocs, query } from 'firebase/firestore'

export const getAboutData = async () => {
  const aboutQuery = query(collection(dbService, 'about'))

  const querySnapshot = await getDocs(aboutQuery)
  const dataQuery = querySnapshot.docs.map(doc => doc.data() as AboutDataType)

  return dataQuery
}

export const getProjectData = async () => {
  const projectQuery = query(collection(dbService, 'project'))

  const querySnapshot = await getDocs(projectQuery)
  const dataQuery = querySnapshot.docs.map(doc => doc.data() as ProjectDataType)
  dataQuery.sort((a, b) => {
    return b.id - a.id
  })

  return dataQuery
}
