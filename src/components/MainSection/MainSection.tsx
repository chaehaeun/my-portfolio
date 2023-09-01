import Button from '@/components/UI/Button/Button'
import { forwardRef } from 'react'
import { TypeAnimation } from 'react-type-animation'

const MainSection = forwardRef<HTMLDivElement, {}>((_props, ref) => {
  const onClick = () => {
    window.open(
      'https://gregarious-hibiscus-c7f.notion.site/Frontend-Developer-e010bc2ddced488c8ec0be95ede47639',
      '_blank',
    )
  }

  return (
    <main
      ref={ref}
      className="flex flex-col justify-center w-full h-screen px-4 mx-auto min-h-[500px] max-w-7xl md:px-28"
    >
      <p className="font-semibold sm:text-3xl text-dayPoint dark:text-nightPoint font-solano">
        Hi there :D
      </p>
      <TypeAnimation
        sequence={[`STICK TO THE BASICS\nChae Haeun’s Portfolio.`]}
        cursor={true}
        speed={30}
        className="block h-24 text-3xl font-semibold whitespace-pre-line transition-all font-solano sm:text-7xl type sm:h-40 selection:text-nightContent selection:bg-dayPoint"
      />
      <p className="text-sm leading-relaxed">
        <span className="sm:block">
          안녕하세요! 신입 프론트엔드 개발자 채하은입니다.{' '}
        </span>
        <span>
          <span className="font-semibold text-dayPoint dark:text-nightPoint">
            다양한 사용자의 눈높이
          </span>
          에서 서비스에 대해 고민하며, 적절한 방향으로 문제를 개선 시켜나갈 수
          있는 개발자가 되겠습니다. 😄
        </span>
      </p>
      <Button
        label="RESUME"
        onClick={onClick}
        align="left"
        ariaLabel="이력서페이지로 이동"
      />
    </main>
  )
})

export default MainSection
