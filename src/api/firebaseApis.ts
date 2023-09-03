import { AboutDataType, ProjectDataType } from '@/api'
import { dbService } from '@/firebase-config'
import {
  DocumentData,
  QueryDocumentSnapshot,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
} from 'firebase/firestore'

export const getAboutData = async () => {
  const aboutQuery = query(collection(dbService, 'about'))

  const querySnapshot = await getDocs(aboutQuery)
  const dataQuery = querySnapshot.docs.map(doc => doc.data() as AboutDataType)

  return dataQuery
}

export const getProjectData = async (
  itemsPerPage: number,
  lastDoc: QueryDocumentSnapshot<DocumentData> | null,
) => {
  const projectQuery = query(
    collection(dbService, 'project'),
    orderBy('id', 'desc'),
    ...(lastDoc ? [startAfter(lastDoc)] : []),
    limit(itemsPerPage),
  )

  const querySnapshot = await getDocs(projectQuery)

  const lastDocument = querySnapshot.docs.length
    ? querySnapshot.docs[querySnapshot.docs.length - 1]
    : null

  const dataQuery = querySnapshot.docs.map(doc => doc.data() as ProjectDataType)

  return {
    data: dataQuery,
    lastDocument,
  }
}
