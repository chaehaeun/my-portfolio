import { useEffect, useState } from 'react'

interface ListProps {
  data?: any
  objName: string
}

const List: React.FC<ListProps> = ({ data, objName }) => {
  const [listData, setListData] = useState<any>([])

  useEffect(() => {
    if (data) {
      setListData(data[objName])
    }
  }, [data])

  return (
    <ul className="space-y-5 ">
      {listData
        .map((list: any) => (
          <li key={`${objName}${list.id}`}>
            <p className="flex items-center justify-between text-sm md:text-base">
              <span className="text-lg font-bold md:text-xl dark:text-nightContent">
                {list.name}
              </span>
              <span className="shrink-0">{list.date}</span>
            </p>
            <ul className="pt-3 space-y-2">
              {list?.detail.map((text: any, index: number) => (
                <li
                  key={`detail${index}`}
                  className="text-sm md:text-base before:block before:mr-3 before:mt-2 before:contents-[''] before:w-1 before:rounded-full before:h-1 dark:before:bg-nightContent before:shrink-0 before:bg-dayContent flex"
                >
                  {text}
                </li>
              ))}
            </ul>
          </li>
        ))
        .reverse()}
    </ul>
  )
}

export default List
