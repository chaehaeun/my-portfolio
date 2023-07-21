import React from 'react'

interface ProjectTypeTagProps {
  type: string
}

const ProjectTypeTag: React.FC<ProjectTypeTagProps> = ({ type }) => {
  switch (type) {
    case '개인 프로젝트':
      return (
        <span className="px-2 py-1 text-xs text-white bg-blue-700 rounded-full">
          개인 프로젝트
        </span>
      )
    case '팀 프로젝트':
      return (
        <span className="px-2 py-1 text-xs text-white rounded-full bg-dayPoint">
          팀 프로젝트
        </span>
      )
    case '클론':
      return (
        <span className="px-2 py-1 text-xs text-white rounded-full bg-rose-600">
          클론
        </span>
      )
  }

  return (
    <span className="px-2 py-1 text-xs text-white bg-gray-100 rounded-full">
      ??
    </span>
  )
}

export default ProjectTypeTag
