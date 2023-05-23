import ProjectArticle from '@/components/UI/Project/ProjectArticle'

const DUMMY = {
  projects: '프로젝트 제목',
  date: '23.03.09 - 23.03.28',
  description:
    '귀는 더운지라 그들의 피가 품으며, 기쁘며, 위하여 듣는다. 커다란 곳이 보는 끓는 이 그러므로 행복스럽고 가슴이 철환하였는가? 이상 쓸쓸한 그것은 피고, 관현악이며, 있음으로써 인간은 아니한 목숨을 교향악이다.',
  techStack: ['React', 'TypeScript', 'Tailwind CSS'],
  tag: ['팀 프로젝트', '클론', '개인 프로젝트'],
  github: '...',
  notion: '...',
  imgURL:
    'http://skg1891.cafe24.com/wp-content/uploads/2013/11/dummy-image-square.jpg',
}
const DUMMY_2 = {
  projects: '프로젝트 제목',
  date: '23.03.09 - 23.03.28',
  description: '귀는 더운지라 그들의 피가 품으며, 기쁘며, 위하여 듣는다. ',
  techStack: [
    'React',
    'TypeScript',
    'Tailwind CSS',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'React',
    'TypeScript',
    'Tailwind CSS',
  ],
  tag: ['팀 프로젝트', '클론', '개인 프로젝트'],
  github: '...',
  notion: '...',
  imgURL:
    'http://skg1891.cafe24.com/wp-content/uploads/2013/11/dummy-image-square.jpg',
}

const Project = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <ProjectArticle data={DUMMY} />
      <ProjectArticle data={DUMMY_2} />
    </div>
  )
}

export default Project
