import Container from '@/components/UI/Container/Container'
import Title from '@/components/UI/Title/Title'
import profileIMG from '@/assets/profile.png'
import List from '@/components/UI/List/List'
import { forwardRef, useEffect, useState } from 'react'
import { dbService } from '@/firebase-config'
import { collection, getDocs, query } from 'firebase/firestore'

interface AboutSectionProps {
  ref?: React.Ref<HTMLDivElement>
}

const AboutSection: React.FC<AboutSectionProps> = forwardRef((_props, ref) => {
  const [aboutData, setAboutData] = useState<any>([])

  const getData = async () => {
    try {
      const aboutQuery = query(collection(dbService, 'about'))

      const querySnapshot = await getDocs(aboutQuery)
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
    <div ref={ref}>
      <Container>
        <Title sectionName="ABOUT" />
        <div className="items-start md:flex">
          <img
            src={profileIMG}
            className="border-2 border-black md:shrink md:mr-5 md:w-48 w-36 lg:w-auto shadow-wrap dark:border-white dark:shadow-wrapDark"
            alt="포트폴리오 사진"
          />
          <div>
            <h3 className="my-3 text-3xl font-semibold lg:text-6xl md:mt-0 lg:mb-6 font-solano text-dayPoint dark:text-nightPoint">
              STICK TO THE BASICS
            </h3>
            <p className="mb-3 font-semibold lg:text-2xl lg:mb-6">
              ‘기본에 충실한 어쩌구저쩌구’
            </p>
            <p className="text-sm ">
              <span className="block mb-3">
                속에 대고, 찾아 오아이스도 힘차게 구하지 트고, 황금시대다. 끓는
                것은 이성은 아니한 그들의 그들은 풀이 것은 같으며, 이것이다.
                위하여 풍부하게 눈이 것이다. 구하지 피가 노년에게서 할지니, 것이
                행복스럽고 인생을 것이다. 것이다.보라, 설산에서 못할 때까지
                일월과 있으랴? 위하여, 곧 쓸쓸한 주는 못할 길지 가슴에 이상의
                없는 교향악이다.
              </span>
              <span>
                우리 이상을 용감하고 끓는 이는 피어나기 있으며, 위하여 위하여
                말이다. 유소년에게서 따뜻한 풀이 원질이 인생에 찾아다녀도,
                것이다. 밥을 물방아 얼음 광야에서 어디 이것이다. 청춘의 뜨고,
                힘차게 없으면, 피다. 관현악이며, 반짝이는 속에 주며, 꾸며 예가
                설레는 있다. 못할 오아이스도 이성은 놀이 발휘하기 품에 것이다.
              </span>
            </p>
          </div>
        </div>
        <ul className="grid grid-cols-1 mt-10 gap-y-10 lg:gap-5 lg:grid-cols-2 lg:gap-y-14">
          <li>
            <Title sectionName="Experience" about={true} />
            <List data={aboutData[1]} objName={'experience'} />
          </li>
          <li>
            <Title sectionName="License" about={true} />
            <List data={aboutData[2]} objName={'license'} />
          </li>
          <li className="lg:col-span-2">
            <Title sectionName="Education" about={true} />
            <List data={aboutData[0]} objName={'edu'} />
          </li>
          <li className="lg:col-span-2">
            <Title sectionName="Skills" about={true} />
            <List data={aboutData[3]} objName={'stack'} />
          </li>
        </ul>
      </Container>
    </div>
  )
})

export default AboutSection
