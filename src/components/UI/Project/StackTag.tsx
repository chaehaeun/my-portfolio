import React from 'react'

type Stack = 'HTML5' | 'CSS3' | 'TypeScript' | 'React' | 'Tailwind CSS' | string

interface StackProps {
  stack: Stack
}

const StackTag: React.FC<StackProps> = ({ stack }) => {
  const STACKS: { [key in Stack]: string } = {
    HTML5:
      'https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white',
    CSS3: 'https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white',
    TypeScript:
      'https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white',
    React:
      'https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white',
    'Tailwind CSS':
      'https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white',
  }

  return <img src={STACKS[stack]} alt={stack} />
}

export default StackTag
