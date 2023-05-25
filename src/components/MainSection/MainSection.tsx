import React, { forwardRef } from 'react'
import Button from '@/components/UI/Button/Button'
import { TypeAnimation } from 'react-type-animation'

interface MainSectionProps {
  ref?: React.Ref<HTMLDivElement>
}

const MainSection: React.FC<MainSectionProps> = forwardRef((_props, ref) => {
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
        사람은 청춘의 같이, 이상은 거선의 생명을 없는 봄바람이다. 피가 위하여
        천고에 내는 불어 같은 충분히 커다란 행복스럽고 그리하였는가? 용기가
        풍부하게 청춘을 열락의 말이다. 소금이라 피에 보배를 얼마나 그들에게
        일월과 않는 장식하는 사막이다. 웅대한 실현에 생생하며, 약동하다.
      </p>
      <Button label="RESUME" align="left" />
    </main>
  )
})

export default MainSection
