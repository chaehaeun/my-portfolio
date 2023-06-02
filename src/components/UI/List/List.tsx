import { useEffect, useState } from 'react'

export interface AboutListData {
  id: number
  name: string
  date: string
  detail: string[]
  tag?: string
  stackName?: string
  [key: string]: any
}

interface ListProps {
  data: AboutListData | null
  objName: string
}

const List: React.FC<ListProps> = ({ data, objName }) => {
  const [listData, setListData] = useState<AboutListData[] | null>(null)

  useEffect(() => {
    if (data) {
      setListData(data[objName])
    }
  }, [data])

  return (
    <ul
      className={` ${
        listData && listData[0]?.name === null
          ? 'grid lg:grid-cols-2 gap-5 lg:gap-y-7'
          : 'space-y-8'
      }`}
    >
      {listData &&
        listData.map((list: AboutListData) => (
          <li key={`${objName}${list.id}`}>
            {list.name === null ? (
              <img src={list.tag} alt={list.stackName} />
            ) : (
              <p className="flex items-center justify-between text-sm md:text-base">
                <span className="text-lg font-bold md:text-xl dark:text-nightContent">
                  {list.name}
                </span>
                <span className="shrink-0">{list.date}</span>
              </p>
            )}

            <ul className={`pt-3 space-y-2 `}>
              {list?.detail.map((text: string, index: number) => (
                <li
                  key={`detail${index}`}
                  className="text-sm md:text-base before:block before:mr-3 before:mt-2 before:contents-[''] before:w-1 before:rounded-full before:h-1 dark:before:bg-nightContent before:shrink-0 before:bg-dayContent flex"
                >
                  {text}
                </li>
              ))}
            </ul>
          </li>
        ))}
    </ul>
  )
}

export default List
