interface TitleProps {
  sectionName: string
  about?: boolean
}

const Title = ({ sectionName, about }: TitleProps) => {
  return (
    <h2
      className={`relative font-semibold text-2xl transition-all md:text-title font-solano text-dayPoint dark:text-nightPoint after:block after:contents-[''] after:absolute after:bg-black dark:after:bg-white after:w-full after:h-[1px] after:top-1/2 after:-translate-y-1/2 md:after:w-64 after:z-0 ${
        about ? 'mb-4' : 'mb-9 pt-24 after:mt-12'
      }`}
    >
      <span className="relative z-10 inline-block pr-5 dark:bg-nightBackground bg-dayBackground">
        {sectionName}
      </span>
    </h2>
  )
}

export default Title
