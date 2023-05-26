import { useEffect, useState } from 'react'

const ToggleButton = () => {
  const [toggle, setToggle] = useState('Dark')

  const toggleDarkMode = () => {
    if (localStorage.getItem('theme') === 'dark') {
      localStorage.removeItem('theme')
      document.documentElement.classList.remove('dark')
      setToggle('Light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setToggle('Dark')
    }
  }

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark')
      setToggle('Dark')
    } else {
      setToggle('Light')
    }
  }, [])

  return (
    <label className="relative inline-block w-16 h-9">
      <input
        type="checkbox"
        className="w-0 h-0 opacity-0 peer"
        defaultChecked={toggle === 'Dark' ? true : false}
      />
      <span
        onClick={toggleDarkMode}
        className="absolute top-0 bottom-0 rounded-full right-0 left-0 transition-all duration-300 cursor-pointer round bg-nightBackground before:absolute before:contents-[''] before:w-7 before:h-7 before:bg-nightPoint before:rounded-full before:bottom-1 before:left-1 before:transition-all before:duration-300 peer-checked:bg-dayBackground peer-checked:before:bg-dayPoint peer-checked:before:translate-x-7"
      >
        <span className="sr-only">
          {toggle === 'Dark' ? '라이트 모드로 전환' : '다크 모드로 전환'}
        </span>
      </span>
    </label>
  )
}

export default ToggleButton
