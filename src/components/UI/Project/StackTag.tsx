import React from 'react'

type Stack =
  | 'HTML5'
  | 'CSS3'
  | 'Javascript'
  | 'Typescript'
  | 'React'
  | 'Tailwind CSS'
  | 'React-Router'
  | 'Firebase'
  | 'Redux-Toolkit'
  | 'Storybook'
  | 'Vite'
  | 'Figma'
  | 'Next.js'
  | 'CSS Modules'
  | 'Styled-Components'
  | 'Sass'
  | 'Recoil'
  | 'TanStack Query'
  | string

interface StackProps {
  stack: Stack
}

const StackTag: React.FC<StackProps> = ({ stack }) => {
  const STACKS: { [key in Stack]: string } = {
    HTML5:
      'https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white',
    CSS3: 'https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white',
    Javascript:
      'https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=white',
    Typescript:
      'https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white',
    React:
      'https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white',
    'Tailwind CSS':
      'https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white',
    'React-Router':
      'https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white',
    Firebase:
      'https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=white',
    'Redux-Toolkit':
      'https://img.shields.io/badge/Redux_Toolkit-764ABC?style=flat-square&logo=redux&logoColor=white',
    Storybook:
      'https://img.shields.io/badge/Storybook-FF4785?style=flat-square&logo=storybook&logoColor=white',
    Vite: 'https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white',
    Figma:
      'https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white',
    'Next.js':
      'https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white',
    'CSS Modules':
      'https://img.shields.io/badge/CSS_Modules-000000?style=flat-square&logo=cssmodules&logoColor=white',
    'Styled-Components':
      'https://img.shields.io/badge/Styled_Components-DB7093?style=flat-square&logo=styled-components&logoColor=white',
    Sass: 'https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=sass&logoColor=white',
    Recoil:
      'https://img.shields.io/badge/Recoil-3578E5?style=flat-square&logo=recoil&logoColor=white',
    'TanStack Query':
      'https://img.shields.io/badge/TanStack_Query-FF4154?style=flat-square&logo=react-query&logoColor=white',
  }

  return <img src={STACKS[stack]} alt={stack} />
}

export default StackTag
