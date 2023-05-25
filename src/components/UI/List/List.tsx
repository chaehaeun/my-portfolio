import React from 'react'

interface ListProps {
  data: any
}

const List: React.FC<ListProps> = ({ data }) => {
  return (
    <ul>
      <li>
        <p className="flex items-center justify-between text-sm md:text-base">
          <span className="text-lg font-bold md:text-xl dark:text-nightContent">
            {data}
          </span>
          <span className=" shrink-0">2021.02 - 2022.3</span>
        </p>
        <ul className="pt-3 space-y-2">
          <li className="text-sm md:text-base before:block before:mr-3 before:mt-2 before:contents-[''] before:w-1 before:rounded-full before:h-1 dark:before:bg-nightContent before:bg-dayContent flex">
            웹 디자인 및 퍼블리싱 담당
          </li>
          <li className="text-sm md:text-base before:block before:mr-3 before:mt-2 before:contents-[''] before:w-1 before:rounded-full before:h-1 dark:before:bg-nightContent before:bg-dayContent flex">
            웹 디자인 및 퍼블리싱 담당
          </li>
          <li className="text-sm md:text-base before:block before:mr-3 before:mt-2 before:contents-[''] before:w-1 before:rounded-full before:h-1 dark:before:bg-nightContent before:bg-dayContent flex">
            웹 디자인 및 퍼블리싱 담당
          </li>
        </ul>
      </li>
    </ul>
  )
}

export default List
