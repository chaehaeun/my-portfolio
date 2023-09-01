import Container from '@/components/UI/Container/Container'
import { forwardRef } from 'react'

const ContactSection = forwardRef<HTMLDivElement, {}>((_props, ref) => {
  return (
    <div ref={ref}>
      <Container>
        <div className="relative bg-gradient-to-b w-[280px] h-[140px] rounded-t-full  mx-auto from-nightPoint to-dayPoint ">
          <h2 className="absolute font-semibold text-white -translate-x-1/2 -bottom-2 text-7xl font-solano left-1/2">
            CONTACT
          </h2>
        </div>
        <div className="mx-auto mt-4 w-fit">
          <p className="text-left font-solano">
            <span className="inline-block w-16 mr-2 text-2xl font-medium ">
              Email
            </span>
            <span className="inline-block text-xl">chae_3210@naver.com</span>
          </p>
          <p className="text-left font-solano">
            <span className="inline-block w-16 mr-2 text-2xl font-medium ">
              Phone
            </span>
            <span className="inline-block text-xl">010-4103-2867</span>
          </p>
        </div>
      </Container>
    </div>
  )
})

export default ContactSection
