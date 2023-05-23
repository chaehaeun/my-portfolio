import React from 'react'
import StackTag from '@/components/UI/Project/StackTag'
import ProjectTypeTag from './ProjectTypeTag'

type DataType = {
  projects: string
  date: string
  description: string
  techStack: string[]
  tag: string[]
  github?: string
  notion?: string
  imgURL: string
}

interface ProjectProps {
  data: DataType
}

const ProjectArticle: React.FC<ProjectProps> = ({ data }) => {
  return (
    <article className="flex flex-col border-2 border-black shadow-wrap dark:border-white dark:shadow-wrapDark dark:bg-slate-800">
      <div>
        <img
          className="object-cover w-full h-64 border-b-2 border-black dark:border-white"
          src={data.imgURL}
          alt={`${data.projects} 썸네일`}
        />
      </div>
      <div className="flex items-center justify-between px-5 mt-4 mb-3">
        <div>
          <h3 className="text-xl font-semibold">{data.projects}</h3>
          <span className="font-medium ">{data.date}</span>
        </div>
        <div className="flex gap-3">
          {data.github && (
            <a target="_blank" href={data.github}>
              <svg
                className="w-6 h-6 "
                viewBox="0 0 365 357"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  className="dark:fill-white"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M182.5 0C81.7 0 0 81.7 0 182.5C0 263.1 52.3 331.5 124.8 355.7C133.9 357.4 137.3 351.7 137.3 346.9C137.3 342.5 137.1 328.2 137.1 312.9C86.3 323.9 75.6 291.4 75.6 291.4C67.3 270.3 55.3 264.7 55.3 264.7C38.7 253.4 56.5 253.6 56.5 253.6C74.8 254.9 84.5 272.4 84.5 272.4C100.8 300.3 127.2 292.2 137.6 287.6C139.2 275.8 144 267.8 149.2 263.2C108.7 258.6 66 242.9 66 173C66 153.1 73.1 136.8 84.8 124C82.9 119.4 76.7 100.8 86.6 75.7C86.6 75.7 101.9 70.8 136.8 94.4C151.4 90.4 167 88.3 182.5 88.3C198 88.4 213.6 90.4 228.2 94.4C263 70.8 278.3 75.7 278.3 75.7C288.2 100.8 282 119.4 280.1 124C291.8 136.8 298.9 153.1 298.9 173C298.9 243.1 256.2 258.5 215.6 263C222.1 268.7 228 279.8 228 296.8C228 321.2 227.8 340.9 227.8 346.9C227.8 351.8 231.1 357.4 240.3 355.7C312.8 331.5 365 263.2 365 182.5C365 81.7 283.3 0 182.5 0Z"
                  fill="#181616"
                />
                <path
                  d="M69.1 262C68.7 262.9 67.3 263.2 66 262.6C64.7 262 63.9 260.8 64.4 259.9C64.8 259 66.2 258.7 67.5 259.3C68.8 259.9 69.6 261.1 69.1 262Z"
                  fill="#181616"
                />
                <path
                  d="M76.5 270.3C75.6 271.1 73.9 270.7 72.8 269.5C71.6 268.2 71.4 266.5 72.3 265.7C73.2 264.9 74.8 265.3 76 266.5C77.2 267.8 77.4 269.5 76.5 270.3Z"
                  fill="#181616"
                />
                <path
                  d="M83.7 280.8C82.6 281.6 80.8 280.9 79.6 279.2C78.5 277.6 78.5 275.6 79.6 274.8C80.7 274 82.5 274.7 83.7 276.3C84.9 278 84.9 280 83.7 280.8Z"
                  fill="#181616"
                />
                <path
                  d="M93.6 290.9C92.6 292 90.5 291.7 88.9 290.2C87.3 288.7 86.9 286.6 87.9 285.5C88.9 284.4 91.1 284.7 92.6 286.2C94.2 287.8 94.6 289.9 93.6 290.9Z"
                  fill="#181616"
                />
                <path
                  d="M107.2 296.8C106.8 298.2 104.7 298.9 102.6 298.3C100.5 297.7 99.2 296 99.6 294.6C100 293.2 102.1 292.5 104.2 293.1C106.2 293.7 107.6 295.4 107.2 296.8Z"
                  fill="#181616"
                />
                <path
                  d="M122.1 297.9C122.2 299.4 120.4 300.7 118.2 300.7C116 300.8 114.3 299.5 114.2 298C114.2 296.5 115.9 295.2 118.1 295.2C120.3 295.2 122.1 296.4 122.1 297.9Z"
                  fill="#181616"
                />
                <path
                  d="M136 295.6C136.3 297.1 134.8 298.6 132.6 299C130.5 299.4 128.5 298.5 128.3 297C128 295.5 129.6 294 131.7 293.6C133.8 293.2 135.7 294.1 136 295.6Z"
                  fill="#181616"
                />
              </svg>

              <span className="sr-only">Github 페이지로 바로가기</span>
            </a>
          )}
          {data.notion && (
            <a target="_blank" href={data.notion}>
              <span className="sr-only">노션 페이지로 바로가기</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
              >
                <title>Notion</title>
                <path
                  className="dark:fill-white"
                  d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
      <p className="h-[72px] mx-5 mb-3 line-clamp-3 ">{data.description}</p>
      <ul className="flex flex-wrap gap-1 mx-5 mb-3 grow">
        {data.techStack.map((item, index) => (
          <li key={index}>
            <StackTag stack={item} />
          </li>
        ))}
      </ul>
      <ul className="flex flex-wrap gap-1 mx-5 mb-5">
        {data.tag.map((item, index) => (
          <li key={index}>
            <ProjectTypeTag type={item} />
          </li>
        ))}
      </ul>
    </article>
  )
}

export default ProjectArticle
