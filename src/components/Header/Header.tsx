import { useState } from 'react'
import ToggleButton from '../UI/Button/ToggleButton'

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <header className="flex items-center w-full p-4 mx-auto xl:px-0 max-w-7xl">
      <h1 className="text-3xl font-bold font-solano grow">Chae Haeun</h1>
      <div
        className={`fixed left-0 top-0 z-50 w-full h-full sm:w-auto sm:bg-transparent sm:dark:bg-transparent sm:h-auto bg-white/75 dark:bg-black/75 sm:translate-y-0 sm:static ${
          toggleMenu ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <ul className="absolute items-center gap-5 space-y-2 text-3xl font-semibold text-center text-black -translate-x-1/2 -translate-y-1/2 sm:text-2xl sm:flex sm:space-y-0 font-solano left-1/2 top-1/2 dark:text-nightContent sm:static sm:translate-x-0 sm:translate-y-0">
          <li className="">Main</li>
          <li>
            <button type="button">About</button>
          </li>
          <li>
            <button type="button">Projects</button>
          </li>
          <li>
            <button type="button">Contact</button>
          </li>
          <li>
            <ToggleButton />
          </li>
        </ul>
      </div>
      <button
        type="button"
        className="relative z-50 h-8 w-9 sm:hidden"
        onClick={() => {
          setToggleMenu(prev => !prev)
        }}
      >
        <span
          className={`absolute top-0 left-0 w-full h-1 transition-all duration-500 rounded-sm bg-dayPoint dark:bg-nightPoint ${
            toggleMenu ? 'rotate-45 translate-y-4' : ''
          }`}
        ></span>
        <span
          className={`absolute left-0 w-full h-1 transition-all duration-500 -translate-y-1/2 rounded-sm top-1/2 bg-dayPoint dark:bg-nightPoint ${
            toggleMenu ? 'opacity-0' : ''
          }`}
        ></span>
        <span
          className={`absolute left-0 bottom-0  w-full h-1 transition-all duration-500 rounded-sm bg-dayPoint dark:bg-nightPoint ${
            toggleMenu ? '-rotate-45' : ''
          }}`}
        ></span>
        <span className="sr-only">메뉴열기</span>
      </button>
    </header>
  )
}

export default Header
