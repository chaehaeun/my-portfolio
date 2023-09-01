import { getAboutData } from '@/api/firebaseApis'
import { AboutDataType } from '@/api/type'
import profileIMG from '@/assets/profile.png'
import Container from '@/components/UI/Container/Container'
import List from '@/components/UI/List/List'
import Modal from '@/components/UI/Modal/Modal'
import Title from '@/components/UI/Title/Title'
import useModal from '@/hooks/useModal'
import { forwardRef, useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'

const AboutSection = forwardRef<HTMLDivElement, {}>((_props, ref) => {
  const [aboutData, setAboutData] = useState<AboutDataType[]>([])
  const { showModal, openModal, closeModal, content } = useModal()

  useEffect(() => {
    const getData = async () => {
      try {
        const dataQuery = await getAboutData()
        setAboutData(dataQuery)
      } catch (error) {
        openModal('데이터를 불러오는데 실패했습니다.')
      }
    }

    getData()
  }, [])

  return (
    <div ref={ref}>
      <Container>
        <Title sectionName="ABOUT" />
        <div className="items-start md:flex">
          <img
            src={profileIMG}
            className="border-2 border-black md:shrink md:mr-7 md:w-48 w-36 lg:w-auto shadow-wrap dark:border-white dark:shadow-wrapDark"
            alt="포트폴리오 사진"
          />
          <div>
            <h3 className="my-3 text-3xl font-semibold lg:text-6xl md:mt-0 lg:mb-6 font-solano text-dayPoint dark:text-nightPoint">
              STICK TO THE BASICS
            </h3>
            <p className="mb-3 ml-1 font-semibold lg:mb-6 lg:text-xl">
              <span>저는 </span>
              <TypeAnimation
                sequence={[
                  '새로운 것을 익히는 것을 좋아하는',
                  1000,
                  '웹 접근성을 준수하는',
                  1000,
                  '재사용하기 쉬운 코드를 짜기 위해 노력하는',
                  1000,
                  '묵묵히 맡은 바에 책임을 다하는',
                  1000,
                  '끊임없이 고민하고 개선하는',
                  1000,
                ]}
                speed={50}
                className="font-semibold lg:text-xl"
                repeat={Infinity}
              />{' '}
              <span>사람입니다.</span>
            </p>

            <ul className="space-y-2 text-sm">
              <li className="text-sm md:text-base before:block before:mr-3 before:mt-2 before:contents-[''] before:w-1 before:rounded-full before:h-1 dark:before:bg-nightContent before:shrink-0 before:bg-dayContent flex">
                새로운 기술이나 툴에 대해 학습하는 것에 두려움이 없으며, 이를
                작업물에 응용하여 개발 경험을 더욱 풍부하게 만드는 것을
                즐깁니다.
              </li>
              <li className="text-sm md:text-base before:block before:mr-3 before:mt-2 before:contents-[''] before:w-1 before:rounded-full before:h-1 dark:before:bg-nightContent before:shrink-0 before:bg-dayContent flex">
                다양한 사용자의 환경을 고려하여 웹 접근성을 준수하는 서비스를
                개발하기 위해 노력합니다.
              </li>
              <li className="text-sm md:text-base before:block before:mr-3 before:mt-2 before:contents-[''] before:w-1 before:rounded-full before:h-1 dark:before:bg-nightContent before:shrink-0 before:bg-dayContent flex">
                효율적이고 누구나 재사용하기 쉬운 코드를 짜기 위해 고심하여
                컴포넌트를 구성합니다.
              </li>
              <li className="text-sm md:text-base before:block before:mr-3 before:mt-2 before:contents-[''] before:w-1 before:rounded-full before:h-1 dark:before:bg-nightContent before:shrink-0 before:bg-dayContent flex">
                묵묵히 할 일을 하면서도 타인과 원활하게 소통하며 일하는 것에
                능합니다.
              </li>
              <li className="text-sm md:text-base before:block before:mr-3 before:mt-2 before:contents-[''] before:w-1 before:rounded-full before:h-1 dark:before:bg-nightContent before:shrink-0 before:bg-dayContent flex">
                완성한 코드에서 그치는 것이 아닌 더 나은 디테일을 위해
                고민합니다.
              </li>
            </ul>
          </div>
        </div>
        <ul className="grid grid-cols-1 mt-10 gap-y-10 lg:gap-7 lg:grid-cols-2 lg:gap-y-14">
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
            <Title sectionName="Main Skills" about={true} />
            <List data={aboutData[3]} objName={'stack'} />
          </li>
        </ul>
      </Container>
      {showModal && <Modal onClose={closeModal}>{content}</Modal>}
    </div>
  )
})

export default AboutSection
